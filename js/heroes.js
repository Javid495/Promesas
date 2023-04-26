import { heroes } from "../data/bd.js";

export const getHeroesById = (idhero) => heroes.find( (heroes) => heroes.id === idhero);
export const getHeroesByOwner = (owner) => heroes.filter( (heroes) => heroes.owner === owner);

