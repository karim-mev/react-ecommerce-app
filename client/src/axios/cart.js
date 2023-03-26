import api from "./api";

const getCart = async (id) => {
  try {
    const res = await api.get(`/api/cart/${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

const addToCart = async (id, productId, quantity) => {
  try {
    const res = await api.post(`/api/cart/${id}`, { productId, quantity });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

const deleteFromCart = async (userId, itemId) => {
  try {
    const res = await api.delete(`/api/cart/${userId}/${itemId}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export { getCart, addToCart, deleteFromCart };
