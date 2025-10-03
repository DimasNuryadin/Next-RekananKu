import callApi from "@/config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getRekanan() {
  const url = `${ROOT_API}/${API_VERSION}/status-rekanan`;
  return callApi({url, method: 'GET', token: true});
}

export async function createRekanan() {
  const url = `${ROOT_API}/${API_VERSION}/status-rekanan`;
  return callApi({url, method: 'POST', token: true});
}
