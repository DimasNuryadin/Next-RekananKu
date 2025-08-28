import callApi from "@/config/api";
import { TenagaAhliTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getTenagaAhli(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/tenaga-ahli/${id}`;
  return callApi({url, method: 'GET'});
}

export async function createTenagaAhli(data: TenagaAhliTypes) {
  const url = `${ROOT_API}/${API_VERSION}/tenaga-ahli`;
  return callApi({url, method: 'POST', data});
}

export async function deleteTenagaAhli(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/tenaga-ahli/${id}`;
  return callApi({url, method: 'DELETE'});
}
