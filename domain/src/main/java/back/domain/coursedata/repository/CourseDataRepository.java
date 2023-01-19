package back.domain.coursedata.repository;

import back.domain.coursedata.entity.CourseData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDataRepository extends JpaRepository<CourseData,Long> {
}
