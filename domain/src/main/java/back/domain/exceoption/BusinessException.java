package back.domain.exceoption;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException{

    public ErrorCode errorCode;

    public BusinessException(ErrorCode errorCode){
        super(errorCode.getMessage());
        this.errorCode=errorCode;
    }
}
