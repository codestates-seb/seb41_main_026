package back.domain.exceoption;


import lombok.Getter;

public enum ErrorCode {

    USER_NOT_FOUND(404, "USER NOT FOUND"),
    USERID_NOT_NULL(404, "USERID NOT NULL"),
    USER_EMAIL_EXISTS(409, "USER EMAIL EXISTS"),
    USER_DISPLAY_NAME_EXISTS(409, "USER DISPLAY NAME EXISTS"),
    COURSE_NOT_FOUND(404, "COURSE NOT FOUND"),
    COMMENT_NOT_FOUND(404, "COMMENT NOT FOUND"),
    COURSELIKE_NOT_FOUND(404, "COURSELIKE NOT FOUND"),
    SLEEP_NOT_FOUND(404, "SlEEP NOT FOUND"),
    GUIDE_NOT_FOUND(404, "GUIDE NOT FOUND"),
    NOT_FOUND(404, "NOT FOUND"),

    UNAUTHORIZED_ACCESS(401, "UNAUTHORIZED ACCESS"),
    ACCESS_DENIED(403, "ACCESS DENIED"),


    INTERNAL_SERVER_ERROR(500, "INTERNAL SERVER ERROR"),
    NOT_IMPLEMENTED(501,"NOT IMPLEMENTED"),
    EXPIRED_ACCESS_TOKEN(403, "EXPIRED ACCESS TOKEN"),
    TOKEN_NOT_NULL(404, "TOKEN_NOT_NULL"),
    EXPIRED_REFRESH_TOKEN(401,"EXPIRED REFRESH TOKEN"),
    OAUTH2_ACCESS_ERROR(400, "OAUTH2 ACCESS ERROR"),
    BAD_REQUEST(400, "BAD REQUEST");



    @Getter
    private int status;

    @Getter
    private String message;

    ErrorCode(int code, String message) {
        this.status = code;
        this.message = message;
    }

}
