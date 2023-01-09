package back.domain.comment.service;


import back.domain.comment.dto.CommentPatchDto;
import back.domain.comment.dto.CommentPostDto;
import back.domain.comment.entity.Comment;
import back.domain.comment.repository.CommentRepository;
import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.exceoption.BusinessException;
import back.domain.exceoption.ErrorCode;
import back.domain.user.entity.User;
import back.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserService userService;
    private final CourseService courseService;

    /* Comment 생성 */
    public Comment post(Comment comment, CommentPostDto commentPostDto) {
        User user = userService.verifiedUser(commentPostDto.getUserId());
        Course course = courseService.verifiedCourse(commentPostDto.getCourseId());
        comment.addUser(user);
        comment.addCourse(course);
        comment.setCreatedAt(comment.getCreatedAt());
        comment.setModifiedAt(comment.getModifiedAt());
        Comment save = commentRepository.save(comment);
        return save;
    }

    /* Comment 단건 조회 */
    public Comment get(Long commentId) {
        Comment comment = verifiedComment(commentId);
        return comment;
    }

    /* Comment 전체 조회 */
    public List<Comment> gets() {
        List<Comment> comments = commentRepository.findAll();
        return comments;
    }

    /* Comment 수정 */
    public Comment patch(Comment comment, Long commentId, CommentPatchDto commentPatchDto) {
        User user = userService.verifiedUser(commentPatchDto.getUserId());
        Course course = courseService.verifiedCourse(commentPatchDto.getCourseId());

        Comment findComment= verifiedComment(commentId);
        findComment.addCourse(course);
        findComment.addUser(user);

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        return commentRepository.save(findComment);

    }
    /* Comment 삭제 */
    public void delete(Long commentId) {

        Comment comment = verifiedComment(commentId);
        commentRepository.delete(comment);

    }

    /* Comment 확인 */
    public Comment verifiedComment(Long commentId){
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment comment = optionalComment.orElseThrow(
                () -> new BusinessException(ErrorCode.COMMENT_NOT_FOUND)
        );
        return comment;
    }
}
