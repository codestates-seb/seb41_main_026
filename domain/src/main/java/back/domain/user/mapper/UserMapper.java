package back.domain.user.mapper;


import back.domain.user.dto.UserPostDto;
import back.domain.user.dto.UserResponseDto;
import back.domain.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User UserPostDtoToEntity(UserPostDto userPostDto);

    UserResponseDto UserEntityToResponseDto(User save);
}