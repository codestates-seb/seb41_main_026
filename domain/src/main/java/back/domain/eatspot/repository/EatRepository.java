package back.domain.eatspot.repository;

import back.domain.eatspot.entity.Eat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EatRepository extends JpaRepository<Eat,Long> {
}
