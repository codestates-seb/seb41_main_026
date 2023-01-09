package back.domain.user.mapper;


import back.domain.user.dto.UserPatchDto;
import back.domain.user.dto.UserPostDto;
import back.domain.user.dto.UserResponseDto;
import back.domain.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User UserPostDtoToEntity(UserPostDto userPostDto);

    User UserPatchDtoToEntity(UserPatchDto userPatchDto);

    UserResponseDto UserEntityToResponseDto(User user);
}
