package back.domain.travelspot.dto;


import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PathPatchDto {

    private List<String> route1;
    private List<String> route2;
}
