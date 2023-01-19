package back.domain.sleep.repository;

import back.domain.sleep.entity.Sleep;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SleepRepository extends JpaRepository<Sleep,Long> {
}
