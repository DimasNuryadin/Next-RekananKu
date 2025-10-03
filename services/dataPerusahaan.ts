import callApi from "@/config/api";
import { DataPerusahaanTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getDataPerusahaan() {
  const url = `${ROOT_API}/${API_VERSION}/data-perusahaan`;
  return callApi({url, method: 'GET', token: true});
}

export async function editDataPerusahaan(data: DataPerusahaanTypes) {
  const url = `${ROOT_API}/${API_VERSION}/data-perusahaan`;
  return callApi({url, method: 'PUT', data,  token: true});
}