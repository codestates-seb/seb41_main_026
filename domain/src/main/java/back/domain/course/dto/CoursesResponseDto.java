package back.domain.course.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class CoursesResponseDto<T> {
    private List<T> Course;

    public CoursesResponseDto(List<T> course) {
        this.Course = course;
    }
}
