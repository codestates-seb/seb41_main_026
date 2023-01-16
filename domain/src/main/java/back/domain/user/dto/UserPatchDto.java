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

    @Pattern(regexp = "^[가-힝ㄱ-ㅎa-zA-Z]{2,8}$",
            message = "2~8 글자를 입력하세요.")
    @NotBlank
    private String name;
    @Pattern(regexp = "^[a-zA-Z0-9]{6,12}$",
            message = "비밀번호는 최소 6글자 부터 12글자 까지 입력하세요")
    @NotBlank
    private String password;
    private String userImage;

}
