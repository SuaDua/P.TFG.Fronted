import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZhcm8uc3VhcmV6QGFkYWl0cy5lcyIsImp0aSI6IjE3Mjc4MjM4LTAxYmItNDg4Ni04OWNhLThjOWMwYmI1ZDczMyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzM4MzQ3NTcyLCJ1c2VySWQiOiIxNzI3ODIzOC0wMWJiLTQ4ODYtODljYS04YzljMGJiNWQ3MzMiLCJyb2xlIjoiIn0.nl_Rs7RL2mrpGPZfHhqWpNtRc38e0DqvNP61uanhCaA";
const BASE_URL = "https://opendata.aemet.es/opendata/api";

export const getWeatherByProvince = async (provinceCode) => {
  try {
    console.log(`📡 Solicitando datos para código: ${provinceCode}`);

    const response = await axios.get(
      `${BASE_URL}/prediccion/especifica/municipio/diaria/${provinceCode}`,
      { params: { api_key: API_KEY } }
    );

    if (response.data && response.data.estado === 200 && response.data.datos) {
      console.log("✅ Primera respuesta obtenida:", response.data);

      // Segunda petición a la URL de datos
      const dataResponse = await axios.get(response.data.datos);
      if (dataResponse.data) {
        return dataResponse.data;
      } else {
        console.error("⚠️ Error: La API devolvió una respuesta vacía.");
        return null;
      }
    } else {
      console.error("⚠️ Error: La API no devolvió datos válidos.");
      return null;
    }
  } catch (error) {
    console.error("❌ Error obteniendo datos de AEMET:", error.message);
    return null;
  }
};