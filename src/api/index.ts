import axios, { AxiosError, AxiosRequestConfig } from "axios";

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
}: RequestParams & AxiosRequestConfig): Promise<T> {
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
    .catch((err) => {
      if (err instanceof AxiosError) {
        console.log(err.response);
        return err.response?.data;
      }
    });
}
