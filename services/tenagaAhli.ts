import callApi from "@/config/api";
import { TenagaAhliTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getTenagaAhli() {
  const url = `${ROOT_API}/${API_VERSION}/tenaga-ahli`;
  return callApi({url, method: 'GET', token: true});
}

export async function createTenagaAhli(data: TenagaAhliTypes) {
  const url = `${ROOT_API}/${API_VERSION}/tenaga-ahli`;
  return callApi({url, method: 'POST', data, token: true});
}

export async function deleteTenagaAhli(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/tenaga-ahli/${id}`;
  return callApi({url, method: 'DELETE', token: true});
}
