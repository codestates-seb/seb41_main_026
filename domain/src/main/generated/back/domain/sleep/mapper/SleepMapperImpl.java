package back.domain.sleep.mapper;

import back.domain.sleep.dto.SleepPatchDto;
import back.domain.sleep.dto.SleepResponseDto;
import back.domain.sleep.entity.Sleep;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-19T11:29:51+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class SleepMapperImpl implements SleepMapper {

    @Override
    public SleepResponseDto SleepEntityToResponseDto(Sleep saved) {
        if ( saved == null ) {
            return null;
        }

        SleepResponseDto sleepResponseDto = new SleepResponseDto();

        sleepResponseDto.setSleepId( saved.getSleepId() );
        sleepResponseDto.setName( saved.getName() );
        sleepResponseDto.setLat( saved.getLat() );
        sleepResponseDto.setLng( saved.getLng() );

        return sleepResponseDto;
    }

    @Override
    public List<SleepResponseDto> SleepEntityToResponseDtos(List<Sleep> sleeps) {
        if ( sleeps == null ) {
            return null;
        }

        List<SleepResponseDto> list = new ArrayList<SleepResponseDto>( sleeps.size() );
        for ( Sleep sleep : sleeps ) {
            list.add( SleepEntityToResponseDto( sleep ) );
        }

        return list;
    }

    @Override
    public Sleep SleepPatchDtoToEntity(SleepPatchDto sleepPatchDto) {
        if ( sleepPatchDto == null ) {
            return null;
        }

        Sleep sleep = new Sleep();

        sleep.setName( sleepPatchDto.getName() );
        sleep.setLat( sleepPatchDto.getLat() );
        sleep.setLng( sleepPatchDto.getLng() );

        return sleep;
    }
}
