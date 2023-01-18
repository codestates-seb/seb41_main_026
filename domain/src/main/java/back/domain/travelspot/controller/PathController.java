package back.domain.travelspot.controller;


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

    @PostMapping
    public ResponseEntity post(@RequestBody PathPostDto route){
        Path path = pathMapper.pathDtoToEntity(route);
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

    @PatchMapping("/{pathId}")
    public ResponseEntity patch(@PathVariable Long pathId,
                                @RequestBody PathPatchDto pathPatchDto){

        Path path = pathMapper.PathPatchDtoToEntity(pathPatchDto);
        Path patched = pathService.patch(path,pathId);
        return new ResponseEntity<>(
                patched, HttpStatus.OK);
    }


    @DeleteMapping("/{pathId}")
    public ResponseEntity delete(@PathVariable Long pathId){

        pathService.delete(pathId);
        return ResponseEntity.noContent().build();
    }


}
