package back.domain.course.mapper;

import back.domain.comment.entity.Comment;
import back.domain.course.dto.CoursePatchDto;
import back.domain.course.dto.CoursePostDto;
import back.domain.course.dto.CourseResponseDto;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.eat.entity.Eat;
import back.domain.sleep.entity.Sleep;
import back.domain.travelspot.entity.TravelSpot;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-19T11:29:52+0900",
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
        List<String> list = coursePostDto.getTag();
        if ( list != null ) {
            course.setTag( new ArrayList<String>( list ) );
        }
        course.setGuideName( coursePostDto.getGuideName() );
        course.setGuideText( coursePostDto.getGuideText() );
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
        courseResponseDto.setLocation( save.getLocation() );
        List<String> list = save.getTag();
        if ( list != null ) {
            courseResponseDto.setTag( new ArrayList<String>( list ) );
        }
        courseResponseDto.setViewCount( save.getViewCount() );
        courseResponseDto.setLikeCount( save.getLikeCount() );
        courseResponseDto.setGuideName( save.getGuideName() );
        courseResponseDto.setGuideText( save.getGuideText() );
        List<Comment> list1 = save.getComments();
        if ( list1 != null ) {
            courseResponseDto.setComments( new ArrayList<Comment>( list1 ) );
        }
        List<CourseLike> list2 = save.getCourseLikes();
        if ( list2 != null ) {
            courseResponseDto.setCourseLikes( new ArrayList<CourseLike>( list2 ) );
        }
        List<TravelSpot> list3 = save.getTravelSpots();
        if ( list3 != null ) {
            courseResponseDto.setTravelSpots( new ArrayList<TravelSpot>( list3 ) );
        }
        List<Sleep> list4 = save.getSleeps();
        if ( list4 != null ) {
            courseResponseDto.setSleeps( new ArrayList<Sleep>( list4 ) );
        }
        List<Eat> list5 = save.getEats();
        if ( list5 != null ) {
            courseResponseDto.setEats( new ArrayList<Eat>( list5 ) );
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
        List<String> list = coursePatchDto.getTag();
        if ( list != null ) {
            course.setTag( new ArrayList<String>( list ) );
        }
        course.setGuideName( coursePatchDto.getGuideName() );
        course.setGuideText( coursePatchDto.getGuideText() );
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
