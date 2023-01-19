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
    private String tag;
    private String location;
    private String guideName;
    private String guideText;
}
