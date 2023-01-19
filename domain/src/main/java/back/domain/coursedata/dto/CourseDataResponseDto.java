package back.domain.coursedata.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseDataResponseDto {

    private Long courseDataId;
    private String title;
    private String text;
}
