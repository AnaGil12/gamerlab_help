import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getConsolidaciones = async () => {
  try {
    const response = await api.get('/evaluaciones/consolidacion');
    return response.data;
  } catch (error) {
    console.error('Error al obtener consolidaciones:', error);
    throw error;
  }
};

export const getConsolidacionById = async (id) => {
  try {
    const response = await api.get(`/evaluaciones/consolidacion/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener consolidación ${id}:`, error);
    throw error;
  }
};

export const getEvaluacionesVideojuego = async (id) => {
  try {
    const response = await api.get(`/evaluaciones/evaluaciones/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener evaluaciones del videojuego ${id}:`, error);
    throw error;
  }
};

export const getJurados = async () => {
  try {
    const response = await api.get('/evaluaciones/jurados');
    return response.data;
  } catch (error) {
    console.error('Error al obtener jurados:', error);
    throw error;
  }
};

export const getAnalytics = async () => {
  try {
    const response = await api.get('/evaluaciones/analytics');
    return response.data;
  } catch (error) {
    console.error('Error al obtener analytics:', error);
    throw error;
  }
};

export default api; 