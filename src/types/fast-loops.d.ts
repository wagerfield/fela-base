declare module "fast-loops" {
  export function arrayReduce<T, U extends any[]>(
    arr: U,
    reducer: (
      accumulator: T,
      value: any,
      index: number,
      length: number,
      arr: U
    ) => T,
    accumulator: T
  ): T

  export function objectReduce<T, U extends object>(
    obj: U,
    reducer: (
      accumulator: T,
      value: any,
      key: string,
      obj: U
    ) => T,
    accumulator: T
  ): T
}
