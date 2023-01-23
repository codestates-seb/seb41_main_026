package back.domain.coursedata.mapper;

import back.domain.coursedata.dto.CourseDataPostDto;
import back.domain.coursedata.dto.CourseDataResponseDto;
import back.domain.coursedata.entity.CourseData;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-23T22:43:28+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class CourseDataMapperImpl implements CourseDataMapper {

    @Override
    public CourseData CourseDataPostDtoToEntity(CourseDataPostDto courseDataPostDto) {
        if ( courseDataPostDto == null ) {
            return null;
        }

        CourseData courseData = new CourseData();

        courseData.setTitle( courseDataPostDto.getTitle() );
        courseData.setText( courseDataPostDto.getText() );

        return courseData;
    }

    @Override
    public CourseDataResponseDto CourseDataEntityToResponseDto(CourseData saved) {
        if ( saved == null ) {
            return null;
        }

        CourseDataResponseDto courseDataResponseDto = new CourseDataResponseDto();

        courseDataResponseDto.setCourseDataId( saved.getCourseDataId() );
        courseDataResponseDto.setTitle( saved.getTitle() );
        courseDataResponseDto.setText( saved.getText() );

        return courseDataResponseDto;
    }

    @Override
    public List<CourseDataResponseDto> CourseDataEntityToResponseDtos(List<CourseData> courseDatas) {
        if ( courseDatas == null ) {
            return null;
        }

        List<CourseDataResponseDto> list = new ArrayList<CourseDataResponseDto>( courseDatas.size() );
        for ( CourseData courseData : courseDatas ) {
            list.add( CourseDataEntityToResponseDto( courseData ) );
        }

        return list;
    }
}
