package back.domain.travelspot.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PathResponseDto {


    private Long pathId;
    private List<String> route;
}
