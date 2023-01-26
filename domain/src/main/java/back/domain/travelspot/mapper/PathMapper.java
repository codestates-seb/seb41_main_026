package back.domain.travelspot.mapper;

import back.domain.travelspot.dto.PathPostDto;
import back.domain.travelspot.entity.Path;
import org.mapstruct.Mapper;
import back.domain.course.entity.Course;

@Mapper(componentModel = "spring")
public interface PathMapper {

    default Path pathDtoToEntity(PathPostDto route, Course course) {
        Path path = new Path();
        path.addCourse(course);
        path.setRoute(route);
        return path;
    }

}
