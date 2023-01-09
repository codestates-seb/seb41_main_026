package back.domain.course.dto;

import back.domain.enums.CourseLikeStatus;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseLikeResponseDto {

    private Long courseLikeId;

    private CourseLikeStatus courseLikeStatus;

//    private int courseLikeCount;
}
