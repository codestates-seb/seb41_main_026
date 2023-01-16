//package back.domain.config;
//
//import com.stack.stackoverflow.auth.filter.JwtAuthenticationFilter;
//import com.stack.stackoverflow.auth.filter.JwtVerificationFilter;
//import com.stack.stackoverflow.auth.handler.UserAccessDeniedHandler;
//import com.stack.stackoverflow.auth.handler.UserAuthenticationEntryPoint;
//import com.stack.stackoverflow.auth.handler.UserAuthenticationFailureHandler;
//import com.stack.stackoverflow.auth.handler.UserAuthenticationSuccessHandler;
//import com.stack.stackoverflow.auth.jwt.JwtTokenizer;
//import com.stack.stackoverflow.auth.utils.CustomAuthorityUtils;
//import com.stack.stackoverflow.user.service.UserService;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Configuration
//public class SecurityConfiguration {
//    private final JwtTokenizer jwtTokenizer;
//    private final CustomAuthorityUtils authorityUtils;
//    private final UserService userService;
//
//    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, UserService userService) {
//        this.jwtTokenizer = jwtTokenizer;
//        this.authorityUtils = authorityUtils;
//        this.userService = userService;
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .headers().frameOptions().sameOrigin()
//                .and()
//                .csrf().disable()
//                .cors(withDefaults())
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .formLogin().disable()
//                .httpBasic().disable()
//                .exceptionHandling()
//                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
//                .accessDeniedHandler(new UserAccessDeniedHandler())
//                .and()
//                .apply(new CustomFilterConfigurer())
//                .and()
//                .authorizeHttpRequests(authorize -> authorize
//                        .antMatchers(HttpMethod.POST, "/question/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.PATCH, "/question/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/question/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.POST, "/answer/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.PATCH, "/answer/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/answer/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/user/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.GET, "/user-page/**").hasAnyRole("USER", "ADMIN")
//                        .antMatchers(HttpMethod.PATCH, "/user-page/**").hasAnyRole("USER", "ADMIN")
//                        .anyRequest().permitAll()
//                );
//        return http.build();
//    }
//
//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("*"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//
//    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
//        @Override
//        public void configure(HttpSecurity builder) throws Exception {
//            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
//
//            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, userService);
//            jwtAuthenticationFilter.setFilterProcessesUrl("/user/login");
//            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
//            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());
//
//            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils, userService);
//
//            builder.addFilter(jwtAuthenticationFilter)
//                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
//        }
//    }
//}
