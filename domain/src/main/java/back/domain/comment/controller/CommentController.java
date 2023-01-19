package back.domain.comment.controller;

import back.domain.comment.dto.CommentPatchDto;
import back.domain.comment.dto.CommentPostDto;
import back.domain.comment.dto.CommentResponseDto;
import back.domain.comment.entity.Comment;
import back.domain.comment.mapper.CommentMapper;
import back.domain.comment.service.CommentService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;


@CrossOrigin(origins = "http://localhost:8080/", allowedHeaders = "*")
@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentMapper commentMapper;
    private final CommentService commentService;

    @PostMapping
    public ResponseEntity commentPost(@RequestBody CommentPostDto commentPostDto){

        Comment comment = commentMapper.CommentPostDtoToEntity(commentPostDto);
        Comment save = commentService.post(comment,commentPostDto);
        CommentResponseDto commentResponseDto = commentMapper.CommentEntityToResponseDto(save);

        return new ResponseEntity<>(
                commentResponseDto, HttpStatus.CREATED);
    }

    /* comment 단건 조회 */
    @GetMapping("/{commentId}")
    public ResponseEntity commentGet(@PathVariable Long commentId){
        Comment comment = commentService.get(commentId);
        CommentResponseDto commentResponseDto = commentMapper.CommentEntityToResponseDto(comment);
        return new ResponseEntity<>(
                commentResponseDto, HttpStatus.OK);
    }

    /* comment 전체 조회 */
    @GetMapping
    public ResponseEntity commentGets(){
        List<Comment> comments = commentService.gets();
        List<CommentResponseDto> commentResponseDtos = commentMapper.CommentEntityToResponseDtos(comments);
        return new ResponseEntity<>(
                commentResponseDtos, HttpStatus.OK);
    }


    /* comment 수정 */
    @PatchMapping("/{commentId}")
    public ResponseEntity commentPatch(@PathVariable Long commentId,
                                       @RequestBody CommentPatchDto commentPatchDto){

        Comment comment = commentMapper.CommentPatchDtoToEntity(commentPatchDto);
        Comment patched = commentService.patch(commentId,commentPatchDto,commentPatchDto.getUserId());
        CommentResponseDto commentResponseDto = commentMapper.CommentEntityToResponseDto(patched);

        return new ResponseEntity<>(
                commentResponseDto, HttpStatus.OK);
    }

    /* comment 삭제 */
    @DeleteMapping("/{commentId}")
    public ResponseEntity commentDelete(@PathVariable("commentId") @Positive long commentId) {
        commentService.delete(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
