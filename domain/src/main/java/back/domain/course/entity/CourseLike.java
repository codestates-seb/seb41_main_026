package back.domain.course.entity;


import back.domain.enums.CourseLikeStatus;
import back.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
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

//    @Column(nullable = false)
//    @Setter
//    private int courseLikeCount;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
//    @JoinColumn(name = "userId")
    @Setter
    @JsonIgnore
    private User user;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @JoinColumn(name = "courseId")
    @Setter
    @JsonIgnore
    private Course course;

//    @Column(nullable = false)
//    private boolean status; // true = 좋아요, false = 좋아요 취소
//
//    public void LikeCourse(Course course, User user) {
//        this.course = course;
//        this.user = user;
//        this.status = status;
//    }
//
//    public void unLikeCourse(Course course) {
//        this.status = false;
////        course.setCourseLikes(course.getCourseLikes() -1);
//    }

    public void addUser(User user) {
        this.user = user;
        user.addCourseLike(this);
    }

    public void addCourse(Course course) {
        this.course = course;
        course.addCourseLike(this);
    }
}
