package mainproject.domain.tag.dto;


import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TagResponseDto {


    private Long tagId;

    private List<String> tags;


}
