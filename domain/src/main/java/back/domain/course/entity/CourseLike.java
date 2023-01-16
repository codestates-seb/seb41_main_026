package back.domain.course.entity;



import back.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;


@ToString
@Entity
@Setter
@Getter
@NoArgsConstructor
public class CourseLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseLikeId;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "courseId")
//    @JsonIgnore
    @JsonManagedReference
    private Course course;

    @Column(nullable = false)
    private Integer courseLikeStatus;

    public void addUser(User user) {
        this.user = user;
        user.addCourseLike(this);
    }

    public void addCourse(Course course) {
        this.course = course;
        course.addCourseLike(this);
    }
}
