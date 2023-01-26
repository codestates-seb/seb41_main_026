package back.domain.travelspot.repository;

import back.domain.travelspot.entity.TravelSpot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelRepository extends JpaRepository<TravelSpot, Long> {
}
