package back.domain.travelspot.entity;

import back.domain.travelspot.dto.InformationJsonConverter;
import back.domain.travelspot.dto.PathPostDto;
import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Path {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pathId;

    @Column(columnDefinition = "varchar(255)")
    @Convert(converter = InformationJsonConverter.class)
    private PathPostDto route;

}
