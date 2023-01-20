package back.domain.auth.handler;

import back.domain.user.dto.UserPostDto;
import back.domain.user.entity.User;
import back.domain.user.repository.UserRepository;
import back.domain.user.service.UserService;
import back.domain.utils.JwtAuthorityUtils;
import back.domain.utils.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
public class OAuth2UserSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final JwtAuthorityUtils jwtAuthorityUtils;
    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User) authentication.getPrincipal();
/*
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        List<String> authorities = jwtAuthorityUtils.createRoles(email);
*/
        Map<String, Object> attributes = oAuth2User.getAttributes();
        String email = null;
        String userImage = null;
        String location = null;

        String name = attributes.get("name").toString();

        try {
            //공통
            email = attributes.get("email").toString();
            //google
            userImage = attributes.get("userImage").toString();
            //github
            location = attributes.get("location").toString();
        } catch (NullPointerException ne) {
            try {
                //github
                if (email == null) {
                    email = name + "@github.com";
                }
                //github
                if (userImage == null) {
                    userImage = attributes.get("avatar_url").toString();
                }
            } catch (NullPointerException e) {
                log.info("userImage 정보가 없습니다.");
            }
        }
        List<String> roles = jwtAuthorityUtils.createRoles(email);
        saveUser(email, name, userImage);
        redirect(request, response, email, roles);
    }

    private void saveUser(String email, String name, String userImage) {
        User user = new User();


        // 이미 가입된 회원인 경우
        if (userRepository.findByEmail(email).isPresent()) user = userRepository.findByEmail(email).get();

        user.setEmail(email);
        user.setName(name);
        user.setUserImage(userImage);
        userRepository.save(user);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<String> authorities) throws IOException {
        String accessToken = delegateAccessToken(username, authorities);
        String refreshToken = delegateRefreshToken(username);

        String uri = createURI(accessToken, refreshToken).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private String delegateAccessToken(String username, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("roles", authorities);

        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateAccessToken(claims, subject, expiration ,base64EncodedSecretKey);


    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        return jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);
    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com")
                .port(8080)
//                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
