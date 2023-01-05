package mainproject.domain.course.dto;

import lombok.*;
import mainproject.domain.dto.CourseLikeStatus;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseLikeResponseDto {



    private Long courseLikeId;

    private CourseLikeStatus courseLikeStatus;

    private int courseLikeCount;


}
