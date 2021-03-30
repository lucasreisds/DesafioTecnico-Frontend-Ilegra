import api from "../api";

const getPlanets = async (pages) => {
  try {
    let allData = [];
    for (let i = 1; i <= pages; i++) {
      const planets = await api.get(`planets/?page=${i}`);
      const result = planets.data.results;
      allData = [...allData, ...result];
    }
    return allData;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getPlanets;
