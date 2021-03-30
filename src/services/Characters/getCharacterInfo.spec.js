import api from "../api";
import getCharacterInfo from "./getCharacterInfo";

jest.mock("../api");
const characterMock = {
  data: {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    films: [Array],
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "http://swapi.dev/api/planets/1/",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
    species: [],
    starships: [Array],
    url: "http://swapi.dev/api/people/1/",
    vehicles: [Array],
  },
};
const character = characterMock.data;
const response = { data: character };
describe("Test getCharacterInfo", () => {
  test("should fetch character", async () => {
    api.get.mockResolvedValue(response);
    await getCharacterInfo(1).then((data) =>
      expect(data).toEqual(characterMock.data)
    );
  });
  test("should get the chosen character Luke Skywalker", async () => {
    api.get.mockResolvedValue(response);
    await getCharacterInfo(1).then((data) =>
      expect(data.name).toEqual(characterMock.data.name)
    );
  });
});
