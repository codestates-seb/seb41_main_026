package back.domain.comment.dto;


import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CommentResponseDto {


        private Long commentId;

        private String content;

        private LocalDateTime createAt;

        private LocalDateTime updateAt;


}
