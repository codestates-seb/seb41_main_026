package back.domain.eatspot.mapper;

import back.domain.eatspot.dto.EatPatchDto;
import back.domain.eatspot.dto.EatPostDto;
import back.domain.eatspot.dto.EatResponseDto;
import back.domain.eatspot.entity.Eat;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EatMapper {

    Eat EatPostDtoToEntity(EatPostDto eatPostDto);

    EatResponseDto EatEntityToResponseDto(Eat saved);
    
    Eat EatPatchDtoToEntity(EatPatchDto eatPatchDto);

    List<EatResponseDto> eatResponse(List<Eat> eats);
}
