package back.domain.user.mapper;

import back.domain.comment.entity.Comment;
import back.domain.course.entity.CourseLike;
import back.domain.user.dto.UserPostDto;
import back.domain.user.dto.UserResponseDto;
import back.domain.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-20T11:27:12+0900",
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
    public UserResponseDto UserEntityToResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setUserId( user.getUserId() );
        userResponseDto.setName( user.getName() );
        userResponseDto.setEmail( user.getEmail() );
        userResponseDto.setPassword( user.getPassword() );
        if ( user.getLikeCount() != null ) {
            userResponseDto.setLikeCount( user.getLikeCount() );
        }
        userResponseDto.setUserImage( user.getUserImage() );
        userResponseDto.setUserStatus( user.getUserStatus() );
        userResponseDto.setCreatedAt( user.getCreatedAt() );
        userResponseDto.setModifiedAt( user.getModifiedAt() );
        List<Comment> list = user.getComments();
        if ( list != null ) {
            userResponseDto.setComments( new ArrayList<Comment>( list ) );
        }
        List<CourseLike> list1 = user.getCourseLikes();
        if ( list1 != null ) {
            userResponseDto.setCourseLikes( new ArrayList<CourseLike>( list1 ) );
        }

        return userResponseDto;
    }

    @Override
    public List<UserResponseDto> UsersEntityToResponseDto(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( users.size() );
        for ( User user : users ) {
            list.add( UserEntityToResponseDto( user ) );
        }

        return list;
    }
}
