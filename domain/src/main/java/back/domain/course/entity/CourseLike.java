package back.domain.course.entity;


import back.domain.enums.CourseLikeStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@ToString
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
public class CourseLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseLikeId;

    @Column(nullable = false)
    @Setter
    private CourseLikeStatus courseLikeStatus;

    @Column(nullable = false)
    @Setter
    private int courseLikeCount;
}
