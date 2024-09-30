import http from '@/utils/https'

// 初次的请求
export const getUserInfo = (data: any) => {
  return http({
    url: '', //请求地址
    method: 'GET',
    data,
  })
}
