package back.domain.user.dto;


import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserPostDto {

    private String name;
    private String email;
    private String password;
}
