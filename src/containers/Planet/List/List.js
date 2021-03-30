import React, { useContext, useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { WikiContext } from "../../../contexts/WikiContext";
import GoHomeButton from "../../../components/Buttons/GoHome";
import Content from "../../../components/Content/Content";
import ListContent from "../../../components/ListContent/ListContent";
import { planetsImageData } from "../../../utils/ImageData/planetsImageData";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import { Item, ItemImg, ItemInfo } from "./ListStyle";
import CardImage from "../../../components/CardImage/CardImage";
import Loading from "../../../components/Loading/Loading";
import { InfoContext } from "../../../contexts/InfoContext";
import ButtonDetails from "../../../components/Buttons/ButtonDetails";
import { Link } from "react-router-dom";

const PlanetList = () => {
  const { planetList, getPlanetList } = useContext(WikiContext);
  const { getPlanetDetails } = useContext(InfoContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getPlanetList();
  }, []);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(planetList.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Content>
      <GoHomeButton />
      <Pagination pageCount={pageCount} changePage={changePage} />
      <ListContent>
        {planetList.length ? (
          planetList !== undefined ? (
            planetList
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((planet) => {
                const planetName = removeWhitespaces(planet.name);
                const planetPage = planet.url.match(/\d+/g);
                return (
                  <Item>
                    <ItemImg>
                      {planetsImageData.map((planetImage) => {
                        return planetImage.name === planetName ? (
                          <CardImage
                            filePath={planetImage.image}
                            alt={planet.name}
                          />
                        ) : null;
                      })}
                    </ItemImg>
                    <ItemInfo>
                      <h3>{planet.name}</h3>
                      <ButtonDetails>
                        <Link
                          to={`/planets/${planetName}`}
                          onClick={() => getPlanetDetails(planetPage)}
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

export default PlanetList;
