package back.domain.course.mapper;


import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.dto.CourseLikePostDto;
import back.domain.course.dto.CourseLikeResponseDto;
import back.domain.course.entity.CourseLike;
import back.domain.user.entity.User;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseLikeMapper {


    CourseLike CourseLikePostDtoToEntity(CourseLikePostDto courseLikePostDto);


    default CourseLikeResponseDto CourseLikeEntityToResponseDto(CourseLike courseLike){
        CourseLikeResponseDto courseLikeResponseDto = new CourseLikeResponseDto();
        courseLikeResponseDto.setCourseLikeId(courseLike.getCourseLikeId());
        courseLikeResponseDto.setCourseLikeStatus(courseLike.getCourseLikeStatus());
        courseLikeResponseDto.setCourseId(courseLike.getCourse().getCourseId());
        return courseLikeResponseDto;
    };


    CourseLike CourseLikePatchDtoToEntity(CourseLikePatchDto courseLikePatchDto);


    List<CourseLikeResponseDto> CourseLikeEntityToResponseDtos(List<CourseLike> courseLikes);
}
