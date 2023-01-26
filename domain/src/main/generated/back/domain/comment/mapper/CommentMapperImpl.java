package back.domain.comment.mapper;

import back.domain.comment.dto.CommentPatchDto;
import back.domain.comment.dto.CommentPostDto;
import back.domain.comment.dto.CommentResponseDto;
import back.domain.comment.entity.Comment;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-26T13:39:49+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment CommentPostDtoToEntity(CommentPostDto commentPostDto) {
        if ( commentPostDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setUserId( commentPostDto.getUserId() );
        comment.setCourseId( commentPostDto.getCourseId() );
        comment.setContent( commentPostDto.getContent() );

        return comment;
    }

    @Override
    public List<CommentResponseDto> CommentEntityToResponseDtos(List<Comment> comments) {
        if ( comments == null ) {
            return null;
        }

        List<CommentResponseDto> list = new ArrayList<CommentResponseDto>( comments.size() );
        for ( Comment comment : comments ) {
            list.add( CommentEntityToResponseDto( comment ) );
        }

        return list;
    }

    @Override
    public Comment CommentPatchDtoToEntity(CommentPatchDto commentPatchDto) {
        if ( commentPatchDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setUserId( commentPatchDto.getUserId() );
        comment.setCourseId( commentPatchDto.getCourseId() );
        comment.setContent( commentPatchDto.getContent() );

        return comment;
    }
}
