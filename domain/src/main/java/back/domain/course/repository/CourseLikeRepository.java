package back.domain.course.repository;

import back.domain.course.entity.CourseLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseLikeRepository extends JpaRepository<CourseLike, Long> {
}
