package back.domain.eatsplot.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class EatPostDto {

    private String name;
    private String lat;
    private String lng;

    private Long courseId;
}
