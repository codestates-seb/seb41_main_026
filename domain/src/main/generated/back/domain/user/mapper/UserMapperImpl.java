package back.domain.user.mapper;

import back.domain.user.dto.UserPatchDto;
import back.domain.user.dto.UserPostDto;
import back.domain.user.dto.UserResponseDto;
import back.domain.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-09T11:34:10+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User UserPostDtoToEntity(UserPostDto userPostDto) {
        if ( userPostDto == null ) {
            return null;
        }

        User user = new User();

        user.setName( userPostDto.getName() );
        user.setEmail( userPostDto.getEmail() );
        user.setPassword( userPostDto.getPassword() );

        return user;
    }

    @Override
    public User UserPatchDtoToEntity(UserPatchDto userPatchDto) {
        if ( userPatchDto == null ) {
            return null;
        }

        User user = new User();

        user.setName( userPatchDto.getName() );
        user.setPassword( userPatchDto.getPassword() );
        user.setUserImage( userPatchDto.getUserImage() );

        return user;
    }

    @Override
    public UserResponseDto UserEntityToResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setUserId( user.getUserId() );
        userResponseDto.setName( user.getName() );
        userResponseDto.setEmail( user.getEmail() );
        userResponseDto.setPassword( user.getPassword() );
        userResponseDto.setUserImage( user.getUserImage() );
        userResponseDto.setUserStatus( user.getUserStatus() );
        userResponseDto.setCreatedAt( user.getCreatedAt() );
        userResponseDto.setModifiedAt( user.getModifiedAt() );

        return userResponseDto;
    }
}
