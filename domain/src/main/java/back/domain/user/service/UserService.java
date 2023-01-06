package back.domain.user.service;


import back.domain.enums.UserStatus;
import back.domain.user.dto.UserPostDto;
import back.domain.user.entity.User;
import back.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User post(User user, UserPostDto userPostDto) {
        user.setEmail(userPostDto.getEmail());
        user.setName(userPostDto.getName());
        user.setUserImage("basic");
        user.setUserStatus(UserStatus.ACTIVITY);
        user.setPassword(userPostDto.getPassword());
        User save = userRepository.save(user);
        return save;
    }
}
