package back.domain.eatspot.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class EatResponseDto {

    private Long eatId;
    private String Name;
    private String Iat;
    private String Ing;

}
