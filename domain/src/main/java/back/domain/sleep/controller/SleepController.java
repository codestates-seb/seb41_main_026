package back.domain.sleep.controller;

import back.domain.sleep.dto.SleepPatchDto;
import back.domain.sleep.dto.SleepPostDto;
import back.domain.sleep.dto.SleepResponseDto;
import back.domain.sleep.entity.Sleep;
import back.domain.sleep.mapper.SleepMapper;
import back.domain.sleep.service.SleepService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/sleep")
public class SleepController {

        private final SleepMapper sleepMapper;
        private final SleepService sleepService;

        @PostMapping
        public ResponseEntity post(@RequestBody SleepPostDto sleepPostDto){
            Sleep sleep = sleepMapper.SleepPostDtoToEntity(sleepPostDto);
            Sleep saved = sleepService.save(sleep,sleepPostDto.getCourseId());
            SleepResponseDto sleepResponseDto = sleepMapper.SleepEntityToResponseDto(saved);

            return new ResponseEntity<>(
                    sleepResponseDto, HttpStatus.CREATED);
        }

        @GetMapping("/{sleepId}")
        public ResponseEntity get(@PathVariable Long sleepId){
            Sleep sleep = sleepService.get(sleepId);
            SleepResponseDto sleepResponseDto = sleepMapper.SleepEntityToResponseDto(sleep);

            return new ResponseEntity<>(
                    sleepResponseDto, HttpStatus.OK);
        }

        @GetMapping
        public ResponseEntity gets(){
            List<Sleep> sleeps = sleepService.gets();
            List<SleepResponseDto> sleepResponseDtos = sleepMapper.SleepEntityToResponseDtos(sleeps);

            return new ResponseEntity<>(
                    sleepResponseDtos, HttpStatus.OK);
        }

        @PatchMapping("/{sleepId}")
        public ResponseEntity patch(@RequestBody SleepPatchDto sleepPatchDto,
                                    @PathVariable Long sleepId){
            Sleep sleep = sleepMapper.SleepPatchDtoToEntity(sleepPatchDto);
            Sleep patched = sleepService.patch(sleep,sleepId);
            SleepResponseDto sleepResponseDto = sleepMapper.SleepEntityToResponseDto(patched);
            return new ResponseEntity<>(
                    sleepResponseDto, HttpStatus.OK);

        }

        @DeleteMapping("/{sleepId}")
        public ResponseEntity delete(@PathVariable Long sleepId){
            sleepService.delete(sleepId);
            return ResponseEntity.noContent().build();
        }
    }
