package back.domain.course.mapper;


import back.domain.course.dto.CoursePatchDto;
import back.domain.course.dto.CoursePostDto;
import back.domain.course.dto.CourseResponseDto;
import back.domain.course.entity.Course;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseMapper {

    Course CoursePostDtoToEntity(CoursePostDto coursePostDto);

    CourseResponseDto CourseEntityToResponseDto(Course save);

    Course CoursePatchDtoToEntity(CoursePatchDto coursePatchDto);

    List<CourseResponseDto> CoursesResponseDto(List<Course> courses);
}
