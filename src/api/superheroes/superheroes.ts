import { FetchSuperheroesData, Resource } from "./superheroes.types";

export const fetchSuperhero = (requestDeley: number) => (id: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, requestDeley, superheros[id]);
  });
};

export const fetchSuperpowers = (requestDeley: number) => (id: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, requestDeley, superpowers[id]);
  });
};

export const fetchSuperheroesData: FetchSuperheroesData = ({
  superheroesDelay,
  superpowersDelay
}) => heroId => {
  let superheroPromise = fetchSuperhero(superheroesDelay)(heroId);
  let superpowersPromise = fetchSuperpowers(superpowersDelay)(heroId);
  return {
    heroId,
    superhero: wrapPromise(superheroPromise),
    superpowers: wrapPromise(superpowersPromise)
  };
};

export const wrapPromise = (promise: Promise<any>): Resource<any> => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

const superheros = [
  {
    name: "Spiderman",
    image: "assets/spiderman.jpg"
  },
  {
    name: "Superman",
    image: "assets/superman.jpeg"
  },
  {
    name: "Batman",
    image: "assets/batman.jpg"
  }
];

const superpowers = [
  ["Spider-Sense", "Enhanced Strength", "Fearless Against Spiders"],
  ["X-Ray Vision", "Super-Speed", "Super-Strength"],
  ["Genius-Level Intellect", "Utility Belt", "Loaded"]
];

const FIRST_ITEM = 0;
const LAST_ITEM = superheros.length - 1;

export const getNextId = (id: number): number => {
  return id === LAST_ITEM ? FIRST_ITEM : id + 1;
};
