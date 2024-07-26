import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestParams {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: any;
}

export function requestAPI<T>({
  url,
  method,
  params,
  ...config
}: RequestParams & AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios
    .request<T>({
      method,
      url,
      params,
      ...config,
    })
    .then((res) => {
      return res;
    })
    .catch((err: AxiosError) => {
      console.error(err);
      return err.response?.data as AxiosResponse;
    });
}
