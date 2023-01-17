import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function GoogleLoginButton() {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={res => console.log(res, '성공')}
        onFailure={res => console.log(res, '실패')}
        render={renderProps => (
          <button className="googleLoginBox" onClick={renderProps.onClick}>
            1
          </button>
        )}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
