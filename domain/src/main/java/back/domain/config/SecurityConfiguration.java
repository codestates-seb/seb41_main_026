package back.domain.config;

import back.domain.auth.filter.JwtAuthenticationFilter;
import back.domain.auth.filter.JwtVerificationFilter;
import back.domain.auth.handler.*;
import back.domain.user.repository.UserRepository;
import back.domain.user.service.UserService;
import back.domain.utils.JwtAuthorityUtils;
import back.domain.utils.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;

    private final JwtTokenizer jwtTokenizer;

    private final JwtAuthorityUtils authorityUtils;
    private final UserRepository userRepository;
    private final UserService userService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfig())
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/auth/logout")
                .and()
                .authorizeRequests(auth -> auth
                        // Login Verify
                        .mvcMatchers(HttpMethod.GET,"/auth/verify").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.GET,"/auth/logout").hasAnyRole("USER","ADMIN")
                        // User
                        .mvcMatchers(HttpMethod.GET,"/user").permitAll()
                        .mvcMatchers(HttpMethod.POST,"/user").permitAll()
                        .mvcMatchers(HttpMethod.GET,"/user/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/user/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.DELETE,"/user/**").hasAnyRole("USER","ADMIN")
                        // Comment
                        .mvcMatchers(HttpMethod.GET,"/comment").permitAll()
                        .mvcMatchers(HttpMethod.POST,"/comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.DELETE,"/comment/**").hasAnyRole("USER","ADMIN")
                        // Course
                        .mvcMatchers(HttpMethod.GET,"/course").permitAll()
                        // CourseLike
                        .mvcMatchers(HttpMethod.POST,"/courseLike/**").hasAnyRole("USER","ADMIN")
                        .anyRequest().permitAll()
                );
                /*
OAuth2 로그인 설정 시작점
                .oauth2Login()
                //OAuth2 성공시 redirect
                .defaultSuccessUrl("/oauth/loginInfo", true)
                .userInfoEndpoint()
                .userService(oAuthService);
*/
        http
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2UserSuccessHandler(jwtTokenizer, authorityUtils, userRepository, userService))); // oauth2 적용

        return http.build();
    }

    public class CustomFilterConfig extends AbstractHttpConfigurer<CustomFilterConfig, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            // 로그인 URL
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());
            jwtAuthenticationFilter.setRequiresAuthenticationRequestMatcher(
                    new AntPathRequestMatcher("/auth/login","POST"));

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class); // jwtVerification > oauth2

        }
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(
                Arrays.asList("http://localhost:3000",
                        "http://travelgajo.s3-website.ap-northeast-2.amazonaws.com"
                        ));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE", "OPTIONS"));
        corsConfiguration.setMaxAge(493772L);
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addExposedHeader("Authorization");
        corsConfiguration.addExposedHeader("Refresh");
        corsConfiguration.addExposedHeader("userId");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }

/*
    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        var clientRegistration = clientRegistration();

        return new InMemoryClientRegistrationRepository(clientRegistration);
    }

    private ClientRegistration clientRegistration() {
        return CommonOAuth2Provider
                .GOOGLE
                .getBuilder("google")
                .clientId(clientId)
                .clientSecret(clientSecret)
                .build();
    }
*/
}
