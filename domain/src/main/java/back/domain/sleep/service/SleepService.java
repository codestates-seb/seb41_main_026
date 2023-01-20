package back.domain.sleep.service;

import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import back.domain.sleep.entity.Sleep;
import back.domain.sleep.repository.SleepRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SleepService {

    private final SleepRepository sleepRepository;
    private final CourseService courseService;

    public Sleep save(Sleep sleep,Long courseId) {
        Course course = courseService.verifiedCourse(courseId);
        sleep.addCourse(course);
        return sleepRepository.save(sleep);
    }
    public Sleep get(Long sleepId) {
        return verifiedSleep(sleepId);
    }
    public Sleep verifiedSleep(Long sleepId){
        Optional<Sleep> optionalSleep = sleepRepository.findById(sleepId);
        return optionalSleep.orElseThrow(
                () -> new BusinessException(ErrorCode.SLEEP_NOT_FOUND));
    }

    public List<Sleep> gets() {
        return sleepRepository.findAll();
    }

    public Sleep patch(Sleep sleep, Long sleepId) {
        Sleep findSleep = verifiedSleep(sleepId);

        Optional.ofNullable(sleep.getName())
                .ifPresent(findSleep::setName);
        Optional.ofNullable(sleep.getLat())
                .ifPresent(findSleep::setLat);
        Optional.ofNullable(sleep.getLng())
                .ifPresent(findSleep::setLng);

        return sleepRepository.save(findSleep);
    }

    public void delete(Long sleepId) {
        Sleep sleep = verifiedSleep(sleepId);
        sleepRepository.delete(sleep);
    }
}
