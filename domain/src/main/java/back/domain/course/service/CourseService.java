package back.domain.course.service;


import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.repository.CourseRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    public Course post(Course course) {
        course.setViewCount(0);
        return courseRepository.save(course);
    }

    public Course get(Long courseId) {
        Course course = verifiedCourse(courseId);
        course.setViewCount(course.getViewCount() +1);
        Integer count = course.getCourseLikes().stream()
                .map(CourseLike::getCourseLikeStatus)
                .mapToInt(i -> i)
                .sum();
        course.setLikeCount(count);
        courseRepository.save(course);
        return course;
    }

    public Course verifiedCourse(Long courseId) {
        Optional <Course> optionalCourse = courseRepository.findById(courseId);
        return optionalCourse.orElseThrow(() -> new BusinessException(ErrorCode.COURSE_NOT_FOUND));
    }

    public List<Course> gets() {
        return courseRepository.findAll();
    }

    public Course patch(Course course, Long courseId) {
        Course findCourse = verifiedCourse(courseId);

        Optional.ofNullable(course.getCourseName())
                .ifPresent(findCourse::setCourseName);
        Optional.ofNullable(course.getTag())
                .ifPresent(findCourse::setTag);
        Optional.ofNullable(course.getLocation())
                .ifPresent(findCourse::setLocation);
        Optional.ofNullable(course.getGuideName())
                .ifPresent(findCourse::setGuideName);
        Optional.ofNullable(course.getGuideText())
                .ifPresent(findCourse::setGuideText);

        return courseRepository.save(findCourse);
    }

    public void delete(Long courseId) {
        Course course = verifiedCourse(courseId);
        courseRepository.delete(course);
    }
    /* search */
    @Transactional
    public List<Course> search(String keyword) {
        return courseRepository.findByCourseNameContaining(keyword);
        /* return courseRepository.findByTagContaining(keyword); */
    }
}
