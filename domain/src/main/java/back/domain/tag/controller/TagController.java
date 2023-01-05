package back.domain.tag.controller;


import back.domain.utils.testStub;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tag")
@RequiredArgsConstructor
public class TagController {
    /* Tag 단건 조회 */
    @GetMapping("/{tagId}")
    public ResponseEntity tagGet(@PathVariable Long tagId){

        return new ResponseEntity(
               testStub.createTagResponseDto(), HttpStatus.OK);
    }
    /* Tag 전체 조회 */
    @GetMapping
    public ResponseEntity tagGets(){

        return new ResponseEntity(
            testStub.createTagResponseDtos(), HttpStatus.OK);
    }
}
