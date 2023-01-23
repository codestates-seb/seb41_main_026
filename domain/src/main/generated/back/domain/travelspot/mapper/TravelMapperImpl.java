package back.domain.travelspot.mapper;

import back.domain.travelspot.dto.TravelPatchDto;
import back.domain.travelspot.dto.TravelPostDto;
import back.domain.travelspot.dto.TravelResponseDto;
import back.domain.travelspot.entity.TravelSpot;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-23T22:43:29+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class TravelMapperImpl implements TravelMapper {

    @Override
    public TravelSpot travelPostDtoToTravel(TravelPostDto travelPostDto) {
        if ( travelPostDto == null ) {
            return null;
        }

        TravelSpot travelSpot = new TravelSpot();

        travelSpot.setName( travelPostDto.getName() );
        travelSpot.setLat( travelPostDto.getLat() );
        travelSpot.setLng( travelPostDto.getLng() );

        return travelSpot;
    }

    @Override
    public TravelSpot travelPatchDtoToTravel(TravelPatchDto travelPatchDto) {
        if ( travelPatchDto == null ) {
            return null;
        }

        TravelSpot travelSpot = new TravelSpot();

        travelSpot.setName( travelPatchDto.getName() );
        travelSpot.setLat( travelPatchDto.getLat() );
        travelSpot.setLng( travelPatchDto.getLng() );

        return travelSpot;
    }

    @Override
    public List<TravelResponseDto> travelsToResponseDtos(List<TravelSpot> travelSpots) {
        if ( travelSpots == null ) {
            return null;
        }

        List<TravelResponseDto> list = new ArrayList<TravelResponseDto>( travelSpots.size() );
        for ( TravelSpot travelSpot : travelSpots ) {
            list.add( travelToResponseDto( travelSpot ) );
        }

        return list;
    }
}
