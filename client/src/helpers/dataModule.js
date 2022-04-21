import axios from "axios";

export const getUserOrders = async () => {
  try {
    const orders = await axios.get(
      "http://localhost:5000/api/v1/orders",

      {
        withCredentials: true,
      }
    );
    return orders.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
