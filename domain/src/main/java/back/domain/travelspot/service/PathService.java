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
        Path saved = pathRepository.save(path);
        return saved;
    }

    public Path post(Path path) {
        Path saved = pathRepository.save(path);
        return saved;
    }

    public Path get(Long pathId) {
        Path path = verifiedPath(pathId);
        return path;
    }


    public Path verifiedPath(Long pathId){
        Optional<Path> optionalPath = pathRepository.findById(pathId);
        Path path = optionalPath.orElseThrow(
                ()->new BusinessException(ErrorCode.NOT_FOUND));
        return path;
    }

    public List<Path> gets() {
        return pathRepository.findAll();
    }



    public void delete(Long pathId) {
        Path path = verifiedPath(pathId);
        pathRepository.delete(path);
    }
}
