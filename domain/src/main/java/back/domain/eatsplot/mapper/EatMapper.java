package back.domain.eatsplot.mapper;


import back.domain.eatsplot.dto.EatPatchDto;
import back.domain.eatsplot.dto.EatPostDto;
import back.domain.eatsplot.dto.EatResponseDto;
import back.domain.eatsplot.entity.Eat;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EatMapper {
    Eat EatPostDtoToEntity(EatPostDto eatPostDto);

    EatResponseDto EatEntityToResponseDto(Eat saved);

    Eat EatPatchDtoToEntity(EatPatchDto eatPatchDto);

    List<EatResponseDto> eatResponse(List<Eat> eats);
}
