package back.domain.eat.mapper;

import back.domain.eat.dto.EatPatchDto;
import back.domain.eat.dto.EatPostDto;
import back.domain.eat.dto.EatResponseDto;
import back.domain.eat.entity.Eat;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EatMapper {

    Eat EatPostDtoToEntity(EatPostDto eatPostDto);

    EatResponseDto EatEntityToResponseDto(Eat saved);

    Eat EatPatchDtoToEntity(EatPatchDto eatPatchDto);
    List<EatResponseDto> eatResponse(List<Eat> eats);
}
