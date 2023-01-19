package back.domain.course.service;


import back.domain.course.dto.CourseResponseDto;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.repository.CourseLikeRepository;
import back.domain.course.repository.CourseRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
        Optional.ofNullable(course.getTag())
                .ifPresent(tag -> findCourse.setTag(tag));
        Optional.ofNullable(course.getLocation())
                .ifPresent(location -> findCourse.setLocation(location));
        Optional.ofNullable(course.getGuideName())
                .ifPresent(guidename -> findCourse.setGuideName(guidename));
        Optional.ofNullable(course.getGuideText())
                .ifPresent(text -> findCourse.setGuideText(text));
        return findCourse;
    }

    public void delete(Long courseId) {
        Course course = verifiedCourse(courseId);
        courseRepository.delete(course);
    }
    /* search */
    @Transactional
    public List<Course> search(String keyword) {
        return courseRepository.findByCourseNameContaining(keyword);
//        return courseRepository.findByTagContaining(keyword);
    }
}
