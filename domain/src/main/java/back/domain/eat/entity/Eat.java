package back.domain.eat.entity;

import back.domain.course.entity.Course;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Eat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eatId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String lat; // 경도

    @Column(nullable = false)
    private String lng; // 위도

    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    @JsonIgnore
    private Course course;

    public void addCourse(Course course){
        this.course = course;
        course.addEat(this);
    }
}
