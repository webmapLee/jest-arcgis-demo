interface CustomMatchers<R = unknown> {
    toBeWithinRange(floor: number, ceiling: number): R;
    toBeDivisibleByExternalValue():Promise<R>
}

declare global {
    namespace jest {
      interface Expect extends CustomMatchers {}
      interface Matchers<R> extends CustomMatchers<R> {}
      interface InverseAsymmetricMatchers extends CustomMatchers {}
    }
  }


  // 如果不加export {}，会报「全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中」错误。
  // 增加export{}其实也就是为了让这个声明文件变成模块声明文件，而不是一个全局声明文件。
  export {}