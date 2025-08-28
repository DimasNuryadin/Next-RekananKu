import axios from "axios";
import { FormSign } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormSign) {
  const URL = `auth/signup`;

  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch(err => err.response);
  const axiosResponse = response.data;
  return axiosResponse;
}

export async function setSignIn() {
  return null
}