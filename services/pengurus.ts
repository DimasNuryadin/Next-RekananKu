import callApi from "@/config/api";
import { PengurusTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getPengurus(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/pengurus/${id}`;
  return callApi({url, method: 'GET'});
}

export async function createPengurus(data: PengurusTypes) {
  const url = `${ROOT_API}/${API_VERSION}/pengurus`;
  return callApi({url, method: 'POST', data});
}

export async function deletePengurus(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/pengurus/${id}`;
  return callApi({url, method: 'DELETE'});
}
