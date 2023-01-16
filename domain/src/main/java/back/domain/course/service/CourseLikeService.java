package back.domain.course.service;

import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.repository.CourseLikeRepository;
import back.domain.course.repository.CourseRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import back.domain.user.entity.User;
import back.domain.user.repository.UserRepository;
import back.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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

        String courseidint = String.valueOf(courseId);
        String useridint = String.valueOf(userId);

        List<String> value1 = Arrays.asList(courseidint, useridint);

        if (value.contains(value1) == false) {
            value.add(value1);
        }
        int id = value.indexOf(value1);
        id = id + 1;
        Long idtoLong = Long.valueOf(id);
        System.out.println("value :" + value);
        System.out.println("id : " + id);

        if (userId == courseId) {
            courseLike.setCourseLikeId(idtoLong);
            if (!courseLikeRepository.existsById(idtoLong)) {
                courseLike.setCourseLikeStatus(1);
                courseLike.addCourse(courseService.verifiedCourse(courseId));
                courseLike.addUser(userService.verifiedUser(userId));
                courseLikeRepository.save(courseLike);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(idtoLong);
                System.out.println("findCourseLike : " + findCourseLike);
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
        } else {
            courseLike.setCourseLikeId(idtoLong);
            if (!courseLikeRepository.existsById(idtoLong)) {
                courseLike.setCourseLikeStatus(1);
                courseLike.addCourse(courseService.verifiedCourse(courseId));
                courseLike.addUser(userService.verifiedUser(userId));
                courseLikeRepository.save(courseLike);
            } else {
                CourseLike findCourseLike = verifiedCourseLike(idtoLong);
                System.out.println("findCourseLike : " + findCourseLike);
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
        return verifiedCourseLike(idtoLong);
    }


        public CourseLike get(Long courseLikeId) {
        CourseLike courseLike = verifiedCourseLike(courseLikeId);
        return courseLike;
    }

    public CourseLike verifiedCourseLike(Long courseLikeId) {
        Optional<CourseLike> optionalCourseLike = courseLikeRepository.findById(courseLikeId);
        CourseLike courseLike = optionalCourseLike.orElseThrow(() ->
                new BusinessException(ErrorCode.COURSELIKE_NOT_FOUND));
        return courseLike;
    }

    public List<CourseLike> gets() {
        List<CourseLike> courseLikes = courseLikeRepository.findAll();
        return courseLikes;
    }
}
