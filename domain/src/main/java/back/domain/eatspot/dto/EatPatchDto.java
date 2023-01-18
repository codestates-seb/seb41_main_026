package back.domain.eatspot.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class EatPatchDto {

    private String name;
    private String lat;
    private String lng;
}
