package back.domain.course.controller;


import back.domain.course.dto.CourseLikePatchDto;
import back.domain.course.dto.CourseLikePostDto;
import back.domain.dto.SingleResponseDto;
import back.domain.utils.testStub;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/courselike")
@RequiredArgsConstructor
public class CourseLikeController {


    /* 코스 추천 생성 */
    @PostMapping("/{courseId}")
    public ResponseEntity courseLikePost(@RequestBody CourseLikePostDto courseLikePostDto){

        return new ResponseEntity(
                SingleResponseDto.of(testStub.createCourseLikeResponseDto()), HttpStatus.OK);
    }

    /* 코스 추천 단건 조회 */
    @GetMapping("/course/{courseLikeId}")
    public ResponseEntity courseLikeGet(@PathVariable Long courseLikeId){

        return new ResponseEntity(
                SingleResponseDto.of(testStub.createCourseLikeResponseDto()), HttpStatus.OK);
    }

    /* 코스 추천 전체 조회*/
    @GetMapping
    public ResponseEntity courseLikeGets(){

        return new ResponseEntity(
               testStub.createCourseLikeResponseDto(), HttpStatus.OK);
    }

    /* 코스 추천 수정 */
    @PatchMapping("/course/{courseLikeId}")
    public ResponseEntity courseLikePatch(@PathVariable Long courseLikeId,
                                          @RequestBody CourseLikePatchDto courseLikePatchDto){
        return new ResponseEntity(
                testStub.createCourseLikeResponseDto(), HttpStatus.OK);
    }



}
