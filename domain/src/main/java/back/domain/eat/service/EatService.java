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
                .ifPresent(name -> findEat.setName(name));
        Optional.ofNullable(eat.getLat())
                .ifPresent(lat -> findEat.setLat(lat));
        Optional.ofNullable(eat.getLng())
                .ifPresent(lng ->findEat.setLng(lng));
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
        Eat saved = eatRepository.save(eat);
        return saved;

    }

    public Eat get(Long eatId) {
        Eat eat = verifiedEat(eatId);

        return eat;
    }

    public Eat verifiedEat(Long eatId){
        Optional<Eat> optionalEat = eatRepository.findById(eatId);
        Eat eat = optionalEat.orElseThrow(
                () -> new BusinessException(ErrorCode.NOT_FOUND));
        return eat;
    }

    public List<Eat> gets() {
        return  eatRepository.findAll();
    }
}
