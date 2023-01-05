package back.domain.tag.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TagResponseDtos {
    private Long tagId;
    private List<String> tags;
}
