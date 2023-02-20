package back.domain.user;

import back.domain.exception.BusinessException;
import back.domain.user.entity.User;
import back.domain.user.repository.UserRepository;
import back.domain.user.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void createUserTest() {
        User user = new User("홍길동", "hgd@gmail.com", "abcd123!","google");

        given(userRepository.findByEmail(Mockito.anyString())).willReturn(Optional.of(user));

        assertThrows(BusinessException.class, () -> userService.post(user));
    }
}
