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
    private String location;
    private List<String> tag;
    private String guideName;
    private String guideText;
    private String route;
    private int time;
}
