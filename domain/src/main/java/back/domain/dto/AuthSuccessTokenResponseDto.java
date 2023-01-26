package back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.servlet.http.HttpServletResponse;
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AuthSuccessTokenResponseDto {
    private String accessToken;
    private String refreshToken;

    public static AuthSuccessTokenResponseDto of(HttpServletResponse response) {
        return new AuthSuccessTokenResponseDto(
                response.getHeader("Authorization"),
                response.getHeader("Refresh"));
    }
}
