declare module 'riteway' {
  import tape from 'tape';

  export type describe = {
    (label: string, TestFunction: TestFunction): void
    only: tape.only
    skip: tape.skip
  }

  export const describe: describe;

  export default describe;

  export function Try<U extends any[], V>(fn: (...args: U) => V, ...args: U): any | Promise<any>

  export function createStream(opts: CreateStreamOptions): ReadableStream

  type assert = <T>(assertion: Assertion<T>) => void

  type TestFunction = (assert: assert, end?: Function) => Promise<void>

  interface Assertion<T> {
    readonly given: any
    readonly should: string
    readonly actual: T
    readonly expected: T
  }

  interface CreateStreamOptions {
    readonly objectMode: boolean
  }
}
