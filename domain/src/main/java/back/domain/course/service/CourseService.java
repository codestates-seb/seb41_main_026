package back.domain.course.service;


import back.domain.course.entity.Course;
import back.domain.course.repository.CourseRepository;
import back.domain.enums.CourseLikeStatus;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    /* course 생성 */
    public Course post(Course course) {

        course.setViewCount(0);
        course.setCourseLike(0);
        Course save = courseRepository.save(course);

        return save;

    }

    /* course 단건 조회 */
    public Course get(Long courseId) {
        Course course = verifiedCourse(courseId);
        course.setViewCount(course.getViewCount() +1);
        return course;
    }

    /* course 확인 */
    public Course verifiedCourse(Long courseId){
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        Course course = optionalCourse.orElseThrow(
                ()-> new BusinessException(ErrorCode.COURSE_NOT_FOUND));
        return course;
    }
    /* course 전체 조회 */
    public List<Course> gets() {
       List<Course> courses  = courseRepository.findAll();


       return courses;
    }
    /* course 수정 */
    public Course patch(Course course, Long courseId) {
       Course findCourse = verifiedCourse(courseId);

       Optional.ofNullable(course.getCourseName())
               .ifPresent(name -> findCourse.setCourseName(name));
       Optional.ofNullable(course.getContent())
               .ifPresent(content -> findCourse.setContent(content));
       Optional.ofNullable(course.getTag())
                .ifPresent(tag -> findCourse.setTag(tag));
        Optional.ofNullable(course.getLocation())
                .ifPresent(location -> findCourse.setLocation(location));

       return courseRepository.save(findCourse);
    }
    /* course 삭제 */
    public void delete(Long courseId) {
        Course course = verifiedCourse(courseId);
        courseRepository.delete(course);
    }
}
