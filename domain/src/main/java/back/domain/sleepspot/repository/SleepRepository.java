package back.domain.sleepspot.repository;

import back.domain.sleepspot.entity.Sleep;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SleepRepository extends JpaRepository<Sleep,Long> {
}
