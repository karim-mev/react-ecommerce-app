import api from "./api";

export async function getOrders(id) {
  try {
    const response = await api.get(`/api/order/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export async function checkout(id, source) {
  try {
    const response = await api.post(`/api/order/${id}`, { source });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
