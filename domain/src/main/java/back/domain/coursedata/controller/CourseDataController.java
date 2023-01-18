package back.domain.coursedata.controller;


import back.domain.course.dto.CoursePatchDto;
import back.domain.coursedata.dto.CourseDataPatchDto;
import back.domain.coursedata.dto.CourseDataPostDto;
import back.domain.coursedata.dto.CourseDataResponseDto;
import back.domain.coursedata.entity.CourseData;
import back.domain.coursedata.mapper.CourseDataMapper;
import back.domain.coursedata.service.CourseDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080/", allowedHeaders = "*")
@RestController
@RequestMapping("/coursedata")
@RequiredArgsConstructor
public class CourseDataController {

    private final CourseDataMapper courseDataMapper;
    private final CourseDataService courseDataService;

    /* CourseData 생성 */
    @PostMapping
    public ResponseEntity post(@RequestBody CourseDataPostDto courseDataPostDto){

        CourseData courseData = courseDataMapper.CourseDataPostDtoToEntity(courseDataPostDto);
        CourseData saved = courseDataService.save(courseData,courseDataPostDto.getCourseId());
        CourseDataResponseDto courseDataResponseDto = courseDataMapper.CourseDataEntityToResponseDto(saved);

        return new ResponseEntity<>(
                courseDataResponseDto, HttpStatus.CREATED);
    }
    /* CourseData 단건 조회 */
    @GetMapping("/{courseDataId}")
    public ResponseEntity get(@PathVariable Long courseDataId){
        CourseData courseData = courseDataService.get(courseDataId);
        CourseDataResponseDto courseDataResponseDto = courseDataMapper.CourseDataEntityToResponseDto(courseData);
        return new ResponseEntity<>(
                courseDataResponseDto, HttpStatus.OK);
    }


    /* CourseData 전체 조회 */
    @GetMapping
    public ResponseEntity gets(){
        List<CourseData> courseDatas = courseDataService.gets();
        List<CourseDataResponseDto> courseDataResponseDtos = courseDataMapper.CourseDataEntityToResponseDtos(courseDatas);

        return new ResponseEntity<>(
                courseDataResponseDtos, HttpStatus.OK);
    }

    /* CourseData 수정 */
    @PatchMapping("/{courseDataId}")
    public ResponseEntity patch(@PathVariable Long courseDataId,
                                @RequestBody CourseDataPatchDto courseDataPatchDto){
        CourseData courseData = courseDataMapper.CourseDataPatchDtoToEntity(courseDataPatchDto);
        System.out.println("courseData : "+courseData);
        CourseData patched = courseDataService.patch(courseData,courseDataId);
        CourseDataResponseDto courseDataResponseDto = courseDataMapper.CourseDataEntityToResponseDto(patched);
        return new ResponseEntity<>(
                courseDataResponseDto, HttpStatus.OK);

    }

    /* CourseData 삭제 */
    @DeleteMapping("/{courseDataId}")
    public ResponseEntity delete(@PathVariable Long courseDataId){
        courseDataService.delete(courseDataId);
        return ResponseEntity.noContent().build();
    }

}
