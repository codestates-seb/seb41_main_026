package back.domain.travelspot.dto;


import back.domain.travelspot.entity.Path;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TravelResponseDto {

    private Long travelSpotId;

    private Long courseId;
    private String name;
    private String lat;
    private String lng;

}
