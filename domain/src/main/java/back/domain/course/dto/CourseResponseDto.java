package back.domain.course.dto;


import back.domain.comment.entity.Comment;
import back.domain.course.entity.CourseLike;
import back.domain.eatspot.entity.Eat;
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
    private String content;
    private String location;
    private List<String> tag;
    private int viewCount;
    private int likeCount;
    private List<Comment> comments;
    private List<CourseLike> courseLikes;
    private List<Eat> eats;
}
