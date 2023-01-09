package back.domain.user.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserPatchDto {

    private String name;
    private String password;
    private String userImage;

}
