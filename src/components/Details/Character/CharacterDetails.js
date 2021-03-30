import React, { useContext, useEffect } from "react";
import { InfoContext } from "../../../contexts/InfoContext";
import { WikiContext } from "../../../contexts/WikiContext";
import GoBackButton from "../../Buttons/GoBack";
import GoHomeButton from "../../Buttons/GoHome";
import Content from "../../Content/Content";
import Loading from "../../Loading/Loading";
import Details from "../Details";

const CharacterDetails = () => {
  const { characterInfo } = useContext(InfoContext);
  const { planetList, getPlanetList } = useContext(WikiContext);
  useEffect(() => {
    getPlanetList();
  }, []);
  return (
    <Content>
      <GoHomeButton />
      <GoBackButton route="characters" />
      {characterInfo.length ? (
        characterInfo !== undefined || characterInfo.length < 1 ? (
          characterInfo.map((character) => {
            return (
              <Details
                key={character.url}
                name={character.name}
                category="characters"
                type="webp"
              >
                <h3>{character.name}</h3>
                <p>Birth Year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>
                  Homeworld:
                  {planetList
                    .filter((planet) => planet.url === character.homeworld)
                    .map((planet) => planet.name)}
                </p>
              </Details>
            );
          })
        ) : (
          <div>
            <p> You must choose a character before</p>
          </div>
        )
      ) : (
        <Loading />
      )}
    </Content>
  );
};

export default CharacterDetails;
