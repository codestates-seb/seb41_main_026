package back.domain.course.entity;


import back.domain.comment.entity.Comment;
import back.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@ToString
@Table(name = "COURSE")
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Setter
    @Column(nullable = false)
    private String courseName;

    @Setter
    @Column(nullable = false)
    private String content;

    @Setter
    @Column(nullable = false)
    private int viewCount;

    @Setter
    @Column(nullable = false)
    private String tag;

    @Setter
    @Column(nullable = false)
    private String location;

//    @Setter
//    @Column(nullable = false)
//    private Integer courseLike;

    @ToString.Exclude
    @OneToMany(mappedBy = "course",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<CourseLike> courseLikes = new ArrayList<>();

//    @ManyToOne(optional=true,fetch = FetchType.LAZY)
//    @Setter
//    @JsonIgnore
////    @JsonManagedReference
//    private User user;

    @ToString.Exclude
    @OneToMany(mappedBy = "course",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Comment> comments = new ArrayList<>();


    public void addCourseLike(CourseLike courseLike){
        courseLikes.add(courseLike);
    }

    public void addComment(Comment comment){
        comments.add(comment);
    }

//    public void addUser(User user){
//        this.user =user ;
//        user.addCourse(this);
//    }

}
