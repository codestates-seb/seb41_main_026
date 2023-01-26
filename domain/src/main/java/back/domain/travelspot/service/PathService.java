package back.domain.travelspot.service;

import back.domain.exception.BusinessException;
import back.domain.exception.ErrorCode;
import back.domain.travelspot.entity.Path;
import back.domain.travelspot.repository.PathRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PathService {

    private final PathRepository pathRepository;

    public Path save(Path path) {
        return pathRepository.save(path);
    }

    public Path get(Long pathId) {
        return verifiedPath(pathId);
    }


    public Path verifiedPath(Long pathId){
        Optional<Path> optionalPath = pathRepository.findById(pathId);
        return optionalPath.orElseThrow(
                ()->new BusinessException(ErrorCode.NOT_FOUND));
    }

    public List<Path> gets() {
        return pathRepository.findAll();
    }

    public void delete(Long pathId) {
        Path path = verifiedPath(pathId);
        pathRepository.delete(path);
    }
}
