import callApi from "@/config/api";
import { IzinUsahaTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getIzinUsaha() {
  const url = `${ROOT_API}/${API_VERSION}/izin-usaha`;
  return callApi({url, method: 'GET', token: true});
}

export async function createIzinUsaha(data: IzinUsahaTypes) {
  const url = `${ROOT_API}/${API_VERSION}/izin-usaha`;
  return callApi({url, method: 'POST', data, token: true});
}

export async function deleteIzinUsaha(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/izin-usaha/${id}`;
  return callApi({url, method: 'DELETE', token: true});
}
