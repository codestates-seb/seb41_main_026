package back.domain.travelspot.controller;

import back.domain.travelspot.dto.TravelPatchDto;
import back.domain.travelspot.dto.TravelPostDto;
import back.domain.travelspot.dto.TravelResponseDto;
import back.domain.travelspot.entity.TravelSpot;
import back.domain.travelspot.mapper.TravelMapper;
import back.domain.travelspot.service.TravelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
@RestController
@RequestMapping("/travel")
@RequiredArgsConstructor
public class TravelController {

    private final TravelMapper travelMapper;
    private final TravelService travelService;

    @PostMapping
    public ResponseEntity travelPost(@RequestBody TravelPostDto travelPostDto) {
        TravelSpot travelSpot = travelMapper.travelPostDtoToTravel(travelPostDto);
        TravelSpot save = travelService.postTravel(travelSpot, travelPostDto);


        return new ResponseEntity<>(travelMapper.travelToResponseDto(save), HttpStatus.CREATED);
    }

    @GetMapping("/{travelSpot-id}")
    public ResponseEntity travelGet(@PathVariable("travelSpot-id") @Positive long id) {
        TravelSpot travelSpot = travelService.findTravel(id);
        return new ResponseEntity<>(travelMapper.travelToResponseDto(travelSpot), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity travelGets() {
        List<TravelSpot> travelSpots = travelService.findTravels();
        List<TravelResponseDto> response = travelMapper.travelsToResponseDtos(travelSpots);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("{travelSpot-id}")
    public ResponseEntity travelPatch(@PathVariable("travelSpot-id") @Positive long id,
                                      @RequestBody TravelPatchDto travelPatchDto) {
        TravelSpot travelSpot = travelMapper.travelPatchDtoToTravel(travelPatchDto);
        TravelSpot patched = travelService.patch(travelSpot, id);

        return new ResponseEntity<>(travelMapper.travelToResponseDto(patched), HttpStatus.OK);
    }

    @DeleteMapping("{travelSpot-id}")
    public ResponseEntity travelDelete(@PathVariable("travelSpot-id") @Positive long id) {
        travelService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
