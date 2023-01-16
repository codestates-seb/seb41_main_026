package back.domain.course.service;


import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.repository.CourseLikeRepository;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
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
        User user = userService.verifiedUser(userId);
        Course course = courseService.verifiedCourse(courseId);
        courseLike.addCourse(courseService.verifiedCourse(courseId));
        courseLike.addUser(userService.verifiedUser(userId));


        String courseIdToString = String.valueOf(courseId);
        String userIdToString = String.valueOf(userId);


        List<String> value= Arrays.asList(courseIdToString,userIdToString);

        if(valueList.contains(value)==false){
            valueList.add(value);
        }
        int index= valueList.indexOf(value);
        index=index+1;
        Long courseLikeid = Long.valueOf(index);

        if(userId == courseId){
            courseLike.setCourseLikeId(courseLikeid);
            if (!courseLikeRepository.existsById(courseLikeid)) {
                courseLike.setCourseLikeStatus(1);
                courseLike.addCourse(courseService.verifiedCourse(courseId));
                courseLike.addUser(userService.verifiedUser(userId));
                courseLikeRepository.save(courseLike);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(courseLikeid);
                if (findCourseLike.getCourseLikeStatus() == 0) {

                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() + 1);
                    courseLikeRepository.save(findCourseLike);
                } else if (findCourseLike.getCourseLikeStatus() == 1) {

                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() - 1);
                    courseLikeRepository.save(findCourseLike);
                }
            }
        } else{
            courseLike.setCourseLikeId(courseLikeid);
            if (!courseLikeRepository.existsById(courseLikeid)) {
                courseLike.setCourseLikeStatus(1);
                courseLike.addCourse(courseService.verifiedCourse(courseId));
                courseLike.addUser(userService.verifiedUser(userId));
                courseLikeRepository.save(courseLike);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(courseLikeid);
                if (findCourseLike.getCourseLikeStatus() == 0) {

                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() + 1);
                    courseLikeRepository.save(findCourseLike);
                } else if (findCourseLike.getCourseLikeStatus() == 1) {

                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() - 1);
                    courseLikeRepository.save(findCourseLike);
                }
            }
        }

        return verifiedCourseLike(courseLikeid);
    }






    public CourseLike get(Long courseLikeId) {
        CourseLike courseLike  = verifiedCourseLike(courseLikeId);
        return courseLike;
    }

    public CourseLike verifiedCourseLike(Long courseLikeId){
       Optional<CourseLike> optionalCourseLike = courseLikeRepository.findById(courseLikeId);
       CourseLike courseLike = optionalCourseLike.orElseThrow(
               () -> new BusinessException(ErrorCode.COURSELIKE_NOT_FOUND));
       return courseLike;
    }



    public List<CourseLike> gets() {
        List<CourseLike> courseLikes = courseLikeRepository.findAll();
        return courseLikes;
    }


}
