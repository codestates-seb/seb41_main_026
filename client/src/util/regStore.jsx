// 이름 검증
// eslint-disable-next-line import/prefer-default-export
export const regName = /^[a-zA-Z0-9]*$/;

// 이메일 검증
export const regEmail =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// 패드워드 검증
export const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
