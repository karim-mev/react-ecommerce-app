import api from "./api";

const getItems = async () => {
  try {
    const response = await api.get("/api/items/");
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error("Network error");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

const addItem = async (item) => {
  try {
    const response = await api.post("/api/items/", item);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error("Network error");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

const updateItem = (id, item) => {
  try {
    const response = api.put(`/api/items/${id}`, item);
    return [id, res.data];
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error("Network error");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

const deleteItem = async (id) => {
  try {
    const response = api.delete(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error("Network error");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

export { getItems, addItem, updateItem, deleteItem };
