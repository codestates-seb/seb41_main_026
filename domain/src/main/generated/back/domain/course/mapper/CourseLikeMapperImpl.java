package back.domain.course.mapper;

import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.dto.CourseLikePostDto;
import back.domain.course.dto.CourseLikeResponseDto;
import back.domain.course.entity.CourseLike;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-17T21:26:15+0900",
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

        return courseLike;
    }

    @Override
    public CourseLike CourseLikePatchDtoToEntity(CourseLikePatchDto courseLikePatchDto) {
        if ( courseLikePatchDto == null ) {
            return null;
        }

        CourseLike courseLike = new CourseLike();

        if ( courseLikePatchDto.getCourseLikeStatus() != null ) {
            courseLike.setCourseLikeStatus( Integer.parseInt( courseLikePatchDto.getCourseLikeStatus() ) );
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
