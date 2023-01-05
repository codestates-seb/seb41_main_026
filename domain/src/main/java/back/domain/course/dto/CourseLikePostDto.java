package back.domain.course.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseLikePostDto {

    private Long userId;
    private String courseLikeStatus;

}
