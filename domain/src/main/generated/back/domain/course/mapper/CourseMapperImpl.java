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
    date = "2023-01-16T17:51:51+0900",
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
        List<String> list = coursePostDto.getTag();
        if ( list != null ) {
            course.setTag( new ArrayList<String>( list ) );
        }
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
        List<String> list = save.getTag();
        if ( list != null ) {
            courseResponseDto.setTag( new ArrayList<String>( list ) );
        }
        courseResponseDto.setViewCount( save.getViewCount() );
        courseResponseDto.setLikeCount( save.getLikeCount() );
        List<Comment> list1 = save.getComments();
        if ( list1 != null ) {
            courseResponseDto.setComments( new ArrayList<Comment>( list1 ) );
        }
        List<CourseLike> list2 = save.getCourseLikes();
        if ( list2 != null ) {
            courseResponseDto.setCourseLikes( new ArrayList<CourseLike>( list2 ) );
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
        List<String> list = coursePatchDto.getTag();
        if ( list != null ) {
            course.setTag( new ArrayList<String>( list ) );
        }
        course.setLocation( coursePatchDto.getLocation() );

        return course;
    }

    @Override
    public List<CourseResponseDto> CoursesResponseDto(List<Course> courses) {
        if ( courses == null ) {
            return null;
        }

        List<CourseResponseDto> list = new ArrayList<CourseResponseDto>( courses.size() );
        for ( Course course : courses ) {
            list.add( CourseEntityToResponseDto( course ) );
        }

        return list;
    }
}
