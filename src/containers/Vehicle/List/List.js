import React, { useContext, useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { WikiContext } from "../../../contexts/WikiContext";
import GoHomeButton from "../../../components/Buttons/GoHome";
import Content from "../../../components/Content/Content";
import ListContent from "../../../components/ListContent/ListContent";
import { Item, ItemImg, ItemInfo } from "./ListStyle";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import { vehiclesImageData } from "../../../utils/ImageData/vehiclesImageData";
import CardImage from "../../../components/CardImage/CardImage";
import { InfoContext } from "../../../contexts/InfoContext";
import ButtonDetails from "../../../components/Buttons/ButtonDetails";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
const VehicleList = () => {
  const { vehicleList, getVehicleList } = useContext(WikiContext);
  const [pageNumber, setPageNumber] = useState(0);
  const { getVehicleDetails } = useContext(InfoContext);
  useEffect(() => {
    getVehicleList();
  }, []);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(vehicleList.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Content>
      <GoHomeButton />
      <Pagination pageCount={pageCount} changePage={changePage} />
      <ListContent>
        {vehicleList.length ? (
          vehicleList !== undefined ? (
            vehicleList
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((vehicle) => {
                const vehiclePage = vehicle.url.match(/\d+/g);
                const vehicleName = removeWhitespaces(vehicle.name);
                return (
                  <Item>
                    <ItemImg>
                      {vehiclesImageData.map((vehicleImage) => {
                        return vehicleImage.name === vehicleName ? (
                          <CardImage
                            filePath={vehicleImage.image}
                            alt={vehicle.name}
                          />
                        ) : null;
                      })}
                    </ItemImg>
                    <ItemInfo>
                      <h3>{vehicle.name}</h3>
                      <ButtonDetails>
                        <Link
                          to={`/vehicles/${vehicleName}`}
                          onClick={() => getVehicleDetails(vehiclePage)}
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

export default VehicleList;
