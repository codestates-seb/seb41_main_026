package back.domain.coursedata.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseDataPatchDto {

    private String title;
    private String text;
}
