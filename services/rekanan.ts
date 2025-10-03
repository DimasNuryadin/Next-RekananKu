import callApi from "@/config/api";
import { StatusRekananProps } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
// const API_VERSION = 'api/v1';

export async function getRekanan(id: string) {
  const url = `${ROOT_API}/calon-rekanan/${id}`;
  return callApi({url, method: 'GET'});
}

export async function createRekanan(data: StatusRekananProps) {
  const url = `${ROOT_API}/calon-rekanan/create`;
  return callApi({url, method: 'POST', data});
}
