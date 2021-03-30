import api from "../api";

const getSpecieInfo = async (id) => {
  try {
    const specieInfo = await api.get(`species/${id}/`);
    return specieInfo.data;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getSpecieInfo;
