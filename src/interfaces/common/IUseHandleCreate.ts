export default interface IUseHandleCreate<T> {
  data: T;
  createFn: (data: T) => Promise<void>;
}
