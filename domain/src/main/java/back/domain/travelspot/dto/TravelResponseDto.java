package back.domain.travelspot.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TravelResponseDto {
    private Long id;

    private Long courseId;
    private String name;
    private String lat;
    private String lng;

}
