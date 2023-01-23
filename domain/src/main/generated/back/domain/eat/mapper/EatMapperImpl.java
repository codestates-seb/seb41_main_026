package back.domain.eat.mapper;

import back.domain.eat.dto.EatPatchDto;
import back.domain.eat.dto.EatPostDto;
import back.domain.eat.dto.EatResponseDto;
import back.domain.eat.entity.Eat;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-23T22:43:28+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class EatMapperImpl implements EatMapper {

    @Override
    public Eat EatPostDtoToEntity(EatPostDto eatPostDto) {
        if ( eatPostDto == null ) {
            return null;
        }

        Eat eat = new Eat();

        eat.setName( eatPostDto.getName() );
        eat.setLat( eatPostDto.getLat() );
        eat.setLng( eatPostDto.getLng() );

        return eat;
    }

    @Override
    public EatResponseDto EatEntityToResponseDto(Eat saved) {
        if ( saved == null ) {
            return null;
        }

        EatResponseDto eatResponseDto = new EatResponseDto();

        eatResponseDto.setEatId( saved.getEatId() );
        eatResponseDto.setName( saved.getName() );
        eatResponseDto.setLat( saved.getLat() );
        eatResponseDto.setLng( saved.getLng() );

        return eatResponseDto;
    }

    @Override
    public Eat EatPatchDtoToEntity(EatPatchDto eatPatchDto) {
        if ( eatPatchDto == null ) {
            return null;
        }

        Eat eat = new Eat();

        eat.setName( eatPatchDto.getName() );
        eat.setLat( eatPatchDto.getLat() );
        eat.setLng( eatPatchDto.getLng() );

        return eat;
    }

    @Override
    public List<EatResponseDto> eatResponse(List<Eat> eats) {
        if ( eats == null ) {
            return null;
        }

        List<EatResponseDto> list = new ArrayList<EatResponseDto>( eats.size() );
        for ( Eat eat : eats ) {
            list.add( EatEntityToResponseDto( eat ) );
        }

        return list;
    }
}
