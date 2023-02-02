package back.domain.course.dto;


import back.domain.comment.entity.Comment;
//import back.domain.course.entity.CourseLike;
import back.domain.course.entity.CourseLike;
import back.domain.coursedata.entity.CourseData;
import back.domain.eatsplot.entity.Eat;
import back.domain.sleepspot.entity.Sleep;
import back.domain.travelspot.entity.Path;
import back.domain.travelspot.entity.TravelSpot;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CourseResponseDto {

    private Long courseId;
    private String courseName;
    private List<CourseData> courseDatas;
    private String tag;
    private String location;
    private int viewCount;
    private String guideName;
    private String guideText;
    private List<Comment> comments;
    private List<CourseLike> courseLikes;
    private List<Sleep> sleeps;
    private List<Eat> eats;
    private List<TravelSpot> travelSpots;
    private List<Path> paths;
}
