package back.domain.course.mapper;

import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.dto.CourseLikePostDto;
import back.domain.course.dto.CourseLikeResponseDto;
import back.domain.course.entity.CourseLike;
import back.domain.enums.CourseLikeStatus;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-09T11:34:11+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class CourseLikeMapperImpl implements CourseLikeMapper {

    @Override
    public CourseLike CourseLikePostDtoToEntity(CourseLikePostDto courseLikePostDto) {
        if ( courseLikePostDto == null ) {
            return null;
        }

        CourseLike courseLike = new CourseLike();

        if ( courseLikePostDto.getCourseLikeStatus() != null ) {
            courseLike.setCourseLikeStatus( Enum.valueOf( CourseLikeStatus.class, courseLikePostDto.getCourseLikeStatus() ) );
        }

        return courseLike;
    }

    @Override
    public CourseLikeResponseDto CourseLikeEntityToResponseDto(CourseLike courseLike) {
        if ( courseLike == null ) {
            return null;
        }

        CourseLikeResponseDto courseLikeResponseDto = new CourseLikeResponseDto();

        courseLikeResponseDto.setCourseLikeId( courseLike.getCourseLikeId() );
        courseLikeResponseDto.setCourseLikeStatus( courseLike.getCourseLikeStatus() );
        courseLikeResponseDto.setCourseLikeCount( courseLike.getCourseLikeCount() );

        return courseLikeResponseDto;
    }

    @Override
    public CourseLike CourseLikePatchDtoToEntity(CourseLikePatchDto courseLikePatchDto) {
        if ( courseLikePatchDto == null ) {
            return null;
        }

        CourseLike courseLike = new CourseLike();

        if ( courseLikePatchDto.getCourseLikeStatus() != null ) {
            courseLike.setCourseLikeStatus( Enum.valueOf( CourseLikeStatus.class, courseLikePatchDto.getCourseLikeStatus() ) );
        }

        return courseLike;
    }

    @Override
    public List<CourseLikeResponseDto> CourseLikeEntityToResponseDto(List<CourseLike> courseLikes) {
        if ( courseLikes == null ) {
            return null;
        }

        List<CourseLikeResponseDto> list = new ArrayList<CourseLikeResponseDto>( courseLikes.size() );
        for ( CourseLike courseLike : courseLikes ) {
            list.add( CourseLikeEntityToResponseDto( courseLike ) );
        }

        return list;
    }
}
