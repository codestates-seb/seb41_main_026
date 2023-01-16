package back.domain.comment.dto;


import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CommentResponseDto {

        private Long userId;
        private Long commentId;
        private Long courseId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
}
