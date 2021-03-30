import api from "../api";

const getCharacterInfo = async (id) => {
  try {
    const characterInfo = await api.get(`people/${id}/`);
    return characterInfo.data;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getCharacterInfo;
