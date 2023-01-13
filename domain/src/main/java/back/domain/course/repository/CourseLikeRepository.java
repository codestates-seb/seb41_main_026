package back.domain.course.repository;

import back.domain.course.entity.CourseLike;
import back.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseLikeRepository extends JpaRepository<CourseLike,Long> {

}
