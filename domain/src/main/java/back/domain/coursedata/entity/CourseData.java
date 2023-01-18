package back.domain.coursedata.entity;


import back.domain.course.entity.Course;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@ToString
@Entity
@NoArgsConstructor

public class CourseData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseDataId;

    @Column(nullable = false)
    @Setter
    private String title;

    @Column(nullable = false)
    @Setter
    private String text;

    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    @Setter
    @JsonIgnore
    private Course course;

    public void addCourse(Course course){
        this.course = course;
        course.addCourseData(this);
    }
}
