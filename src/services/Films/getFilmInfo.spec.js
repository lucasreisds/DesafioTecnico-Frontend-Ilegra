import api from "../api";
import getFilmInfo from "./getFilmInfo";
jest.mock("../api");

const filmMock = {
  data: {
    films: [Array],
    created: "2014-12-20T18:49:38.403000Z",
    director: "George Lucas",
    edited: "2014-12-20T20:47:52.073000Z",
    episode_id: 3,
    opening_crawl: String,
    planets: [Array],
    producer: "Rick McCallum",
    release_date: "2005-05-19",
    species: [Array],
    starships: [Array],
    title: "Revenge of the Sith",
    url: "http://swapi.dev/api/films/6/",
    vehicles: [Array],
  },
};
const film = filmMock.data;
const response = { data: film };
describe("Test getFilmInfo", () => {
  test("should fetch film", async () => {
    api.get.mockResolvedValue(response);
    await getFilmInfo(6).then((data) => expect(data).toEqual(filmMock.data));
  });
  test("should get the chosen film Revenge of the Sith", async () => {
    api.get.mockResolvedValue(response);
    await getFilmInfo(6).then((data) =>
      expect(data.title).toEqual(filmMock.data.title)
    );
  });
});
