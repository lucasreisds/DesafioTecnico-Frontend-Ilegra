import React, { useContext, useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { WikiContext } from "../../../contexts/WikiContext";
import GoHomeButton from "../../../components/Buttons/GoHome";
import Content from "../../../components/Content/Content";
import ListContent from "../../../components/ListContent/ListContent";
import { Item, ItemImg, ItemInfo } from "./ListStyle";
import ThereIsNoImage from "../../../components/ThereNoImage/ThereNoImage";
import { InfoContext } from "../../../contexts/InfoContext";
import ButtonDetails from "../../../components/Buttons/ButtonDetails";
import { Link } from "react-router-dom";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import Loading from "../../../components/Loading/Loading";

const SpecieList = () => {
  const { specieList, getSpecieList } = useContext(WikiContext);
  const { getSpecieDetails } = useContext(InfoContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getSpecieList();
  }, []);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(specieList.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Content>
      <GoHomeButton />
      <Pagination pageCount={pageCount} changePage={changePage} />
      <ListContent>
        {specieList.length ? (
          specieList !== undefined ? (
            specieList
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((specie) => {
                const speciePage = specie.url.match(/\d+/g);
                const specieName = removeWhitespaces(specie.name);
                return (
                  <Item>
                    <ItemImg>
                      <ThereIsNoImage />
                    </ItemImg>
                    <ItemInfo>
                      <h3>{specie.name}</h3>
                    </ItemInfo>
                    <ButtonDetails>
                      <Link
                        to={`/species/${specieName}`}
                        onClick={() => getSpecieDetails(speciePage)}
                      >
                        Details
                      </Link>
                    </ButtonDetails>
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

export default SpecieList;
