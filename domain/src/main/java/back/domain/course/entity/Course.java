package back.domain.course.entity;


import back.domain.comment.entity.Comment;
import back.domain.coursedata.entity.CourseData;
import back.domain.eatsplot.entity.Eat;
import back.domain.sleepspot.entity.Sleep;
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
@ToString
@Table(name = "COURSES")
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor
@Component
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Setter
    @Column(nullable = false)
    private String courseName;
    
    @Setter
    @Column(nullable = false)
    private int viewCount;

    @Setter
    @Column(nullable = false)
    private String tag;

    @Setter
    @Column(nullable = false)
    private String location;

    @Setter
    @Column(nullable = false)
    private String guideName;

    @Setter
    @Column(nullable = false)
    private String guideText;


    @ToString.Exclude
    @OneToMany(mappedBy = "course",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<CourseLike> courseLikes = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "course",cascade = CascadeType.REMOVE)
    private List<Sleep> sleeps = new ArrayList<>();

    @OneToMany(mappedBy = "course",cascade = CascadeType.REMOVE,targetEntity=Path.class)
    private List<Path> paths = new ArrayList<>();



    @ToString.Exclude
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    @Setter
//    @JsonBackReference
    private List<TravelSpot> travelSpots = new ArrayList<>();

    @OneToMany(mappedBy = "course",cascade = CascadeType.REMOVE)
    private List<Eat> eats = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "course",fetch = FetchType.LAZY)
    @JsonBackReference
    private List<CourseData> courseDatas = new ArrayList<>();


    public void addEat(Eat eat){
        eats.add(eat);
    }

    public void addCourseLike(CourseLike courseLike){
        courseLikes.add(courseLike);
    }

    public void addComment(Comment comment){
        comments.add(comment);
    }


    public void addSleep(Sleep sleep){
        sleeps.add(sleep);
    }

    public void addTravel(TravelSpot travelSpot) {
        travelSpots.add(travelSpot);
    }

    public void addCourseData(CourseData courseData){
        courseDatas.add(courseData);
    }

    public void addPath(Path path){
        paths.add(path);
    }
}
