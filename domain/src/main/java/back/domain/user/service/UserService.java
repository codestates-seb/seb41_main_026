package back.domain.user.service;


import back.domain.enums.UserStatus;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import back.domain.user.dto.UserPostDto;
import back.domain.user.entity.User;
import back.domain.user.repository.UserRepository;
import back.domain.utils.JwtAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import back.domain.course.entity.CourseLike;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserService {
    @Value("${ADMIN_EMAIL}")
    private String adminEmail;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final JwtAuthorityUtils jwtAuthorityUtils;

    public User post(User user) {
        // 이미 등록된 이메일인지 확인
        verifyExistEmail(user.getEmail());

        user.setEmail(user.getEmail());
        user.setName(user.getName());
        user.setUserImage("basic");
        user.setUserStatus(UserStatus.ACTIVITY);

        // password 암호화
        String encode = passwordEncoder.encode(user.getPassword());
        user.setPassword(encode);

        // DB에 User Role 저장
        List<String> roles = jwtAuthorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);
        return userRepository.save(user);
    }
    public User get(Long userId) {
        User user = verifiedUser(userId);
        Integer count = user.getCourseLikes().stream()
                .map(CourseLike::getCourseLikeStatus)
                .mapToInt(i -> i)
                .sum();
        user.setLikeCount(count);
        return userRepository.save(user);
    }

    public List<User> gets() {
        return userRepository.findAll();
    }

    public User verifiedUser(Long userId) {
        Optional<User> findUser = userRepository.findById(userId);
        return findUser.orElseThrow( () -> new BusinessException(ErrorCode.USER_NOT_FOUND));
    }

    public User patch(User user, Long userId) throws BusinessException {
        User findUser = verifiedUser(userId);

        Optional.ofNullable(user.getName())
                .ifPresent(findUser::setName);
        Optional.ofNullable(user.getUserImage())
                .ifPresent(findUser::setUserImage);
        Optional.ofNullable(user.getPassword())
                .ifPresent(findUser::setPassword);

        findUser.setModifiedAt(LocalDateTime.now());

        //password 에 empty 값 들어왔을 때 : 기존 패스워드 그대로 유지
        if (user.getPassword().trim().isEmpty()) {
            log.info("비밀번호 변경 없음");
        }
        //password 변경있을 경우 :
        else if (!user.getPassword().isEmpty()) {
            //일반회원 - 유효성 검증 통과시 패스워드 변경
            if (findUser.getPassword() != null) {
                if (Pattern.matches("^[A-Za-z0-9]{6,12}$", user.getPassword())) {
                    String newPassword = passwordEncoder.encode(user.getPassword());
                    findUser.setPassword(newPassword);
                } else throw new BusinessException(ErrorCode.INVALID_PASSWORD);
            }
            //소셜 회원 - 패스워드 변경 불가
            else {
                throw new BusinessException(ErrorCode.ACCESS_FORBIDDEN);
            }
        }

        return userRepository.save(findUser);
    }

    public void delete(Long userId) {
        User findUser = verifiedUser(userId);

        userRepository.delete(findUser);
    }

    private void verifyExistEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessException(ErrorCode.USER_EMAIL_EXISTS);
    }
}
