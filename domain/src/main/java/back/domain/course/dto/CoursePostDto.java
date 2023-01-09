package back.domain.course.dto;


import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CoursePostDto {

    private String courseName;
    private String content;
    private String tag;

}
