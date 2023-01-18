package back.domain.eatspot.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@Entity
@NoArgsConstructor
public class Eat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eatId;

    @Column(nullable = false)
    @Setter
    private String Name;

    @Column(nullable = false)
    @Setter
    private String Iat;

    @Column(nullable = false)
    @Setter
    private String Ing;
}
