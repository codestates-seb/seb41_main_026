package back.domain.travelspot.entity;

import back.domain.course.entity.Course;
import back.domain.travelspot.dto.PathPostDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.context.annotation.ComponentScan;

import javax.persistence.*;


@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Path {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pathId;

    @Column(columnDefinition = "varchar(255)")
    @Convert(converter = InformationJsonConverter.class)
    private PathPostDto route;



    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "pathId")
    @JsonIgnore
    private Course course;

    public void addCourse(Course course) {
        this.course = course;
        course.addPath(this);
    }
}