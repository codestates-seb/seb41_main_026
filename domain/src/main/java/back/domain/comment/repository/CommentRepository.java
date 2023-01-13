package back.domain.comment.repository;


import back.domain.comment.entity.Comment;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Long> {
    @EntityGraph(attributePaths = {"user"})
    @Query("select c from Comment c where c.commentId = :commentId")
    Optional<Comment> findByIdWithUser(@Param("commentId") Long commentId);
}
