package back.domain.sleep.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SleepResponseDto {

    private Long sleepId;
    private String name;
    private String lat;
    private String lng;
}
