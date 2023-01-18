package back.domain.course.entity;


import back.domain.comment.entity.Comment;
import back.domain.enums.Tag;
import back.domain.travelspot.entity.TravelSpot;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import net.bytebuddy.matcher.FilterableList;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
@Table(name = "COURSES")
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Setter
    @Column(nullable = false, unique = true)
    private String courseName;

    @Setter
    @Column(nullable = false, unique = true)
    private String content;

    @Setter
    @Column(nullable = false)
//    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> tag = new ArrayList<>();

    @Setter
    @Column(nullable = false)
    private int viewCount; // 조회수

    @Setter
    @Column(nullable = false)
    private int likeCount; // 좋아요 수

    @Setter
    @Column(nullable = false)
    private String location;

    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @Setter
    @JsonBackReference
    private List<CourseLike> courseLikes = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @Setter
    @JsonBackReference
    private List<Comment> comments = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @Setter
//    @JsonBackReference
    private List<TravelSpot> travelSpots = new ArrayList<>();

    public void addCourseLike(CourseLike courseLike) {
        courseLikes.add(courseLike);
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public void addTravel(TravelSpot travelSpot) {
        travelSpots.add(travelSpot);
    }

}
