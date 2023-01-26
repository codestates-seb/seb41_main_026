package back.domain.course.service;

import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.repository.CourseLikeRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import back.domain.user.entity.User;
import back.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseLikeService {
    private final UserService userService;
    private final CourseService courseService;
    private final CourseLikeRepository courseLikeRepository;

    List<List<String>> valueList = new ArrayList<>();

    public CourseLike post(CourseLike courseLike, Long courseId, Long userId) {


        courseLike.addCourse(courseService.verifiedCourse(courseId));
        courseLike.addUser(userService.verifiedUser(userId));

        String courseIdToString = String.valueOf(courseId);
        String userIdToString = String.valueOf(userId);

        List<String> value= Arrays.asList(courseIdToString,userIdToString);

        if (!valueList.contains(value)) {
            valueList.add(value);
        }

        int index= valueList.indexOf(value);
        index=index+1;
        Long courseLikeId = Long.valueOf(index);

        if(userId == courseId){
            courseLike.setCourseLikeId(courseLikeId);
            if (!courseLikeRepository.existsById(courseLikeId)) {
                CourseLikeAdd(courseLike, courseId, userId);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(courseLikeId);
                if (findCourseLike.getCourseLikeStatus() == 0) {

                    CourseLikeCondition(findCourseLike, courseId, userId, findCourseLike.getCourseLikeStatus() + 1);
                } else if (findCourseLike.getCourseLikeStatus() == 1) {

                    CourseLikeCondition(findCourseLike, courseId, userId, findCourseLike.getCourseLikeStatus() - 1);
                }
            }
        } else{
            courseLike.setCourseLikeId(courseLikeId);
            if (!courseLikeRepository.existsById(courseLikeId)) {
                CourseLikeAdd(courseLike, courseId, userId);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(courseLikeId);
                if (findCourseLike.getCourseLikeStatus() == 0) {

                    CourseLikeCondition(findCourseLike, courseId, userId, findCourseLike.getCourseLikeStatus() + 1);
                } else if (findCourseLike.getCourseLikeStatus() == 1) {

                    CourseLikeCondition(findCourseLike, courseId, userId, findCourseLike.getCourseLikeStatus() - 1);
                }
            }
        }

        return verifiedCourseLike(courseLikeId);
    }

    private void CourseLikeAdd(CourseLike courseLike, Long courseId, Long userId) {
        courseLike.setCourseLikeStatus(1);
        courseLike.addCourse(courseService.verifiedCourse(courseId));
        courseLike.addUser(userService.verifiedUser(userId));
        courseLikeRepository.save(courseLike);
    }

    private void CourseLikeCondition(CourseLike findCourseLike, Long courseId, Long userId, int findCourseLike1) {
        findCourseLike.addCourse(courseService.verifiedCourse(courseId));
        findCourseLike.addUser(userService.verifiedUser(userId));
        findCourseLike.setCourseLikeStatus(findCourseLike1);
        courseLikeRepository.save(findCourseLike);
    }

    public CourseLike get(Long courseLikeId) {
        return verifiedCourseLike(courseLikeId);
    }

    public CourseLike verifiedCourseLike(Long courseLikeId){
        Optional<CourseLike> optionalCourseLike = courseLikeRepository.findById(courseLikeId);
        return optionalCourseLike.orElseThrow(
                () -> new BusinessException(ErrorCode.COURSELIKE_NOT_FOUND));
    }

    public List<CourseLike> gets() {
        return courseLikeRepository.findAll();
    }
}
