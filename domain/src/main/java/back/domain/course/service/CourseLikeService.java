package back.domain.course.service;


import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.repository.CourseLikeRepository;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
import back.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseLikeService {


    private final CourseLikeRepository courseLikeRepository;


    public CourseLike post(User user, Course course) {

        if(courseLikeRepository.findByUserAndCourse(user,course)==null) {
            CourseLike courseLike = new CourseLike();
            courseLike.addUser(user);
            courseLike.addCourse(course);
            courseLike.setCourseLikeStatus(1);
            int index = courseLikeRepository.findAll().size()+1;
            courseLike.setCourseLikeId((long) index);
            courseLikeRepository.save(courseLike);
            return courseLike;
        } else {

            CourseLike findCourseLike = courseLikeRepository.findByUserAndCourse(user,course);
            findCourseLike.addUser(user);
            findCourseLike.addCourse(course);
            if(findCourseLike.getCourseLikeStatus()==1){
                findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus()-1);
                courseLikeRepository.save(findCourseLike);
                return findCourseLike;
            } else {
                findCourseLike.setCourseLikeStatus(findCourseLike.getCourseLikeStatus()+1);
                courseLikeRepository.save(findCourseLike);
                return findCourseLike;
            }
        }
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
