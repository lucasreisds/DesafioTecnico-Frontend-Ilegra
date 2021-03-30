import api from "../api";
import getVehicleInfo from "./getVehicleInfo";

jest.mock("../api");
const vehicleMock = {
  data: {
    cargo_capacity: "5",
    consumables: "unknown",
    cost_in_credits: "10550",
    created: "2014-12-10T16:13:52.586000Z",
    crew: "1",
    edited: "2014-12-20T21:30:21.668000Z",
    films: [Array],
    length: "3.4 ",
    manufacturer: "SoroSuub Corporation",
    max_atmosphering_speed: "250",
    model: "X-34 landspeeder",
    name: "X-34 landspeeder",
    passengers: "1",
    pilots: [],
    url: "http://swapi.dev/api/vehicles/7/",
    vehicle_class: "repulsorcraft",
  },
};
const vehicle = vehicleMock.data;
const response = { data: vehicle };
describe("Test getVehicleInfo", () => {
  test("should fetch vehicle", async () => {
    api.get.mockResolvedValue(response);
    await getVehicleInfo(6).then((data) =>
      expect(data).toEqual(vehicleMock.data)
    );
  });
  test("should get the chosen vehicle X-34 landspeeder", async () => {
    api.get.mockResolvedValue(response);
    await getVehicleInfo(6).then((data) =>
      expect(data.name).toEqual(vehicleMock.data.name)
    );
  });
});
