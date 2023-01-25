package back.domain.travelspot.mapper;

import back.domain.travelspot.dto.PathPostDto;
import back.domain.travelspot.entity.Path;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-25T21:20:45+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class PathMapperImpl implements PathMapper {

    @Override
    public Path pathDtoToEntity(PathPostDto route) {
        if ( route == null ) {
            return null;
        }

        Path path = new Path();

        path.setRoute( route );

        return path;
    }
}
