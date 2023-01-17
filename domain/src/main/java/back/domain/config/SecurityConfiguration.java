package back.domain.config;

import back.domain.auth.filter.JwtAuthenticationFilter;
import back.domain.auth.filter.JwtVerificationFilter;
import back.domain.auth.handler.UserAccessDeniedHandler;
import back.domain.auth.handler.UserAuthenticationEntryPoint;
import back.domain.auth.handler.UserAuthenticationFailureHandler;
import back.domain.auth.handler.UserAuthenticationSuccessHandler;
import back.domain.utils.JwtAuthorityUtils;
import back.domain.utils.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;

    private final JwtAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin()
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
                        .mvcMatchers(HttpMethod.GET,"/users").permitAll()
                        .mvcMatchers(HttpMethod.POST,"/users").permitAll()
                        .mvcMatchers(HttpMethod.GET,"/users/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/users/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.DELETE,"/users/**").hasAnyRole("USER","ADMIN")
                        // Comment
                        .mvcMatchers(HttpMethod.POST,"/question-comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/question-comment/comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.DELETE,"/question-comment/comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.POST,"/answer-comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/answer-comment/comment/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.DELETE,"/answer-comment/comment/**").hasAnyRole("USER","ADMIN")
                        // Vote
                        .mvcMatchers(HttpMethod.POST,"/question-vote/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/question-vote/vote/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.POST,"/answer-vote/**").hasAnyRole("USER","ADMIN")
                        .mvcMatchers(HttpMethod.PATCH,"/answer-vote/vote/**").hasAnyRole("USER","ADMIN")
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    public class CustomFilterConfig extends AbstractHttpConfigurer<CustomFilterConfig, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());
            jwtAuthenticationFilter.setRequiresAuthenticationRequestMatcher(
                    new AntPathRequestMatcher("/auth/login","POST"));

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);

        }
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(
                Arrays.asList("http://localhost:3000",
                        "http://localhost:8080",
                        "http://pre-34-stackoverflow.s3-website.ap-northeast-2.amazonaws.com"));
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

}
