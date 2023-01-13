package back.domain.course.dto;


import back.domain.comment.entity.Comment;
//import back.domain.course.entity.CourseLike;
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
    private String location;
    private int viewCount;
//    private Integer courseLike;
    private List<Comment> comments;
    // todo 좋아요 수가 나오도록 수정
    private List<CourseLike> courseLikes;


}
