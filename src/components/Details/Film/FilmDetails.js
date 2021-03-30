import React, { useContext } from "react";
import { InfoContext } from "../../../contexts/InfoContext";
import GoBackButton from "../../Buttons/GoBack";
import GoHomeButton from "../../Buttons/GoHome";
import Content from "../../Content/Content";
import Loading from "../../Loading/Loading";
import Details from "../Details";

const FilmDetails = () => {
  const { filmInfo } = useContext(InfoContext);
  return (
    <Content>
      <GoHomeButton />
      <GoBackButton route="films" />
      {filmInfo.length ? (
        filmInfo !== undefined || filmInfo.length < 1 ? (
          filmInfo.map((film) => {
            return (
              <Details
                key={film.episode_id}
                intro={film.opening_crawl}
                name={film.title}
                category="films"
                type="png"
              >
                <h3>{film.title}</h3>
                <p>Release Date: {film.release_date}</p>
                <p>Director: {film.director}</p>
                <p>Producer: {film.producer}</p>
              </Details>
            );
          })
        ) : (
          <p> You must choose a film before</p>
        )
      ) : (
        <Loading />
      )}
    </Content>
  );
};

export default FilmDetails;
