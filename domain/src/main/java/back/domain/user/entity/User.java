package back.domain.user.entity;


import back.domain.comment.entity.Comment;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.enums.UserStatus;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@ToString
@Table(indexes = {
        @Index(columnList = "createdAt"),
        @Index(columnList = "modifiedAt")
}, name = "USERS")
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {

    public User(Long userId, String name, String email, String password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long userId;

    @Setter
    @Column(nullable = false)
    private String name;

    @Setter
    @Column(nullable = false)
    private String email;

    @Setter
    @Column(nullable = false, length = 1000)
    private String password;

    @Setter
    @Column(nullable = false, length = 1000)
    private int courseLike;

    @Setter
    @Column(nullable = false, length = 1000)
    private String userImage;

    @Setter
    @Column(nullable = false)
    private int likeCount = 0;

    @Setter
    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private UserStatus userStatus;

    @Column(nullable = false, insertable = false, updatable = false,
            columnDefinition = "datetime default CURRENT_TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdAt= LocalDateTime.now();


    @Column(nullable = false, insertable = false, updatable = false,
            columnDefinition = "datetime default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    @LastModifiedDate
    @Setter
    private LocalDateTime modifiedAt= LocalDateTime.now();


    @OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)
//    @JsonBackReference
    private List<CourseLike> courseLikes = new ArrayList<>();


    @OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)
//    @JsonBackReference
    private List<Comment> comments = new ArrayList<>();

    public void addCourseLike(CourseLike courseLike){
        courseLikes.add(courseLike);
    }

    public void addComment(Comment comment){
        comments.add(comment);
    }


}
