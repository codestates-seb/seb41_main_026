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


    CommentResponseDto CommentEntityToResponseDto(Comment comment);

    List<CommentResponseDto> CommentEntityToResponseDtos(List<Comment> comments);

    Comment CommentPatchDtoToEntity(CommentPatchDto commentPatchDto);
}
