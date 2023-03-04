import Cookies from 'js-cookie';

export const setToken = (token) => {
  Cookies.set('token', token, { secure: false });
};
