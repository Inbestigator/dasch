type AsyncableFunctionable<T, P extends unknown[] = []> = T | ((...p: P) => T | Promise<T>);

export interface StringInput {
  type: "String";
  style: "Small" | "Large";
  defaultValue: AsyncableFunctionable<string>;
  onChange: AsyncableFunctionable<string, [value: string]>;
}

export type Component = StringInput;
