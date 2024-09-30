import type { ResponseType } from "@/typings/index";

// 请求基地址
const baseURL = import.meta.env.VITE_APP_BASE_API;

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    // 2. 请求超时
    options.timeout = 10000;
    // 3. 添加小程序端请求头标识
    options.header = {
      "source-client": "miniapp",
      ...options.header
    };
  }
};

// 拦截 request 请求
uni.addInterceptor("request", httpInterceptor);
// 拦截 uploadFile 文件上传
uni.addInterceptor("uploadFile", httpInterceptor);

const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<ResponseType<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        const { statusCode } = res;
        if (statusCode === 200) return resolve(res.data as ResponseType<T>);
        // 此处解决方案为，在每次打开小程序时主动去登录一次，后端处理过期时间长一些，保证用户在使用期间不会过期，提升用户体验，无需判断401情况
        // if (statusCode === 401) {
        //   const { setDefaultGlobalState } = useGlobalStore()
        //   setDefaultGlobalState()
        //   return reject(res)
        // }
        uni.showToast({
          icon: "none",
          title: (res.data as ResponseType<T>).msg || "请求错误"
        });
        reject(res);
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误，请检查网络后重试"
        });
        reject(err);
      }
    });
  });
};

export default http;
