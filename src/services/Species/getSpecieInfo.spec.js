import api from "../api";
import getSpecieInfo from "./getSpecieInfo";
jest.mock("../api");

const specieMock = {
  data: {
    average_height: "66",
    average_lifespan: "900",
    classification: "mammal",
    created: "2014-12-15T12:27:22.877000Z",
    designation: "sentient",
    edited: "2014-12-20T21:36:42.148000Z",
    eye_colors: "brown, green, yellow",
    films: (5)[Array],
    hair_colors: "brown, white",
    homeworld: "http://swapi.dev/api/planets/28/",
    language: "Galactic basic",
    name: "Yoda's species",
    people: [Array],
    skin_colors: "green, yellow",
    url: "http://swapi.dev/api/species/6/",
  },
};
const specie = specieMock.data;
const response = { data: specie };
describe("Test getspecieInfo", () => {
  test("should fetch specie", async () => {
    api.get.mockResolvedValue(response);
    await getSpecieInfo(6).then((data) =>
      expect(data).toEqual(specieMock.data)
    );
  });
  test("should get the chosen specie Tatooine", async () => {
    api.get.mockResolvedValue(response);
    await getSpecieInfo(6).then((data) =>
      expect(data.name).toEqual(specieMock.data.name)
    );
  });
});
