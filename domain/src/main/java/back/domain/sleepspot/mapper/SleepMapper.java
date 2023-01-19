package back.domain.sleepspot.mapper;


import back.domain.sleepspot.dto.SleepPatchDto;
import back.domain.sleepspot.dto.SleepPostDto;
import back.domain.sleepspot.dto.SleepResponseDto;
import back.domain.sleepspot.entity.Sleep;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SleepMapper {

    default Sleep SleepPostDtoToEntity(SleepPostDto sleepPostDto){
        Sleep sleep = new Sleep();
        sleep.setLat(sleepPostDto.getLat());
        sleep.setName(sleepPostDto.getName());
        sleep.setLng(sleepPostDto.getLng());
        return sleep;
    };


    SleepResponseDto SleepEntityToResponseDto(Sleep saved);

    List<SleepResponseDto> SleepEntityToResponseDtos(List<Sleep> sleeps);

    Sleep SleepPatchDtoToEntity(SleepPatchDto sleepPatchDto);
}
