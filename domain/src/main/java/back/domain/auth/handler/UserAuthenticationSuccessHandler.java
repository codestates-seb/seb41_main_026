package back.domain.auth.handler;

import back.domain.dto.AuthSuccessTokenResponseDto;
import back.domain.dto.ResponseDto;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    /* 인증에 성공 했을시 응답 설정
    * 현재 Test를 위해 ResponseDto 응답 설정 해 놓음*/
    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException, ServletException {
        log.info("# Authenticated successfully!");

        /*
 Token Response for Test
        Gson gson = new Gson();

        ResponseDto responseDto = ResponseDto.of(AuthSuccessTokenResponseDto.of(response));
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpStatus.OK.value());
        response.getWriter().write(gson.toJson(responseDto,ResponseDto.class));
*/
    }

}
