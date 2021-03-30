import api from "../api";

const getVehicles = async (pages) => {
  try {
    let allData = [];
    for (let i = 1; i <= pages; i++) {
      const vehicles = await api.get(`vehicles/?page=${i}`);
      const result = vehicles.data.results;
      allData = [...allData, ...result];
    }
    return allData;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getVehicles;
