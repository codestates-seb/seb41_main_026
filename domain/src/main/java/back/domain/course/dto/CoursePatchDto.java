package back.domain.course.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CoursePatchDto {

    private String courseName;
    private String content;

}
