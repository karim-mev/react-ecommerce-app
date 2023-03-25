import api from "./api";

const registerUser = async (name, email, password) => {
  try {
    const response = await api.post("/api/auth/register", {
      name,
      email,
      password,
    });
    return response.data; // return the response data
  } catch (error) {
    // handle error
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error("Network error");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    return response.data;
  } catch (error) {
    // handle error
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error("Network error");
    } else {
      throw new Error("Something went wrong");
    }
  }
};

export {registerUser, loginUser};
