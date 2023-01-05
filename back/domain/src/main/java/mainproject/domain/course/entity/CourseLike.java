package mainproject.domain.course.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import mainproject.domain.dto.CourseLikeStatus;
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
