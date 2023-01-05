package mainproject.domain.user.controller;


import lombok.RequiredArgsConstructor;
import mainproject.domain.user.dto.UserPatchDto;
import mainproject.domain.user.dto.UserPostDto;
import mainproject.domain.utils.testStub;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @PostMapping
    public ResponseEntity userPost(@RequestBody UserPostDto userPostDto){


        return new ResponseEntity<>(
                testStub.createUserResponseDto(), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity userGet(@PathVariable Long userId){

        return new ResponseEntity<>(
                testStub.createUserResponseDto(),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity userGets(){

        return new ResponseEntity<>(
               testStub.createUserResponseDto(),HttpStatus.OK);
    }



    @PatchMapping("/{userId}")
    public ResponseEntity userPatch(@PathVariable Long userId,
                                    @RequestBody UserPatchDto userPatchDto){

        return new ResponseEntity<>(
                testStub.createUserResponseDto(),HttpStatus.CREATED);
    }


    @DeleteMapping("/{userId}")
    public ResponseEntity userDelete(@PathVariable Long userId){

        return ResponseEntity.noContent().build();
    }

}
