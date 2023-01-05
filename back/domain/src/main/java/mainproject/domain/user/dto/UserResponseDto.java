package mainproject.domain.user.dto;

import lombok.*;
import mainproject.domain.dto.UserStatus;
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

    private LocalDateTime createAt;

    private LocalDateTime modifiedAt;
}
