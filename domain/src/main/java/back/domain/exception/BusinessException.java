package back.domain.exception;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException {

    public ErrorCode errorCode;

    public BusinessException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
