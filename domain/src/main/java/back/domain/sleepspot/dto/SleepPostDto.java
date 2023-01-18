package back.domain.sleepspot.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SleepPostDto {

    private Long courseId;
    private String name;
    private String lat;
    private String lng;
}
