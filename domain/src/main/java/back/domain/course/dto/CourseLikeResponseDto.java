package back.domain.course.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseLikeResponseDto {

    private Long courseLikeId;
    private Long courseId;
    private Integer courseLikeStatus;
}
