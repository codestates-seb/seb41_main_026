package back.domain.comment.service;


import back.domain.comment.dto.CommentPatchDto;
import back.domain.comment.dto.CommentPostDto;
import back.domain.comment.entity.Comment;
import back.domain.comment.repository.CommentRepository;
import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import back.domain.user.entity.User;
import back.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserService userService;
    private final CourseService courseService;

    /* Comment 생성*/
    public Comment post(Comment comment, CommentPostDto commentPostDto) {
        User user = userService.verifiedUser(commentPostDto.getUserId());
        Course course = courseService.verifiedCourse(commentPostDto.getCourseId());
//        comment.setUser(user.getUserId());
        comment.addUser(user);
        comment.addCourse(course);
        comment.setCreatedAt(LocalDateTime.now());
        comment.setModifiedAt(LocalDateTime.now());
        Comment save = commentRepository.save(comment);
        return save;
    }

    /* Comment 단건 조회 */
    public Comment get(Long commentId) {
        Comment comment = verifiedComment(commentId);
        comment.setModifiedAt(comment.getModifiedAt());
        return comment;
    }

    /* Comment 전체 조회 */
    public List<Comment> gets() {
        List<Comment> comments = commentRepository.findAll();
        return comments;
    }

    /* Comment 수정 */
    @Transactional
    public Comment patch (Long commentId, CommentPatchDto commentPatchDto, Long userId) {

        Comment comment = commentRepository.findByIdWithUser(commentId)
                .orElseThrow(() -> new BusinessException(ErrorCode.COMMENT_NOT_FOUND));

        if (!userId.equals(comment.getUser().getUserId())) {
            throw new BusinessException(ErrorCode.BAD_REQUEST);
        }

        comment.modify(commentPatchDto.getContent());
        comment.setModifiedAt(LocalDateTime.now());

        return commentRepository.save(comment);
    }

    /* Comment 삭제 */
    @Transactional
    public void delete(Long commentId, Long userId) {

        Comment comment = commentRepository.findByIdWithUser(commentId)
                .orElseThrow(() -> new BusinessException(ErrorCode.COMMENT_NOT_FOUND));

        if (!userId.equals(comment.getUser().getUserId())) {
            throw new BusinessException(ErrorCode.BAD_REQUEST);
        }

        commentRepository.delete(comment);
    }

    /* Comment 유효 확인 */
    public Comment verifiedComment(Long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Comment comment = optionalComment.orElseThrow(() ->
                new BusinessException(ErrorCode.COMMENT_NOT_FOUND));
        return comment;
    }
}
