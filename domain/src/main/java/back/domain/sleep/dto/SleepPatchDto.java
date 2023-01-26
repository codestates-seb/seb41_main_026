package back.domain.sleep.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SleepPatchDto {

    private String name;
    private String lat;
    private String lng;
}
