import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callApi({ url, method, data, token, serverToken }: CallAPIProps) {
  let headers = {};

  if (serverToken) {      // Pemanggilan token server side,
    headers = {
      Authorization: `Bearer ${serverToken}`,
    }
  } else if (token) {     // Pemanggilan token client side
    // Ambil Cookies
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      }
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers: headers,
  }).catch(err => err.response);

  if (response.status > 300) {
    const res = {
      error: 1,
      message: response.data.message,
      data: null,
    }
    return res;
  }
  
  const res = {
    error: false,
    message: 'success',
    data: response.data.data,
  }
  return res;
}