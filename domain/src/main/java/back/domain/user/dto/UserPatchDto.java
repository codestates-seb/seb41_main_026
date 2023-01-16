package back.domain.user.dto;


import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserPatchDto {
    @NotBlank
    @NotBlank
    @Pattern(regexp = "^[가-힣ㄱ-ㅎa-zA-Z0-9]{2,8}$",
            message = "이름은 2~8자까지 허용됩니다.")
    private String name;
    @Pattern(regexp = "^[A-Za-z0-9]{6,12}$",
            message = "비밀번호 '최소 6자에서 최대 12자'까지 허용")
    @NotBlank
    private String password;

    private String userImage;

}
