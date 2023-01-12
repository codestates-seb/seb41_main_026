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
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseLikeService {
    private final UserService userService;
    private final CourseService courseService;
    private final CourseLikeRepository courseLikeRepository;
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public CourseLike post(CourseLike courseLike, Long courseId, Long userId) {
        User user = userService.verifiedUser(userId);
        Course course = courseService.verifiedCourse(courseId);

        courseLike.addCourse(course);
        courseLike.addUser(user);

        CourseLike saved = courseLikeRepository.save(courseLike);
        return saved;
    }
//    public String likeCourse(long userId) {
//        Course course = courseRepository.findById(userId).orElseThrow(() ->
//                new BusinessException(ErrorCode.NOT_FOUND));
//        Optional<User> user = userRepository.findById(userId);
//        if(courseLikeRepository.findByCourseAndUser(course, user) == null) {
//
//        }
//    }
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

    public CourseLike patch(CourseLike courseLike, Long courseLikeId, CourseLikePatchDto courseLikePatchDto) {
        User user = userService.verifiedUser(courseLikePatchDto.getUserId());
        CourseLike findCourseLike = verifiedCourseLike(courseLikeId);
        findCourseLike.addUser(user);

        Optional.ofNullable(courseLike.getCourseLikeStatus())
                .ifPresent(courseLikeStatus -> findCourseLike.setCourseLikeStatus(courseLikeStatus));

        return courseLikeRepository.save(findCourseLike);
    }
}