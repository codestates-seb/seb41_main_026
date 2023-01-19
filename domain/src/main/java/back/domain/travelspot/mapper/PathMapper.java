package back.domain.travelspot.mapper;


import back.domain.travelspot.dto.PathPatchDto;
import back.domain.travelspot.dto.PathPostDto;
import back.domain.travelspot.dto.PathResponseDto;
import back.domain.travelspot.entity.Path;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PathMapper {

    Path pathDtoToEntity(PathPostDto route);

    Path PathPatchDtoToEntity(PathPatchDto pathPatchDto);



}
