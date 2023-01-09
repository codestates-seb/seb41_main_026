package back.domain.user.service;


import back.domain.course.service.CourseLikeService;
import back.domain.enums.UserStatus;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
import back.domain.user.dto.UserPostDto;
import back.domain.user.entity.User;
import back.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;


    /* user 생성 */
    public User post(User user, UserPostDto userPostDto) {
        user.setEmail(userPostDto.getEmail());
        user.setName(userPostDto.getName());
        user.setPassword(userPostDto.getPassword());
        user.setUserImage("basic");
        user.setUserStatus(UserStatus.ACTIVITY);

        User save  = userRepository.save(user);
        return save;
    }

    /* user 단건 조회 */
    public User get(Long userId) {

        User user = verifiedUser(userId);
//        user.setLikeCount(user);
        return user;
    }





    public User verifiedUser(Long userId){
        Optional<User> findUser = userRepository.findById(userId);
        User user = findUser.orElseThrow(
                () -> new BusinessException(ErrorCode.USER_NOT_FOUND));
        return user;
    }


    public User patch(User user, Long userId) {
        User findUser = verifiedUser(userId);


        Optional.ofNullable(user.getName())
                .ifPresent(name -> findUser.setName(name));
        Optional.ofNullable(user.getUserImage())
                .ifPresent(image -> findUser.setUserImage(image));
        Optional.ofNullable(user.getPassword())
                .ifPresent(password -> findUser.setPassword(password));

        findUser.setModifiedAt(LocalDateTime.now());

        return userRepository.save(findUser);

    }

    public void delete(Long userId) {
        User user = verifiedUser(userId);
        userRepository.delete(user);

    }

    public void verifiedEmail(UserPostDto userPostDto){
        Optional<User> user = userRepository.findByEmail(userPostDto.getEmail());
        if(user.isPresent()){
            throw new BusinessException(ErrorCode.USER_EMAIL_EXISTS);
        }
    }
}
