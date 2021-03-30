import api from "../api";

const getFilms = async () => {
  try {
    const films = await api.get(`films/`);
    return films.data.results;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getFilms;
