import api from "../api";

const getPlanetInfo = async (id) => {
  try {
    const planetInfo = await api.get(`planets/${id}/`);
    return planetInfo.data;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getPlanetInfo;
