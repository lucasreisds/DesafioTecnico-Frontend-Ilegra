import api from "../api";
import getPlanetInfo from "./getPlanetInfo";
jest.mock("../api");

const planetMock = {
  data: {
    climate: "arid",
    created: "2014-12-09T13:50:49.641000Z",
    diameter: "10465",
    edited: "2014-12-20T20:58:18.411000Z",
    planets: [Array],
    gravity: "1 standard",
    name: "Tatooine",
    orbital_period: "304",
    population: "200000",
    residents: [Array],
    rotation_period: "23",
    surface_water: "1",
    terrain: "desert",
    url: "http://swapi.dev/api/planets/1/",
  },
};
const planet = planetMock.data;
const response = { data: planet };
describe("Test getplanetInfo", () => {
  test("should fetch planet", async () => {
    api.get.mockResolvedValue(response);
    await getPlanetInfo(6).then((data) =>
      expect(data).toEqual(planetMock.data)
    );
  });
  test("should get the chosen planet Tatooine", async () => {
    api.get.mockResolvedValue(response);
    await getPlanetInfo(6).then((data) =>
      expect(data.name).toEqual(planetMock.data.name)
    );
  });
});
