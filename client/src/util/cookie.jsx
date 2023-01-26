import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = name => {
  return cookies.get(name);
};

export const removeCookie = (name, option) => {
  return cookies.remove(name, option);
};

// useEffect(() => {
//     // query를 객체 형태로 가져오는 함수
//     const getQuery = () => {
//       const url = document.location.href;
//       const qs = url.substring(url.indexOf('?') + 1).split('&');
//       // eslint-disable-next-line no-plusplus
//       for (let i = 0, result = {}; i < qs.length; i++) {
//         qs[i] = qs[i].split('=');
//         result[qs[i][0]] = decodeURIComponent(qs[i][1]);
//       }
//       // eslint-disable-next-line no-undef
//       return result;
//     };
//     const googleAccessToken = getQuery();
//     if (googleAccessToken.access_token) {
//       document.cookie = `Authorization=Bearer ${googleAccessToken.access_token};max-age=3600;`;
//       window.location.replace('/#intro');
//     }
//   }, []);
