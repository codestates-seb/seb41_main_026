package back.domain.eat.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class EatResponseDto {

    private Long eatId;
    private String name;
    private String lat;
    private String lng;

}
