import api from "../api";

const getFilmInfo = async (id) => {
  try {
    const filmInfo = await api.get(`films/${id}/`);
    return filmInfo.data;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getFilmInfo;
