package back.domain.sleepspot.service;


import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
import back.domain.sleepspot.entity.Sleep;
import back.domain.sleepspot.repository.SleepRepository;
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
        Sleep saved = sleepRepository.save(sleep);
        return saved;
    }

    public Sleep get(Long sleepId) {
        Sleep sleep  =verifiedSleep(sleepId);
        return sleep;
    }



    public Sleep verifiedSleep(Long sleepId){
        Optional<Sleep> optionalSleep = sleepRepository.findById(sleepId);
        Sleep sleep = optionalSleep.orElseThrow(
                () -> new BusinessException(ErrorCode.SLEEP_NOT_FOUND));
        return sleep;
    }

    public List<Sleep> gets() {
        return sleepRepository.findAll();
    }

    public Sleep patch(Sleep sleep, Long sleepId) {
        Sleep findSleep = verifiedSleep(sleepId);

        Optional.ofNullable(sleep.getName())
                .ifPresent(name -> findSleep.setName(name));
        Optional.ofNullable(sleep.getLat())
                .ifPresent(lat->findSleep.setLat(lat));
        Optional.ofNullable(sleep.getLng())
                .ifPresent(lng->findSleep.setLng(lng));

        return sleepRepository.save(findSleep);
    }

    public void delete(Long sleepId) {
        Sleep sleep = verifiedSleep(sleepId);
        sleepRepository.delete(sleep);
    }
}
