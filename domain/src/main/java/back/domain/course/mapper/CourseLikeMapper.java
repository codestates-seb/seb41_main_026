package back.domain.course.mapper;

import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.dto.CourseLikePostDto;
import back.domain.course.dto.CourseLikeResponseDto;
import back.domain.course.entity.CourseLike;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseLikeMapper {

    CourseLike CourseLikePostDtoToEntity(CourseLikePostDto courseLikePostDto);
    CourseLikeResponseDto CourseLikeEntityToResponseDto(CourseLike courseLike);
    CourseLike CourseLikePatchDtoToEntity(CourseLikePatchDto courseLikePatchDto);
    List<CourseLikeResponseDto> CourseLikeEntityToResponseDto(List<CourseLike> courseLikes);
}
