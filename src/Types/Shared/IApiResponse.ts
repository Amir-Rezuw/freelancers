interface IApiResponse<T> {
  statusCode: number;
  data: T;
}
export default IApiResponse;
