package back.domain.comment.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CommentPostDto {

    private String content;
    private Long userId;
    private Long courseId;
}
