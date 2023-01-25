package back.domain.travelspot.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PathPostDto {

    private Long courseId;
    private List<String> route1;
    private List<String> route2;

}
