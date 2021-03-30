import React, { useContext } from "react";
import { InfoContext } from "../../../contexts/InfoContext";
import { planetsImageData } from "../../../utils/ImageData/planetsImageData";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import GoBackButton from "../../Buttons/GoBack";
import GoHomeButton from "../../Buttons/GoHome";
import CardImage from "../../CardImage/CardImage";
import Content from "../../Content/Content";
import Loading from "../../Loading/Loading";
import { DetailsContent, Image, Info } from "./PlanetDetailsStyle";

const PlanetDetails = () => {
  const { planetInfo } = useContext(InfoContext);
  return (
    <Content>
      <GoHomeButton />
      <GoBackButton route="planets" />
      {planetInfo.length ? (
        planetInfo !== undefined || planetInfo.length < 1 ? (
          planetInfo.map((planet) => {
            const planetName = removeWhitespaces(planet.name);
            return (
              <DetailsContent>
                <Image>
                  {planetsImageData.map((planetImage) => {
                    return planetImage.name === planetName ? (
                      <CardImage
                        filePath={planetImage.image}
                        alt={planet.name}
                      />
                    ) : null;
                  })}
                </Image>
                <Info>
                  <h3>{planet.name}</h3>
                  <p>Population: {planet.population}</p>
                  <p>Diameter: {planet.diameter}</p>
                  <p>Rotation Period: {planet.rotation_period} days</p>
                  <p>Orbital Period: {planet.orbital_period} days</p>
                  <p>Gravity: {planet.gravity}</p>
                  <p>Terrain: {planet.terrain}</p>
                  <p>Climate: {planet.climate}</p>
                  <p>Surface Water: {planet.surface_water}%</p>
                </Info>
              </DetailsContent>
            );
          })
        ) : (
          <p> You must choose a planet before</p>
        )
      ) : (
        <Loading />
      )}
    </Content>
  );
};

export default PlanetDetails;
