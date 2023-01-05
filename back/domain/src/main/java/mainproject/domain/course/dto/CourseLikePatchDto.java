package mainproject.domain.course.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseLikePatchDto {

    private Long userId;
    private String courseLikeStatus;
}
