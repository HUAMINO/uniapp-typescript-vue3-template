export interface GlobalDataType {
  userName: string
  taken: string
}

export type ResponseType<T> = {
  code: string
  msg: string
  data: T
}
