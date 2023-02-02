package back.domain.travelspot.service;


import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
import back.domain.travelspot.dto.TravelPostDto;
import back.domain.travelspot.entity.TravelSpot;
import back.domain.travelspot.repository.TravelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TravelService {

    private final TravelRepository travelRepository;
    private final CourseService courseService;

    public TravelSpot postTravel(TravelSpot travelSpot, TravelPostDto travelPostDto) {
        Course course = courseService.verifiedCourse(travelPostDto.getCourseId());
        travelSpot.addCourse(course);
        return travelRepository.save(travelSpot);
    }

    public TravelSpot findTravel(long id) {
        return findVerifiedTravel(id);
    }

    public TravelSpot findVerifiedTravel(long id) {
        Optional<TravelSpot> optionalTravel =
                travelRepository.findById(id);
        TravelSpot findTravel =
                optionalTravel.orElseThrow(() ->
                        new BusinessException(ErrorCode.NOT_FOUND));
        return findTravel;
    }

    public List<TravelSpot> findTravels() {
        return (List<TravelSpot>) travelRepository.findAll();
    }

    public TravelSpot patch (TravelSpot travelSpot, long id) {
        TravelSpot findTravel = findTravel(id);

        Optional.ofNullable(travelSpot.getName())
                .ifPresent(name -> findTravel.setName(name));
        Optional.ofNullable(travelSpot.getLat())
                .ifPresent(lat -> findTravel.setLat(lat));
        Optional.ofNullable(travelSpot.getLng())
                .ifPresent(lng -> findTravel.setLng(lng));

        return travelRepository.save(findTravel);
    }

    public void delete(Long id) {
        TravelSpot findTravel = findTravel(id);

        travelRepository.delete(findTravel);
    }
}
