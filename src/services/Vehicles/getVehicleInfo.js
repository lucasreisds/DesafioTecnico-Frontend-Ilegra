import api from "../api";

const getVehicleInfo = async (id) => {
  try {
    const vehicleInfo = await api.get(`vehicles/${id}/`);
    return vehicleInfo.data;
  } catch (error) {
    console.error("Contact the administrator, there was an error!", error);
  }
};

export default getVehicleInfo;
