import api from "../api";

const getStarships = async (pages) => {
  try {
    let allData = [];
    for (let i = 1; i <= pages; i++) {
      const starships = await api.get(`starships/?page=${i}`);
      const result = starships.data.results;
      allData = [...allData, ...result];
    }
    return allData;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getStarships;
