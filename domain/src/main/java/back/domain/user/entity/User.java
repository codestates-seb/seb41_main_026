package back.domain.user.entity;


import back.domain.comment.entity.Comment;
import back.domain.course.entity.CourseLike;
import back.domain.enums.UserStatus;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column
    private String provider;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 50, nullable = false, updatable = false)
    private String email;

    @Column(length = 1000)
    private String password;

    @Column(length = 1000)
    private String userImage;

    @Column
    @Enumerated(value = EnumType.STRING)
    private UserStatus userStatus;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Column(nullable = false, insertable = false, updatable = false,
            columnDefinition = "datetime default CURRENT_TIMESTAMP")
    @CreatedDate
    private LocalDateTime createdAt = LocalDateTime.now();


    @Column(nullable = false, insertable = false, updatable = false,
            columnDefinition = "datetime default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    @LastModifiedDate
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ToString.Exclude
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
//    @Nullable
//    @JsonBackReference
    private List<CourseLike> courseLikes = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
//    @JsonBackReference
    private List<Comment> comments = new ArrayList<>();

    @Column
    private Integer likeCount = 0;


    public void addCourseLike(CourseLike courseLike) {
        courseLikes.add(courseLike);
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public User(String user) {
        this.email = email;
    }
}
