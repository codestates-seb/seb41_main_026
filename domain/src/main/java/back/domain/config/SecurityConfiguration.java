//package back.domain.config;
//
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfiguration {
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()                 // (1)
//                .formLogin()                      // (2)
//                .loginPage("/auths/login-form")   // (3)
//                .loginProcessingUrl("/process_login")    // (4)
//                .failureUrl("/auths/login-form?error")   // (5)
//                .and()                                   // (6)
//                .exceptionHandling().accessDeniedPage("/auths/access-denied")   // (1)
//                .and()
//                .authorizeHttpRequests(authorize -> authorize                  // (2)
//                        .antMatchers("/orders/**").hasRole("ADMIN")        // (2-1)
//                        .antMatchers("/members/my-page").hasRole("USER")   // (2-2)
//                        .antMatchers("⁄**").permitAll()                    // (2-3)
//                );
//        return http.build();
//    }
//
//
//    @Bean
//    public UserDetailsManager userDetailsManager(){
//        UserDetails userDetails =
//                User.withDefaultPasswordEncoder()
//                        .username("kevin@gmail.com")
//                        .password("1111")
//                        .roles("USER")
//                        .build();
//        return new InMemoryUserDetailsManager(userDetails);
//    }
//
//}
