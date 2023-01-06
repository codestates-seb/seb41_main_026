package back.domain.user.dto;

import back.domain.enums.UserStatus;
import lombok.*;

import java.time.LocalDateTime;


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
}