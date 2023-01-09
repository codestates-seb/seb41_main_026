package back.domain.user.controller;


import back.domain.user.dto.UserPatchDto;
import back.domain.user.dto.UserPostDto;
import back.domain.user.dto.UserResponseDto;
import back.domain.user.entity.User;
import back.domain.user.mapper.UserMapper;
import back.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:8080/", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserMapper userMapper;
    private final UserService userService;

    @PostMapping
    public ResponseEntity userPost(@RequestBody UserPostDto userPostDto){
        User user = userMapper.UserPostDtoToEntity(userPostDto);
        User save = userService.post(user,userPostDto);
        UserResponseDto userResponseDto = userMapper.UserEntityToResponseDto(save);
        return new ResponseEntity<>(
                userResponseDto, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity userGet(@PathVariable Long userId){
        User user = userService.get(userId);
        UserResponseDto userResponseDto = userMapper.UserEntityToResponseDto(user);

        return new ResponseEntity<>(
                userResponseDto,HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity userGets(){
//
//        return new ResponseEntity<>(
//               testStub.createUserResponseDto(),HttpStatus.OK);
//    }


    @PatchMapping("/{userId}")
    public ResponseEntity userPatch(@PathVariable Long userId,
                                    @RequestBody UserPatchDto userPatchDto){

        User user = userMapper.UserPatchDtoToEntity(userPatchDto);
        User patched = userService.patch(user,userId);
        UserResponseDto userResponseDto = userMapper.UserEntityToResponseDto(patched);

        return new ResponseEntity<>(
                userResponseDto,HttpStatus.CREATED);
    }


    @DeleteMapping("/{userId}")
    public ResponseEntity userDelete(@PathVariable Long userId){

        userService.delete(userId);

        return ResponseEntity.noContent().build();
    }

}
