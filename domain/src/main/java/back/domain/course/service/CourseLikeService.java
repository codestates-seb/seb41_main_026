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

    List<List<String>> value = new ArrayList<>();

    public CourseLike post(CourseLike courseLike, Long courseId, Long userId) {
        User user = userService.verifiedUser(userId);
        Course course = courseService.verifiedCourse(courseId);
        courseLike.addCourse(courseService.verifiedCourse(courseId));
        courseLike.addUser(userService.verifiedUser(userId));
//        courseLike.setCourseLikeId(courseId);

        String courseidint = String.valueOf(courseId);
        String useridint = String.valueOf(userId);

//        List<List<String>> value = new ArrayList<>();
        List<String> value1= Arrays.asList(courseidint,useridint);

        if(value.contains(value1)==false){
            value.add(value1);
        }
        int id= value.indexOf(value1);
        id=id+1;
        Long idtoLong = Long.valueOf(id);
        System.out.println("value :" + value);
        System.out.println("id : "+id);

        if(userId == courseId){
            courseLike.setCourseLikeId(idtoLong);
            if (!courseLikeRepository.existsById(idtoLong)) {
                courseLike.setCourseLikeStatus(1);
                courseLike.addCourse(courseService.verifiedCourse(courseId));
                courseLike.addUser(userService.verifiedUser(userId));
                courseLikeRepository.save(courseLike);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(idtoLong);
                System.out.println("findCourseLike : "+findCourseLike);
                if (findCourseLike.getCourseLikeStatus() == 0) {

                    System.out.println("courseLike=0 : " + findCourseLike);
                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() + 1);
                    courseLikeRepository.save(findCourseLike);
                } else if (findCourseLike.getCourseLikeStatus() == 1) {

                    System.out.println("courseLike=1 : " + findCourseLike);
                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() - 1);
                    courseLikeRepository.save(findCourseLike);
                }
            }
        } else{
            courseLike.setCourseLikeId(idtoLong);
            if (!courseLikeRepository.existsById(idtoLong)) {
                courseLike.setCourseLikeStatus(1);
                courseLike.addCourse(courseService.verifiedCourse(courseId));
                courseLike.addUser(userService.verifiedUser(userId));
                courseLikeRepository.save(courseLike);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(idtoLong);
                System.out.println("findCourseLike : "+findCourseLike);
                if (findCourseLike.getCourseLikeStatus() == 0) {

                    System.out.println("courseLike=0 : " + findCourseLike);
                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() + 1);
                    courseLikeRepository.save(findCourseLike);
                } else if (findCourseLike.getCourseLikeStatus() == 1) {

                    System.out.println("courseLike=1 : " + findCourseLike);
                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
                    findCourseLike.addUser(userService.verifiedUser(userId));
                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() - 1);
                    courseLikeRepository.save(findCourseLike);
                }
            }
        }


//        if (!courseLikeRepository.existsById(courseId)) {
//            courseLike.setCourseLikeStatus(1);
//            courseLike.addCourse(courseService.verifiedCourse(courseId));
//            courseLike.addUser(userService.verifiedUser(userId));
//            courseLikeRepository.save(courseLike);
////            System.out.println("courseLike3 : " + courseLike);
//        } else {
//            CourseLike findCourseLike = verifiedCourseLike(courseLike.getCourseLikeId());
//            System.out.println("findCourseLike : "+findCourseLike);
////            if (userId != courseId) {
////                CourseLike courseLike1 = new CourseLike();
////                courseLike1.setCourseLikeStatus(1);
////                courseLike1.addCourse(courseService.verifiedCourse(courseId));
////                courseLike1.addUser(userService.verifiedUser(userId));
////                courseLikeRepository.save(courseLike1);
////                System.out.println("findCourseLike1 : "+courseLike1);
////            } else {
//                if (findCourseLike.getCourseLikeStatus() == 0) {
////                    CourseLike findCourseLike = verifiedCourseLike(userId);
//                    System.out.println("courseLike=0 : " + findCourseLike);
//                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
//                    findCourseLike.addUser(userService.verifiedUser(userId));
//                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() + 1);
//                    courseLikeRepository.save(findCourseLike);
//                } else if (findCourseLike.getCourseLikeStatus() == 1) {
////                    CourseLike findCourseLike = verifiedCourseLike(userId);
//                    System.out.println("courseLike=1 : " + findCourseLike);
//                    findCourseLike.addCourse(courseService.verifiedCourse(courseId));
//                    findCourseLike.addUser(userService.verifiedUser(userId));
//                    findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus() - 1);
//                    courseLikeRepository.save(findCourseLike);
//
//                }
//            }
////        }
        return verifiedCourseLike(idtoLong);
    }





    public CourseLike postdown(CourseLike courseLike, Long courseId, Long userId) {
            User user = userService.verifiedUser(userId);
            Course course = courseService.verifiedCourse(courseId);

            courseLike.addCourse(course);
            courseLike.addUser(user);

        return courseLike;
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

    public CourseLike patch(CourseLike courseLike ,Long courseLikeId, CourseLikePatchDto courseLikePatchDto) {

        User user = userService.verifiedUser(courseLikePatchDto.getUserId());
//            Course course = courseService.verifiedCourse(courseLikePatchDto.getCourseId());
        CourseLike findCourseLike = verifiedCourseLike(courseLikeId);
//            findCourseLike.addCourse(course);
        findCourseLike.addUser(user);
        if(findCourseLike.getCourseLikeStatus().equals(0)){
            findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus()+1);
            courseLikeRepository.save(findCourseLike);
        } else if (findCourseLike.getCourseLikeStatus().equals(1)) {
            findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus()-1);
            courseLikeRepository.save(findCourseLike);
        }

        return findCourseLike;

    }
}
