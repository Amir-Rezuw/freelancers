export interface Success<T> {
  statusCode: number;
  data: T;
}
export interface IError {
  message: string;
  statusCode: number;
}
