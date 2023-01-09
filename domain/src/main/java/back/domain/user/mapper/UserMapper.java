package back.domain.user.mapper;


import back.domain.user.dto.UserPatchDto;
import back.domain.user.dto.UserPostDto;
import back.domain.user.dto.UserResponseDto;
import back.domain.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User UserPostDtoToEntity(UserPostDto userPostDto);

   default User UserPatchDtoToEntity(UserPatchDto userPatchDto) {
        User user = new User();
        user.setPassword(userPatchDto.getPassword());
        user.setName(userPatchDto.getName());
        user.setUserImage(userPatchDto.getUserImage());
        return user;
    }

    UserResponseDto UserEntityToResponseDto(User user);
}
