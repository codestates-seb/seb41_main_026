package back.domain.travelspot.mapper;

import back.domain.travelspot.dto.TravelPatchDto;
import back.domain.travelspot.dto.TravelPostDto;
import back.domain.travelspot.dto.TravelResponseDto;
import back.domain.travelspot.entity.TravelSpot;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TravelMapper {
    TravelSpot travelPostDtoToTravel(TravelPostDto travelPostDto);

    TravelSpot travelPatchDtoToTravel(TravelPatchDto travelPatchDto);

    default TravelResponseDto travelToResponseDto(TravelSpot travelSpot) {
        TravelResponseDto travelResponseDto = new TravelResponseDto();
        travelResponseDto.setId(travelSpot.getId());
        travelResponseDto.setName(travelSpot.getName());
        travelResponseDto.setLat(travelSpot.getLat());
        travelResponseDto.setLng(travelSpot.getLng());
        travelResponseDto.setCourseId(travelSpot.getCourse().getCourseId());

        return travelResponseDto;
    }
    List<TravelResponseDto> travelsToResponseDtos(List<TravelSpot> travelSpots);

}
