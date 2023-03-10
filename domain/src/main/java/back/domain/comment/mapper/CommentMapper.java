package back.domain.comment.mapper;


import back.domain.comment.dto.CommentPatchDto;
import back.domain.comment.dto.CommentPostDto;
import back.domain.comment.dto.CommentResponseDto;
import back.domain.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment CommentPostDtoToEntity(CommentPostDto commentPostDto);

    default CommentResponseDto CommentEntityToResponseDto(Comment comment) {
        CommentResponseDto commentResponseDto = new CommentResponseDto();
        commentResponseDto.setUserId(comment.getUser().getUserId());
        commentResponseDto.setCourseId(comment.getCourse().getCourseId());
        commentResponseDto.setCommentId(comment.getCommentId());
        commentResponseDto.setCreatedAt(comment.getCreatedAt());
        commentResponseDto.setModifiedAt(comment.getModifiedAt());
        commentResponseDto.setContent(comment.getContent());

        return commentResponseDto;
    }

    List<CommentResponseDto> CommentEntityToResponseDtos(List<Comment> comments);

    Comment CommentPatchDtoToEntity(CommentPatchDto commentPatchDto);
}
