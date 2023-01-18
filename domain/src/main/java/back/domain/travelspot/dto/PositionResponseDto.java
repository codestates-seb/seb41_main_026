package back.domain.travelspot.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PositionResponseDto<T>{

    private T position;
}
