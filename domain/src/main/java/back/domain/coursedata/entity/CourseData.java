package back.domain.coursedata.entity;

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

public class CourseData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseDataId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String text;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JsonIgnore
    private Course course;

    public void addCourse(Course course) {
        this.course = course;
        course.addCourseData(this);
    }
}
