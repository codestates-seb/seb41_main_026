package back.domain.course.dto;


import back.domain.comment.entity.Comment;
import back.domain.course.entity.CourseLike;
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
    private String tag;
    private List<Comment> comments;
    private List<CourseLike> courseLikes;


}
