package back.domain.course.repository;

import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CourseLikeRepository extends JpaRepository<CourseLike, Long> {

    CourseLike findByCourseAndUser(Course course, User user);
}
