export type ReadOnly<T> = { readonly [P in keyof T]: T };

export type Record<K extends string | number | symbol, T> = { [P in K]: T };

interface Heroes {
  superPower: string;
  name: string;
}

type SuperHeroes = "batMan" | "spiderMan";

export const heroes: Record<SuperHeroes, Heroes> = {
  batMan: { superPower: "money", name: "Ben Affleck" },
  spiderMan: { superPower: "speed", name: "Tom Holland" },
};

export type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

type MyHero = MyPick<Heroes, "name">;

export const spiderMan: MyHero = { name: "Tom Holland" };

type Exclude<T, U> = T extends U ? never : T;

export type Omit<T, K extends "string" | "number" | "symbol"> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export type NonNullable<T> = T extends null | undefined ? never : T;

export type MyReadonly2<T, K extends keyof T> = {
  readonly [P in keyof T]: T[P];
} & { [P in Exclude<keyof T, K>]: T[P] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
