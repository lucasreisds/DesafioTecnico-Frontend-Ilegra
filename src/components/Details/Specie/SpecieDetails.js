import React, { useContext } from "react";
import { InfoContext } from "../../../contexts/InfoContext";
import GoBackButton from "../../Buttons/GoBack";
import GoHomeButton from "../../Buttons/GoHome";
import Content from "../../Content/Content";
import Loading from "../../Loading/Loading";
import ThereIsNoImage from "../../ThereNoImage/ThereNoImage";
import { DetailsContent, Image, Info } from "./SpecieDetailsStyle";

const SpecieDetails = () => {
  const { specieInfo } = useContext(InfoContext);
  return (
    <Content>
      <GoHomeButton />
      <GoBackButton route="species" />
      {specieInfo.length ? (
        specieInfo !== undefined || specieInfo.length < 1 ? (
          specieInfo.map((specie) => {
            return (
              <DetailsContent>
                <Image>
                  <ThereIsNoImage />
                </Image>
                <Info>
                  <h3>{specie.name}</h3>
                  <p>Classification: {specie.classification}</p>
                  <p>Designation: {specie.designation}</p>
                  <p>language: {specie.language}</p>
                  <p>Average Lifespan: {specie.average_lifespan} years</p>
                  <p>Average height: {specie.height}cm</p>
                  <p>Skin Color(s): {specie.skin_colors}</p>
                  <p>Hair Color(s): {specie.hair_colors}</p>
                  <p>Eye Color(s): {specie.eye_colors}</p>
                </Info>
              </DetailsContent>
            );
          })
        ) : (
          <p> You must choose a specie before</p>
        )
      ) : (
        <Loading />
      )}
    </Content>
  );
};

export default SpecieDetails;
