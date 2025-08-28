import axios from "axios";
import { UserTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = 'api/v1';

export async function getDataPerusahaan({id}:UserTypes) {
  const URL = `data-perusahaan/${id}`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse;
}