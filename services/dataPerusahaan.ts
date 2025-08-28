import callApi from "@/config/api";
import { DataPerusahaanTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getDataPerusahaan(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/data-perusahaan/${id}`;
  return callApi({url, method: 'GET'});
}

export async function createDataPerusahaan(data: DataPerusahaanTypes) {
  const url = `${ROOT_API}/${API_VERSION}/data-perusahaan`;
  return callApi({url, method: 'POST', data});
}