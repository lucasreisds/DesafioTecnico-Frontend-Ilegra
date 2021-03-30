import api from "../api";

const getStarshipInfo = async (id) => {
  try {
    const starshipInfo = await api.get(`starships/${id}/`);
    return starshipInfo.data;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getStarshipInfo;
