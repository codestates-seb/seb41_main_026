package back.domain.course.repository;

import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CourseLikeRepository extends JpaRepository<CourseLike,Long> {


    CourseLike findByUserAndCourse(User user,Course course);

}
