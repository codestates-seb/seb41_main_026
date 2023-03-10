package back.domain.course.entity;


import back.domain.comment.entity.Comment;
import back.domain.coursedata.entity.CourseData;
import back.domain.eat.entity.Eat;
import back.domain.sleep.entity.Sleep;
import back.domain.travelspot.entity.Path;
import back.domain.travelspot.entity.TravelSpot;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@Table(name = "COURSES")
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;


    @Column(nullable = false, unique = true)
    private String courseName;


    @Column(nullable = false)
//    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> tag = new ArrayList<>();


    @Column(nullable = false)
    private int viewCount; // 조회수


    @Column(nullable = false)
    private int likeCount; // 좋아요 수


    @Column(nullable = false)
    private String guideName;

    @Column(nullable = false)
    private String guideText;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private int time;

    @Column(nullable = false)
    private String route;

    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<CourseLike> courseLikes = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Comment> comments = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    private List<TravelSpot> travelSpots = new ArrayList<>();

    @OneToMany(mappedBy = "course",cascade = CascadeType.REMOVE)
    private List<Sleep> sleeps = new ArrayList<>();

    @OneToMany(mappedBy = "course",cascade = CascadeType.REMOVE)
    private List<Eat> eats = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.REMOVE)
    private List<Path> paths = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<CourseData> courseDatas = new ArrayList<>();

    public void addCourseLike(CourseLike courseLike) {
        courseLikes.add(courseLike);
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public void addTravel(TravelSpot travelSpot) {
        travelSpots.add(travelSpot);
    }

    public void addSleep(Sleep sleep) {
        sleeps.add(sleep);
    }

    public void addEat(Eat eat){
        eats.add(eat);
    }

    public void addPath(Path path) {
        paths.add(path);
    }
    public void addCourseData(CourseData courseData){
        courseDatas.add(courseData);
    }
}
