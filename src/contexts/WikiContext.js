import React, { createContext, useState } from "react";
import getFilms from "../services/Films/getFilms";
import getCharacters from "../services/Characters/getCharacters";
import getPlanets from "../services/Planets/getPlanets";
import getSpecies from "../services/Species/getSpecies";
import getStarships from "../services/Starships/getStarships";
import getVehicles from "../services/Vehicles/getVehicles";

export const WikiContext = createContext();
const WikiContextProvider = (props) => {
  const [filmList, setFilmList] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [specieList, setSpecieList] = useState([]);
  const [starshipList, setStarshipList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);

  const getFilmList = async () => {
    const films = await getFilms();
    setFilmList(films);
  };
  const getCharacterList = async () => {
    const characters = await getCharacters(8);
    setCharacterList(characters);
  };
  const getPlanetList = async () => {
    const planets = await getPlanets(6);
    setPlanetList(planets);
  };
  const getSpecieList = async () => {
    const species = await getSpecies(4);
    setSpecieList(species);
  };
  const getStarshipList = async () => {
    const starships = await getStarships(4);
    setStarshipList(starships);
  };
  const getVehicleList = async () => {
    const vehicles = await getVehicles(4);
    setVehicleList(vehicles);
  };

  return (
    <WikiContext.Provider
      value={{
        filmList,
        characterList,
        planetList,
        specieList,
        starshipList,
        vehicleList,
        getFilmList,
        getCharacterList,
        getPlanetList,
        getSpecieList,
        getStarshipList,
        getVehicleList,
      }}
    >
      {props.children}
    </WikiContext.Provider>
  );
};

export default WikiContextProvider;
