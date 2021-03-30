import React, { useContext } from "react";
import { InfoContext } from "../../../contexts/InfoContext";
import { vehiclesImageData } from "../../../utils/ImageData/vehiclesImageData";
import { removeWhitespaces } from "../../../utils/removeWhitespaces";
import GoBackButton from "../../Buttons/GoBack";
import GoHomeButton from "../../Buttons/GoHome";
import CardImage from "../../CardImage/CardImage";
import Content from "../../Content/Content";
import Loading from "../../Loading/Loading";
import { DetailsContent, Image, Info } from "./VehicleDetailsStyle";

const VehicleDetails = () => {
  const { vehicleInfo } = useContext(InfoContext);
  return (
    <Content>
      <GoHomeButton />
      <GoBackButton route="vehicles" />
      {vehicleInfo.length ? (
        vehicleInfo !== undefined || vehicleInfo.length < 1 ? (
          vehicleInfo.map((vehicle) => {
            const vehicleName = removeWhitespaces(vehicle.name);
            return (
              <DetailsContent>
                <Image>
                  {vehiclesImageData.map((vehicleImage) => {
                    return vehicleImage.name === vehicleName ? (
                      <CardImage
                        filePath={vehicleImage.image}
                        alt={vehicle.name}
                      />
                    ) : null;
                  })}
                </Image>
                <Info>
                  <h3>{vehicle.name}</h3>
                  <p>Model: {vehicle.model}</p>
                  <p>Manufacturer: {vehicle.manufacturer}</p>
                  <p>Class {vehicle.vehicle_class}</p>
                  <p>Cost {vehicle.cost_in_credits} credits</p>
                  <p>Speed: {vehicle.max_atmosphering_speed} km/h</p>
                  <p>Length: {vehicle.length} km/h</p>
                  <p>Cargo capacity: {vehicle.cargo_capacity}kg</p>
                  <p>Passengers: {vehicle.passengers}</p>
                </Info>
              </DetailsContent>
            );
          })
        ) : (
          <p> You must choose a vehicle before</p>
        )
      ) : (
        <Loading />
      )}
    </Content>
  );
};

export default VehicleDetails;
