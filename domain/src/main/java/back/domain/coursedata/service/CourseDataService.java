package back.domain.coursedata.service;

import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.coursedata.entity.CourseData;
import back.domain.coursedata.repository.CourseDataRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseDataService {

    private final CourseDataRepository courseDataRepository;
    private final CourseService courseService;

    /* CourseData 생성 */
    public CourseData save(CourseData courseData,Long courseId) {
        Course course = courseService.verifiedCourse(courseId);
        courseData.addCourse(course);
        CourseData saved = courseDataRepository.save(courseData);
        return saved;
    }

    /* CourseData 단건 조회 */
    public CourseData get(Long courseDataId) {
        return verifiedCourseData(courseDataId);
    }


    /* CourseData 전체 조회 */
    public List<CourseData> gets() {
        return courseDataRepository.findAll();
    }

    /* CourseData 수정 */
    public CourseData patch(CourseData courseData, Long courseDataId) {
        CourseData findCourseData = verifiedCourseData(courseDataId);

        Optional.ofNullable(courseData.getTitle())
                .ifPresent(title -> findCourseData.setTitle(title));
        Optional.ofNullable(courseData.getText())
                .ifPresent(text -> findCourseData.setText(text));


        return courseDataRepository.save(findCourseData);
    }

    /* CourseData 삭제 */
    public void delete(Long courseDataId) {
        CourseData courseData = verifiedCourseData(courseDataId);
        courseDataRepository.delete(courseData);
    }


    public CourseData verifiedCourseData(Long courseDataId){
        Optional<CourseData> optionalCourseData = courseDataRepository.findById(courseDataId);
        CourseData courseData = optionalCourseData.orElseThrow(
                () -> new BusinessException(ErrorCode.NOT_FOUND));

        return courseData;
    }
}
