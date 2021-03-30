import api from "../api";

const getCharacters = async (pages) => {
  try {
    let allData = [];
    for (let i = 1; i <= pages; i++) {
      const characters = await api.get(`people/?page=${i}`);
      const result = characters.data.results;
      allData = [...allData, ...result];
    }
    return allData;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getCharacters;
