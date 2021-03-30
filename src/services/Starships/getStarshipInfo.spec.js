import api from "../api";
import getStarshipInfo from "./getStarshipInfo";

jest.mock("../api");
const starshipMock = {
  data: {
    MGLT: "75",
    cargo_capacity: "100000",
    consumables: "2 months",
    cost_in_credits: "100000",
    created: "2014-12-10T16:59:45.094000Z",
    crew: "4",
    edited: "2014-12-20T21:23:49.880000Z",
    films: [Array],
    hyperdrive_rating: "0.5",
    length: "34.37",
    manufacturer: "Corellian Engineering Corporation",
    max_atmosphering_speed: "1050",
    model: "YT-1300 light freighter",
    name: "Millennium Falcon",
    passengers: "6",
    pilots: [Array],
    starship_class: "Light freighter",
    url: "http://swapi.dev/api/starships/10/",
  },
};
const starship = starshipMock.data;
const response = { data: starship };
describe("Test getStarshipInfo", () => {
  test("should fetch starship", async () => {
    api.get.mockResolvedValue(response);
    await getStarshipInfo(6).then((data) =>
      expect(data).toEqual(starshipMock.data)
    );
  });
  test("should get the chosen starship Millennium Falcon", async () => {
    api.get.mockResolvedValue(response);
    await getStarshipInfo(6).then((data) =>
      expect(data.name).toEqual(starshipMock.data.name)
    );
  });
});
