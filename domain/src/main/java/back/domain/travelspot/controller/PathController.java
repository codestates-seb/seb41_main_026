package back.domain.travelspot.controller;


import back.domain.course.entity.Course;
import back.domain.course.service.CourseService;
import back.domain.travelspot.dto.PathPatchDto;
import back.domain.travelspot.dto.PathPostDto;
import back.domain.travelspot.dto.PathResponseDto;
import back.domain.travelspot.entity.Path;
import back.domain.travelspot.mapper.PathMapper;
import back.domain.travelspot.service.PathService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
@RequestMapping("/path")
@RequiredArgsConstructor
public class PathController {

    private final PathMapper pathMapper;
    private final PathService pathService;
    private final CourseService courseService;

    @PostMapping("/{courseId}")
    public ResponseEntity post(@PathVariable Long courseId , @RequestBody PathPostDto route){
        Course course = courseService.verifiedCourse(courseId);
        Path path = pathMapper.pathDtoToEntity(route,course);
        Path saved = pathService.save(path);
        return new ResponseEntity<>(
                saved, HttpStatus.CREATED);
    }

    @GetMapping("/{pathId}")
    public ResponseEntity get(@PathVariable Long pathId){
        Path path = pathService.get(pathId);
        return new ResponseEntity<>(
                path, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity gets(){
        List<Path> path = pathService.gets();
        return new ResponseEntity<>(
                path, HttpStatus.OK);
    }

    @DeleteMapping("/{pathId}")
    public ResponseEntity delete(@PathVariable Long pathId){

        pathService.delete(pathId);
        return ResponseEntity.noContent().build();
    }

}
