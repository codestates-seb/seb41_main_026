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
    private String content;
    private List<String> tag;
    private String location;

}
