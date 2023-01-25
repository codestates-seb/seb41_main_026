package back.domain.course.dto;


import back.domain.comment.dto.CommentResponseDto;
import back.domain.comment.entity.Comment;
import back.domain.course.entity.CourseLike;
import back.domain.coursedata.entity.CourseData;
import back.domain.eat.entity.Eat;
import back.domain.sleep.entity.Sleep;
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
    private String location;
    private List<String> tag;
    private int viewCount;
    private int likeCount;
    private String guideName;
    private String guideText;
    private int time;
    private String route;
    private List<Comment> comments;
    private List<CourseLike> courseLikes;
    private List<TravelSpot> travelSpots;
    private List<Sleep> sleeps;
    private List<Eat> eats;
    private List<CourseData> courseDatas;
}
