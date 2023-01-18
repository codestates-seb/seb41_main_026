package back.domain.eatsplot.repository;

import back.domain.eatsplot.entity.Eat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EatRepository extends JpaRepository<Eat,Long> {
}
