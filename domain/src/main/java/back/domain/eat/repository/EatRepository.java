package back.domain.eat.repository;

import back.domain.eat.entity.Eat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EatRepository extends JpaRepository<Eat,Long> {
}
