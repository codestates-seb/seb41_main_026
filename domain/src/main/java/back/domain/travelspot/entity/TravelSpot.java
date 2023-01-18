package back.domain.travelspot.entity;


import back.domain.course.entity.Course;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@ToString
@Getter
@Setter
@Table(name = "TRAVELSPOTS")
@NoArgsConstructor
@AllArgsConstructor
public class TravelSpot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "travelSpotId")
    private Long travelSpotId;

    @Column(nullable = false)
    @Setter
    private String name; // 장소명

    @Column(nullable = false)
    @Setter
    private String lat; // 위도

    @Column(nullable = false)
    @Setter
    private String lng; // 경도


    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
//    @JsonManagedReference
    private Course course;

//    @ToString.Exclude
//    @OneToMany(mappedBy = "travelSpot", fetch = FetchType.LAZY)
//    @Setter
////    @JsonBackReference
//    private List<Path> paths = new ArrayList<>();

    public void addCourse(Course course) {
        this.course = course;
        course.addTravel(this);
    }

//    public void addPath(Path path) {
//        paths.add(path);
//    }



}
