package back.domain.eat.controller;

import back.domain.eat.dto.EatPatchDto;
import back.domain.eat.dto.EatPostDto;
import back.domain.eat.dto.EatResponseDto;
import back.domain.eat.entity.Eat;
import back.domain.eat.mapper.EatMapper;
import back.domain.eat.service.EatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/eat")
public class EatController {

    private final EatMapper eatMapper;
    private final EatService eatService;

    @PostMapping
    public ResponseEntity post(@RequestBody EatPostDto eatPostDto){
        Eat eat = eatMapper.EatPostDtoToEntity(eatPostDto);
        Eat saved = eatService.save(eat,eatPostDto.getCourseId());
        EatResponseDto eatResponseDto = eatMapper.EatEntityToResponseDto(saved);

        return new ResponseEntity<>(eatResponseDto, HttpStatus.CREATED);

    }

    @GetMapping("/{eatId}")
    public ResponseEntity get(@PathVariable Long eatId){
        Eat eat = eatService.get(eatId);
        EatResponseDto eatResponseDto = eatMapper.EatEntityToResponseDto(eat);

        return new ResponseEntity<>(eatResponseDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity gets() {
        List<Eat> eats = eatService.gets();
        List<EatResponseDto> eatResponseDtos = eatMapper.eatResponse(eats);

        return new ResponseEntity<>(eatResponseDtos, HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity patch(@RequestBody EatPatchDto eatPatchDto,
                                @PathVariable Long eatId){
        Eat eat = eatMapper.EatPatchDtoToEntity(eatPatchDto);
        Eat patched = eatService.patch(eat,eatId);
        EatResponseDto eatResponseDto = eatMapper.EatEntityToResponseDto(patched);

        return new ResponseEntity<>(eatResponseDto, HttpStatus.OK);

    }

    @DeleteMapping("/{eatId}")
    public ResponseEntity delete(@PathVariable Long eatId){
        eatService.delete(eatId);

        return ResponseEntity.noContent().build();
    }
}
