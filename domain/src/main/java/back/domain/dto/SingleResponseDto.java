package back.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class SingleResponseDto {

    private Object data;

    public static SingleResponseDto of(Object data){
        return new SingleResponseDto(data);
    }


}
