import React, { createContext, useState } from "react";
import getCharacterInfo from "../services/Characters/getCharacterInfo";
import getFilmInfo from "../services/Films/getFilmInfo";
import getPlanetInfo from "../services/Planets/getPlanetInfo";
import getSpecieInfo from "../services/Species/getSpecieInfo";
import getStarshipInfo from "../services/Starships/getStarshipInfo";
import getVehicleInfo from "../services/Vehicles/getVehicleInfo";

export const InfoContext = createContext();
const InfoContextProvider = (props) => {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [filmInfo, setFilmInfo] = useState([]);
  const [planetInfo, setPlanetInfo] = useState([]);
  const [specieInfo, setSpecieInfo] = useState([]);
  const [starshipInfo, setStarshipInfo] = useState([]);
  const [vehicleInfo, setVehicleInfo] = useState([]);

  const getCharacterDetails = async (id) => {
    const character = await getCharacterInfo(id);
    setCharacterInfo([character]);
  };
  const getFilmDetails = async (id) => {
    const film = await getFilmInfo(id);
    setFilmInfo([film]);
  };
  const getPlanetDetails = async (id) => {
    const planet = await getPlanetInfo(id);
    setPlanetInfo([planet]);
  };
  const getSpecieDetails = async (id) => {
    const specie = await getSpecieInfo(id);
    setSpecieInfo([specie]);
  };
  const getStarshipDetails = async (id) => {
    const starship = await getStarshipInfo(id);
    setStarshipInfo([starship]);
  };
  const getVehicleDetails = async (id) => {
    const vehicle = await getVehicleInfo(id);
    setVehicleInfo([vehicle]);
  };
  return (
    <InfoContext.Provider
      value={{
        characterInfo,
        filmInfo,
        planetInfo,
        specieInfo,
        starshipInfo,
        vehicleInfo,
        getCharacterDetails,
        getFilmDetails,
        getPlanetDetails,
        getSpecieDetails,
        getStarshipDetails,
        getVehicleDetails,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;
