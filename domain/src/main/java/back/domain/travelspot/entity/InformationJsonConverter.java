package back.domain.travelspot.entity;


import back.domain.travelspot.dto.PathPostDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;

import javax.persistence.AttributeConverter;

@RequiredArgsConstructor
public class InformationJsonConverter implements AttributeConverter<PathPostDto,String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(PathPostDto route) {
        //PathPostDto 객체 -> Json 문자열로 변환
        try {
            return objectMapper.writeValueAsString(route);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public PathPostDto convertToEntityAttribute(String jsonString) {
        //Json 문자열 PathPostDto 객체로 변환
        try {
            return objectMapper.readValue(jsonString, PathPostDto.class);
        } catch (Exception e) {
            return null;
        }
    }

}
