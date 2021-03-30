import React, { useContext, useEffect } from "react";
import { WikiContext } from "../../../contexts/WikiContext";
import ListContent from "../../../components/ListContent/ListContent";
import Content from "../../../components/Content/Content";
import ItemContent from "../../../components/ItemContent/ItemContant";
import GoHomeButton from "../../../components/Buttons/GoHome";
import { Header } from "./ListStyle";
import { Link } from "react-router-dom";
import { InfoContext } from "../../../contexts/InfoContext";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import ButtonDetails from "../../../components/Buttons/ButtonDetails";
import Loading from "../../../components/Loading/Loading";

const FilmList = () => {
  const { filmList, getFilmList } = useContext(WikiContext);
  const { getFilmDetails } = useContext(InfoContext);
  useEffect(() => {
    getFilmList();
  }, []);

  return (
    <Content>
      <Header>
        <GoHomeButton />
      </Header>
      <ListContent>
        {filmList.length ? (
          filmList !== undefined ? (
            filmList.map((film) => {
              const url = film.url;
              const filmPage = url.match(/\d+/g);
              const filmTitle = removeWhitespaces(film.title);
              return (
                <ItemContent
                  key={film.episode_id}
                  name={film.title}
                  category="films"
                  type="png"
                >
                  <h3>{film.title}</h3>
                  <p>{film.release_date}</p>
                  <ButtonDetails>
                    <Link
                      to={`/films/${filmTitle}`}
                      onClick={() => getFilmDetails(filmPage)}
                    >
                      Details
                    </Link>
                  </ButtonDetails>
                </ItemContent>
              );
            })
          ) : (
            <h1>An error has occurred</h1>
          )
        ) : (
          <Loading />
        )}
      </ListContent>
    </Content>
  );
};
export default FilmList;
