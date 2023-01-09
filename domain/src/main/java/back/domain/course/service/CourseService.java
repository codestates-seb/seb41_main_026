package back.domain.course.service;


import back.domain.course.entity.Course;
import back.domain.course.repository.CourseRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    public Course post(Course course) {
        course.setViewCount(0);
        Course save = courseRepository.save(course);
        return save;
    }

    public Course get(Long courseId) {
        Course course = verifiedCourse(courseId);
        course.setViewCount(course.getViewCount() +1);
        return course;
    }

    public Course verifiedCourse(Long courseId) {
        Optional <Course> optionalCourse = courseRepository.findById(courseId);
        Course course = optionalCourse.orElseThrow(() -> new BusinessException(ErrorCode.COURSE_NOT_FOUND));

        return course;
    }

    public List<Course> gets() {
        List<Course> courses = courseRepository.findAll();
        return courses;
    }

    public Course patch(Course course, Long courseId) {
        Course findCourse = verifiedCourse(courseId);

        Optional.ofNullable(course.getCourseName())
                .ifPresent(name -> findCourse.setCourseName(name));
        Optional.ofNullable(course.getContent())
                .ifPresent(content -> findCourse.setContent(content));
        Optional.ofNullable(course.getTag())
                .ifPresent(tag -> findCourse.setTag(tag));

        return findCourse;
    }

    public void delete(Long courseId) {
        Course course = verifiedCourse(courseId);
        courseRepository.delete(course);
    }
}
