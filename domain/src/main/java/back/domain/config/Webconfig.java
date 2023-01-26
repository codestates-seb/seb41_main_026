package back.domain.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Webconfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8080", "http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080",
                        "http://localhost:3000",
                        "https://localhost:3000",
                        "http://travelproject.s3-website.ap-northeast-2.amazonaws.com/",
                        "https://127.0.0.1:3000")
                .allowedMethods("GET","POST","PUT","DELETE");
    }
}
