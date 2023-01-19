package back.domain.sleepspot.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SleepResponseDto {

    private Long sleepId;
    private String Name;
    private String lat;
    private String lng;
}
