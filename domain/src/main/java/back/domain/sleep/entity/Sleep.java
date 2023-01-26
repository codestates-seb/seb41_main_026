package back.domain.sleep.entity;

import back.domain.course.entity.Course;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@NoArgsConstructor
public class Sleep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sleepId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String lat;

    @Column(nullable = false)
    private String lng;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JsonIgnore
    private Course course;

    public void addCourse(Course course) {
        this.course = course;
        course.addSleep(this);
    }
}
