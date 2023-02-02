package back.domain.course.controller;


import back.domain.course.dto.CoursePatchDto;
import back.domain.course.dto.CoursePostDto;
import back.domain.course.dto.CourseResponseDto;
import back.domain.course.dto.CourseUserId;
import back.domain.course.entity.Course;
import back.domain.course.mapper.CourseMapper;
import back.domain.course.repository.CourseRepository;
import back.domain.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:8080/", allowedHeaders = "*")
@RestController
@RequestMapping("/course")
@RequiredArgsConstructor
public class CourseController {

    private final CourseMapper courseMapper;
    private final CourseService courseService;

    /* course 생성 */
    @PostMapping
    public ResponseEntity coursePost(@RequestBody CoursePostDto coursePostDto){
        Course course = courseMapper.CoursePostDtoToEntity(coursePostDto);
        Course save = courseService.post(course);
        CourseResponseDto courseResponseDto = courseMapper.CourseEntityToResponseDto(save);


        return new ResponseEntity<>(
                courseResponseDto, HttpStatus.CREATED);
    }

    /* courselike 수정 */
//    @PatchMapping("/courselike/{courseId}")
//    public ResponseEntity courselike(@PathVariable Long courseId,
//                                     @RequestBody CourseUserId courseUserId){
//        Course course = courseService.courselikepatch(courseId,courseUserId.getUserId());
//        CourseResponseDto courseResponseDto = courseMapper.CourseEntityToResponseDto(course);
//
//        return new ResponseEntity<>(
//                courseResponseDto, HttpStatus.OK);
//    }



    /* course 단건 조회 */
    @GetMapping("/{courseId}")
    public ResponseEntity courseGet(@PathVariable Long courseId){
        Course course = courseService.get(courseId);
        CourseResponseDto courseResponseDto = courseMapper.CourseEntityToResponseDto(course);
        return new ResponseEntity<>(
                courseResponseDto, HttpStatus.OK);
    }

    /* course 전체 조회 */
    @GetMapping
    public ResponseEntity courseGets(){
        List<Course> courses = courseService.gets();
        return new ResponseEntity<>(
                courses, HttpStatus.OK);
    }

    /* course 수정 */
    @PatchMapping("/{courseId}")
    public ResponseEntity coursepatch(@PathVariable Long courseId,
                                      @RequestBody CoursePatchDto coursePatchDto){

        Course course = courseMapper.CoursePatchDtoToEntity(coursePatchDto);

        Course patched = courseService.patch(course,courseId);

        CourseResponseDto courseResponseDto = courseMapper.CourseEntityToResponseDto(patched);

        return new ResponseEntity<>(
                courseResponseDto, HttpStatus.OK);
    }

    /* course 삭제 */
    @DeleteMapping("/{courseId}")
    public ResponseEntity coursedelete(@PathVariable Long courseId){
        courseService.delete(courseId);
        return ResponseEntity.noContent().build();
    }






}
