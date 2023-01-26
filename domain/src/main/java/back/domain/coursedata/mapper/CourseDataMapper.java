package back.domain.coursedata.mapper;

import back.domain.coursedata.dto.CourseDataPatchDto;
import back.domain.coursedata.dto.CourseDataPostDto;
import back.domain.coursedata.dto.CourseDataResponseDto;
import back.domain.coursedata.entity.CourseData;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseDataMapper {
    CourseData CourseDataPostDtoToEntity(CourseDataPostDto courseDataPostDto);

    CourseDataResponseDto CourseDataEntityToResponseDto(CourseData saved);

    List<CourseDataResponseDto> CourseDataEntityToResponseDtos(List<CourseData> courseDatas);

    default CourseData CourseDataPatchDtoToEntity(CourseDataPatchDto courseDataPatchDto){
        CourseData courseData = new CourseData();
        courseData.setText(courseDataPatchDto.getText());
        courseData.setTitle(courseDataPatchDto.getTitle());
        return courseData;
    }
}
