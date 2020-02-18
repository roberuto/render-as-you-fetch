export type Resource<T> = {
  read: () => T;
};

export type WrappedResource = {
  heroId: number;
  superhero: Resource<Superhero>;
  superpowers: Resource<Superpower[]>;
};

export type FetchSuperheroesData = {
  ({
    superheroesDelay,
    superpowersDelay
  }: {
    superheroesDelay: number;
    superpowersDelay: number;
  }): (heroId: number) => WrappedResource;
};

export type Superpower = string;
export type Superhero = {
  name: string;
  image: string;
};
