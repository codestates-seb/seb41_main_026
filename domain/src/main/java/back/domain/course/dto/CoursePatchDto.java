package back.domain.course.dto;


import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CoursePatchDto {

    private String courseName;
    private List<String> tag;
    private String location;
    private String guideName;
    private String guideText;

}
