import { FormSign } from "./data-types";
import callApi from "@/config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormSign) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callApi({url, method: 'POST', data});
}

export async function setSignIn(data: FormSign) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
  return callApi({url, method: 'POST', data});
}