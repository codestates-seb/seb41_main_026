package back.domain.course.repository;


import back.domain.course.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course,Long> {
    public List<Course> findByCourseNameContaining(String courseName);
    public List<Course> findByCourseNameLike(String courseName);
    public List<Course> findByTagContaining(String tag);
}
