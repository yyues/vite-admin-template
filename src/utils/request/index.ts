// 导出 axios 请求
import axios, {
  AxiosProxyConfig,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

import router from "/@/router/router";

const request = axios.create({
  baseURL: "",
  timeout: 1000 * 3,
  headers: {},
});
const token = false;

interface CustomAxiosConfig extends AxiosRequestConfig {
  TokenVerify?: boolean;
}
// 请求拦截器
request.interceptors.request.use(async (config: CustomAxiosConfig) => {
  const headers = config.headers as AxiosRequestHeaders;
  if (config.TokenVerify) {
    // 开启token 校验
    router.push("/");
    return;
  }
  // token校验
  if (token) headers["token"] = token;

  return config;
});

// 响应 请求拦截器
request.interceptors.response.use(async (response: AxiosResponse) => {
  // 有返回的响应结果
  // console.log(response)
  // 业务处理 start

  // 业务处理 start
  return response.data;
});

// 错误统一处理

export const post = <T = any>(
  url: string,
  params?: any,
  config?: { [x: string]: any }
): Promise<T> => request.post(url, { params, ...config });

export const get = <T = any>(
  url: string,
  params?: any,
  config?: { [x: string]: any }
): Promise<T> => request.get(url, { params, ...config });
