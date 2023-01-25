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
    private Long courseId;
    private List<String> route;
}
