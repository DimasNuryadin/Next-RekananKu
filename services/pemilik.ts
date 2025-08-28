import callApi from "@/config/api";
import { PemilikTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getPemilik(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/pemilik/${id}`;
  return callApi({url, method: 'GET'});
}

export async function createPemilik(data: PemilikTypes) {
  const url = `${ROOT_API}/${API_VERSION}/pemilik`;
  return callApi({url, method: 'POST', data});
}

export async function deletePemilik(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/pemilik/${id}`;
  return callApi({url, method: 'DELETE'});
}
