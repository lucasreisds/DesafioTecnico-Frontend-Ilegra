import api from "../api";

const getSpecies = async (pages) => {
  try {
    let allData = [];
    for (let i = 1; i <= pages; i++) {
      const species = await api.get(`species/?page=${i}`);
      const result = species.data.results;
      allData = [...allData, ...result];
    }
    return allData;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getSpecies;
