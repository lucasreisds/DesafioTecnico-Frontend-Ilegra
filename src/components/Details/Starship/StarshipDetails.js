import React, { useContext } from "react";
import { InfoContext } from "../../../contexts/InfoContext";
import GoBackButton from "../../Buttons/GoBack";
import GoHomeButton from "../../Buttons/GoHome";
import Content from "../../Content/Content";
import Loading from "../../Loading/Loading";
import ThereIsNoImage from "../../ThereNoImage/ThereNoImage";
import { DetailsContent, Image, Info } from "./StarshipDetailsStyle";

const StarshipDetails = () => {
  const { starshipInfo } = useContext(InfoContext);
  return (
    <Content>
      <GoHomeButton />
      <GoBackButton route="starships" />
      {starshipInfo.length ? (
        starshipInfo !== undefined || starshipInfo.length < 1 ? (
          starshipInfo.map((starship) => {
            return (
              <DetailsContent>
                <Image>
                  <ThereIsNoImage />
                </Image>
                <Info>
                  <h3>{starship.name}</h3>
                  <p>Model: {starship.model}</p>
                  <p>Manufacturer: {starship.manufacturer}</p>
                  <p>Class {starship.starship_class} credits</p>
                  <p>Cost {starship.cost_in_credits} credits</p>
                  <p>Speed: {starship.max_atmosphering_speed} km/h</p>
                  <p>Hyperdrive Rating: {starship.hyperdrive_rating}cm</p>
                  <p>MGLT: {starship.MGLT}</p>
                  <p>Cargo capacity: {starship.cargo_capacity} metric tons</p>
                  <p>Passengers: {starship.passengers}</p>
                </Info>
              </DetailsContent>
            );
          })
        ) : (
          <p> You must choose a starship before</p>
        )
      ) : (
        <Loading />
      )}
    </Content>
  );
};

export default StarshipDetails;
