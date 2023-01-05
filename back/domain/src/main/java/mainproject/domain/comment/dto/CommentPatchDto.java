package mainproject.domain.comment.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CommentPatchDto {


    private String content;
    private Long userId;
}
