package back.domain.eat.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class EatPostDto {

    private Long courseId;
    private String name;
    private String lat;
    private String lng;

}
