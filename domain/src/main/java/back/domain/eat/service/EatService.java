package back.domain.eat.service;

import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.eat.entity.Eat;
import back.domain.eat.repository.EatRepository;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EatService {
    private final CourseService courseService;

    private final EatRepository eatRepository;

    public Eat patch(Eat eat, Long eatId){
        Eat findEat = verifiedEat(eatId);

        Optional.ofNullable(eat.getName())
                .ifPresent(findEat::setName);
        Optional.ofNullable(eat.getLat())
                .ifPresent(findEat::setLat);
        Optional.ofNullable(eat.getLng())
                .ifPresent(findEat::setLng);
        return eatRepository.save(findEat);
    }

    public void delete(Long eatId){
        Eat eat = verifiedEat(eatId);
        eatRepository.delete(eat);

    }
    // post
    public Eat save(Eat eat, Long courseId) {
        Course course = courseService.verifiedCourse(courseId);
        eat.addCourse(course);
        return eatRepository.save(eat);

    }

    public Eat get(Long eatId) {

        return verifiedEat(eatId);
    }

    public Eat verifiedEat(Long eatId){
        Optional<Eat> optionalEat = eatRepository.findById(eatId);
        return optionalEat.orElseThrow(
                () -> new BusinessException(ErrorCode.NOT_FOUND));
    }

    public List<Eat> gets() {
        return  eatRepository.findAll();
    }
}
