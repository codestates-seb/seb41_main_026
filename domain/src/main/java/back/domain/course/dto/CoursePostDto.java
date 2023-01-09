package back.domain.course.dto;


import lombok.*;

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
