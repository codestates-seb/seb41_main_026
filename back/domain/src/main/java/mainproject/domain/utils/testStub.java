package mainproject.domain.utils;


import mainproject.domain.comment.dto.CommentResponseDto;
import mainproject.domain.course.dto.CourseLikeResponseDto;
import mainproject.domain.course.dto.CourseResponseDto;
import mainproject.domain.dto.CourseLikeStatus;
import mainproject.domain.dto.UserStatus;
import mainproject.domain.tag.dto.TagResponseDto;
import mainproject.domain.user.dto.UserResponseDto;
import mainproject.domain.user.entity.User;

import java.time.LocalDateTime;
import java.util.List;

public class testStub {
    public static User createTestUser() {
        User user = new User();
        user.setUserId(1L);
        user.setEmail("testaa@test.com");
        user.setPassword("1111!");
        user.setName("testUser");
        user.setUserStatus(UserStatus.ACTIVITY);
        user.setUserImage("test-image");
        return user;
    }


    public static UserResponseDto createUserResponseDto() {
        return new UserResponseDto(
                1L,
                "test-name",
                "test@gmail.com",
                "1234",
                0,
                "test-image",
                UserStatus.ACTIVITY,
                LocalDateTime.now(),
                LocalDateTime.now());
    }

    public static CourseResponseDto createCourseResponseDto(){
        return new CourseResponseDto(
                1L,
                "test-courName",
                "test-content",
                List.of("test1","test2"));
    }

    public static CommentResponseDto createCommentResponseDto(){
        return new CommentResponseDto(
                1L,
                "test-content",
                LocalDateTime.now(),
                LocalDateTime.now()
        );
    }

    public static CourseLikeResponseDto createCourseLikeResponseDto(){
        return new CourseLikeResponseDto(
                1L,
                CourseLikeStatus.LIKE,
                0);
    }

    public static TagResponseDto createTagResponseDto(){
        return new TagResponseDto(
                1L,
                List.of("test1","test2"));
    }


}
