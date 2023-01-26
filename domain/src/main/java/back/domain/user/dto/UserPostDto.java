package back.domain.user.dto;


import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserPostDto {

    @NotBlank
    @Pattern(regexp = "^[가-힣ㄱ-ㅎa-zA-Z0-9]{2,8}$",
    message = "이름은 2~8자까지 허용됩니다.")
    private String name;
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
            message = "정확한 이메일을 입력해 주세요.")
    private String email;
    @NotBlank
    @Pattern(regexp = "^[A-Za-z0-9]{6,12}$",
            message = "비밀번호 '최소 6자에서 최대 12자'까지 허용")
    private String password;
}
