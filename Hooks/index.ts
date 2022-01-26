type AssertIsAnimal<T> = T extends 'dog' | 'pony' ? T : 'Not a pony';
const barn = <T>(animal: AssertIsAnimal<T>) => { }

barn('Not a pony');
barn("dog");

export {};