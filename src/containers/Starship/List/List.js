import React, { useContext, useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { WikiContext } from "../../../contexts/WikiContext";
import GoHomeButton from "../../../components/Buttons/GoHome";
import Content from "../../../components/Content/Content";
import ListContent from "../../../components/ListContent/ListContent";
import { Item, ItemImg, ItemInfo } from "./ListStyle";
import ThereIsNoImage from "../../../components/ThereNoImage/ThereNoImage";
import ButtonDetails from "../../../components/Buttons/ButtonDetails";
import { Link } from "react-router-dom";
import { InfoContext } from "../../../contexts/InfoContext";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import Loading from "../../../components/Loading/Loading";
const StarshipList = () => {
  const { starshipList, getStarshipList } = useContext(WikiContext);
  const { getStarshipDetails } = useContext(InfoContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getStarshipList();
  }, []);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(starshipList.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Content>
      <GoHomeButton />
      <Pagination pageCount={pageCount} changePage={changePage} />
      <ListContent>
        {starshipList.length ? (
          starshipList !== undefined ? (
            starshipList
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((starship) => {
                const starshipName = removeWhitespaces(starship.name);
                const starshipPage = starship.url.match(/\d+/g);
                return (
                  <Item>
                    <ItemImg>
                      <ThereIsNoImage />
                    </ItemImg>
                    <ItemInfo>
                      <h3>{starship.name}</h3>
                      <ButtonDetails>
                        <Link
                          to={`/starships/${starshipName}`}
                          onClick={() => getStarshipDetails(starshipPage)}
                        >
                          Details
                        </Link>
                      </ButtonDetails>
                    </ItemInfo>
                  </Item>
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

export default StarshipList;
