package back.domain.course.service;


import back.domain.course.entity.Course;
import back.domain.course.repository.CourseRepository;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
import back.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final UserService userService;
    /* course 생성 */
    public Course post(Course course) {

        course.setViewCount(0);

        return courseRepository.save(course);

    }

    /* course 단건 조회 */
    public Course get(Long courseId) {
        Course course = verifiedCourse(courseId);
        course.setViewCount(course.getViewCount() +1);
        courseRepository.save(course);
        return course;
    }

    /* course 확인 */
    public Course verifiedCourse(Long courseId){
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        return optionalCourse.orElseThrow(
                ()-> new BusinessException(ErrorCode.COURSE_NOT_FOUND));
    }
    /* course 전체 조회 */
    public List<Course> gets() {

        return courseRepository.findAll();
    }
    /* course 수정 */
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
    /* course 삭제 */
    public void delete(Long courseId) {
        Course course = verifiedCourse(courseId);
        courseRepository.delete(course);
    }

    public List<Course> findAll(){
        return courseRepository.findAll();
    }

}
