package back.domain.course.entity;


import back.domain.enums.CourseLikeStatus;
import back.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.apache.el.stream.Optional;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.swing.text.html.Option;

@Getter
@ToString
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
public class CourseLike {

    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseLikeId;

    @Column(nullable = false)
    @Setter
    private Integer courseLikeStatus;


    @ManyToOne(optional=true,fetch = FetchType.LAZY)
    @Setter
    @JsonIgnore
//    @JsonManagedReference
    private User user;


    @ManyToOne(optional = true,fetch = FetchType.LAZY)
    @Setter
//    @JsonIgnore
    @JsonManagedReference
    private Course course;

    public void addUser(User user){
        this.user= user;
        user.addCourseLike(this);
    }

    public void addCourse(Course course){
        this.course = course;
        course.addCourseLike(this);
    }

}
