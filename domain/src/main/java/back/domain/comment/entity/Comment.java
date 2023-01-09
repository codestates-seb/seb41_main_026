package back.domain.comment.entity;


import back.domain.course.entity.Course;
import back.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter

@ToString
@Table(indexes = {
        @Index(columnList = "createdAt"),
        @Index(columnList = "modifiedAt")
}, name = "COMMENTS")
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    @Setter
    private String content;

    @Column(nullable = false, insertable = false, updatable = false,
            columnDefinition = "datetime default CURRENT_TIMESTAMP")
    @CreatedDate
    @Setter
    private LocalDateTime createdAt;


    @Column(nullable = false, insertable = false, updatable = false,
            columnDefinition = "datetime default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP")
    @LastModifiedDate
    @Setter
    private LocalDateTime modifiedAt;

    @ManyToOne(optional = false,fetch = FetchType.LAZY)
    @Setter
    @JsonManagedReference
    private User user;

    @ManyToOne(optional = false,fetch = FetchType.LAZY)
    @Setter
    @JsonManagedReference
    private Course course;


    public void addUser(User user){
        this.user =user ;
        user.addComment(this);
    }

    public void addCourse(Course course){
        this.course = course;
        course.addComment(this);
    }

}
