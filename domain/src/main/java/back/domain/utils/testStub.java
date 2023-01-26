//package back.domain.utils;
//
//
//
//
//import back.domain.comment.dto.CommentResponseDto;
//import back.domain.course.dto.CourseLikeResponseDto;
//import back.domain.course.dto.CourseResponseDto;
//import back.domain.enums.CourseLikeStatus;
//import back.domain.enums.UserStatus;
//import back.domain.user.dto.UserResponseDto;
//import back.domain.user.entity.User;
//import java.time.LocalDateTime;
//import java.util.List;
//
//public class testStub {
//    public static User createTestUser() {
//        User user = new User();
//        user.setUserId(1L);
//        user.setEmail("testaa@test.com");
//        user.setPassword("1111!");
//        user.setName("testUser");
//        user.setUserStatus(UserStatus.ACTIVITY);
//        user.setUserImage("test-image");
//        return user;
//    }
//
//
//    public static UserResponseDto createUserResponseDto() {
//        return new UserResponseDto(
//                1L,
//                "test-name",
//                "test@gmail.com",
//                "1234",
//                0,
//                "test-image",
//                UserStatus.ACTIVITY,
//                LocalDateTime.now(),
//                LocalDateTime.now());
//    }
//
//    public static CourseResponseDto createCourseResponseDto(){
//        return new CourseResponseDto(
//                1L,
//                "test-courName",
//                "test-content",
//                List.of("test1","test2"));
//    }
//
//    public static CommentResponseDto createCommentResponseDto(){
//        return new CommentResponseDto(
//                1L,
//                "test-content",
//                LocalDateTime.now(),
//                LocalDateTime.now()
//        );
//    }
//
//    public static CourseLikeResponseDto createCourseLikeResponseDto(){
//        return new CourseLikeResponseDto(
//                1L,
//                CourseLikeStatus.LIKE,
//                0);
//    }
//}
