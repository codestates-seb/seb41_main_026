package mainproject.domain.course.controller;


import lombok.RequiredArgsConstructor;
import mainproject.domain.course.dto.CoursePatchDto;
import mainproject.domain.course.dto.CoursePostDto;
import mainproject.domain.utils.testStub;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/course")
@RequiredArgsConstructor
public class CourseController {


    @PostMapping
    public ResponseEntity coursePost(@RequestBody CoursePostDto coursePostDto){

        return new ResponseEntity<>(
              testStub.createCourseResponseDto(), HttpStatus.CREATED);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity courseGet(@PathVariable Long courseId){


        return new ResponseEntity<>(
                testStub.createCourseResponseDto(), HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity courseGets(){

        return new ResponseEntity<>(
           testStub.createCourseResponseDto(), HttpStatus.OK);
    }

    @PatchMapping("/{courseId}")
    public ResponseEntity coursepatch(@PathVariable Long courseId,
                                      @RequestBody CoursePatchDto coursePatchDto){

        return new ResponseEntity<>(
              testStub.createCourseResponseDto(), HttpStatus.OK);
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity coursepatch(){

        return ResponseEntity.noContent().build();
    }


}
