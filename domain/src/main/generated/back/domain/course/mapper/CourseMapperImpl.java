package back.domain.course.mapper;

import back.domain.comment.entity.Comment;
import back.domain.course.dto.CoursePatchDto;
import back.domain.course.dto.CoursePostDto;
import back.domain.course.dto.CourseResponseDto;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-09T17:35:41+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class CourseMapperImpl implements CourseMapper {

    @Override
    public Course CoursePostDtoToEntity(CoursePostDto coursePostDto) {
        if ( coursePostDto == null ) {
            return null;
        }

        Course course = new Course();

        course.setCourseName( coursePostDto.getCourseName() );
        course.setContent( coursePostDto.getContent() );
        course.setTag( coursePostDto.getTag() );
        course.setLocation( coursePostDto.getLocation() );

        return course;
    }

    @Override
    public CourseResponseDto CourseEntityToResponseDto(Course save) {
        if ( save == null ) {
            return null;
        }

        CourseResponseDto courseResponseDto = new CourseResponseDto();

        courseResponseDto.setCourseId( save.getCourseId() );
        courseResponseDto.setCourseName( save.getCourseName() );
        courseResponseDto.setContent( save.getContent() );
        courseResponseDto.setLocation( save.getLocation() );
        courseResponseDto.setTag( save.getTag() );
        List<Comment> list = save.getComments();
        if ( list != null ) {
            courseResponseDto.setComments( new ArrayList<Comment>( list ) );
        }
        List<CourseLike> list1 = save.getCourseLikes();
        if ( list1 != null ) {
            courseResponseDto.setCourseLikes( new ArrayList<CourseLike>( list1 ) );
        }

        return courseResponseDto;
    }

    @Override
    public Course CoursePatchDtoToEntity(CoursePatchDto coursePatchDto) {
        if ( coursePatchDto == null ) {
            return null;
        }

        Course course = new Course();

        course.setCourseName( coursePatchDto.getCourseName() );
        course.setContent( coursePatchDto.getContent() );
        course.setTag( coursePatchDto.getTag() );

        return course;
    }
}
