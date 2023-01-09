package back.domain.course.mapper;


import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.dto.CourseLikePostDto;
import back.domain.course.dto.CourseLikeResponseDto;
import back.domain.course.entity.CourseLike;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseLikeMapper {


    CourseLike CourseLikePostDtoToEntity(CourseLikePostDto courseLikePostDto);


    CourseLikeResponseDto CourseLikeEntityToResponseDto(CourseLike courseLike);


    CourseLike CourseLikePatchDtoToEntity(CourseLikePatchDto courseLikePatchDto);


    List<CourseLikeResponseDto> CourseLikeEntityToResponseDtos(List<CourseLike> courseLikes);
}
