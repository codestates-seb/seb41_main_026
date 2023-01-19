package back.domain.user.repository;



import back.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);

    // 이미 생성된 사용자인지 처음 가입하는 사용자인지 체크
    Optional<User> findByEmailAndProvider(String email, String provider);
}
