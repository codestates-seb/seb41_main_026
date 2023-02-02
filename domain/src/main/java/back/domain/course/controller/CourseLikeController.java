package back.domain.course.controller;



import back.domain.course.dto.CourseLikePostDto;
import back.domain.course.dto.CourseLikeResponseDto;
import back.domain.course.entity.Course;
import back.domain.course.entity.CourseLike;
import back.domain.course.mapper.CourseLikeMapper;

import back.domain.course.service.CourseLikeService;

import back.domain.course.service.CourseService;
import back.domain.user.entity.User;
import back.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@CrossOrigin(origins = "http://localhost:8080/", allowedHeaders = "*")
@RestController
@RequestMapping("/courselike")
@RequiredArgsConstructor
public class CourseLikeController {

    private final CourseLikeService courseLikeService;
    private final CourseLikeMapper courseLikeMapper;
    private final UserService userService;
    private final CourseService courseService;

    /* 코스 추천 생성 */
    @PostMapping("/{courseId}")
    public ResponseEntity courseLikePost(@PathVariable Long courseId,
                        @RequestBody CourseLikePostDto courseLikePostDto){

        User user = userService.verifiedUser(courseLikePostDto.getUserId());
        Course course = courseService.verifiedCourse(courseId);
        CourseLike save = courseLikeService.post(user,course);
        CourseLikeResponseDto courseEntityToResponseDto = courseLikeMapper.CourseLikeEntityToResponseDto(save);

        return new ResponseEntity(
                courseEntityToResponseDto, HttpStatus.OK);
    }


    /* 코스 추천 단건 조회 */
    @GetMapping("/course/{courseLikeId}")
    public ResponseEntity courseLikeGet(@PathVariable Long courseLikeId){
        CourseLike courseLike = courseLikeService.get(courseLikeId);
        CourseLikeResponseDto courseLikeResponseDto = courseLikeMapper.CourseLikeEntityToResponseDto(courseLike);

        return new ResponseEntity(
                courseLikeResponseDto, HttpStatus.OK);
    }

    /* 코스 추천 전체 조회*/
    @GetMapping
    public ResponseEntity courseLikeGets(){

        List<CourseLike> courseLikes = courseLikeService.gets();
        List<CourseLikeResponseDto> courseEntityToResponseDtos = courseLikeMapper.CourseLikeEntityToResponseDtos(courseLikes);
        return new ResponseEntity(
                courseEntityToResponseDtos, HttpStatus.OK);
    }




}
