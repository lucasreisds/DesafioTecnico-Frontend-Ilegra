import React, { useContext, useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { WikiContext } from "../../../contexts/WikiContext";
import ItemContent from "../../../components/ItemContent/ItemContant";
import ListContent from "../../../components/ListContent/ListContent";
import Content from "../../../components/Content/Content";
import GoHomeButton from "../../../components/Buttons/GoHome";
import { InfoContext } from "../../../contexts/InfoContext";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import ButtonDetails from "../../../components/Buttons/ButtonDetails";

const CharacterList = () => {
  const { characterList, getCharacterList } = useContext(WikiContext);
  const { getCharacterDetails } = useContext(InfoContext);
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    getCharacterList();
  }, []);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(characterList.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Content>
      <GoHomeButton />
      <Pagination pageCount={pageCount} changePage={changePage} />
      <ListContent>
        {characterList.length ? (
          characterList !== undefined ? (
            characterList
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((character) => {
                const url = character.url;
                const characterPage = url.match(/\d+/g);
                const characterName = removeWhitespaces(character.name);
                return (
                  <ItemContent
                    key={character.url}
                    name={character.name}
                    category="characters"
                    type="webp"
                  >
                    <h3>{character.name}</h3>
                    <ButtonDetails>
                      <Link
                        to={`/characters/${characterName}`}
                        onClick={() => getCharacterDetails(characterPage)}
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

export default CharacterList;
