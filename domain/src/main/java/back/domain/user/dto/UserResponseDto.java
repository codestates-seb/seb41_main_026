package back.domain.user.dto;

import back.domain.comment.entity.Comment;
//import back.domain.course.entity.CourseLike;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.enums.UserStatus;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserResponseDto {


    private Long userId;

    private String name;

    private String email;

    private String password;

    private int likeCount;

    private String userImage;

    private UserStatus userStatus;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private List<Comment> comments;

    private List<CourseLike> courseLikes;
}
