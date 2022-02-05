export interface IApiManager<T> {
  fetchData(): Promise<T>;
}
