import axios from "axios";

const BASE_URL = "https://mock-json-server-39aq.onrender.com/rentals";

export const getRentals = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching rentals");
  }
};

export const createRental = async (newRental) => {
  try {
    const response = await axios.post(BASE_URL, newRental);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating rental");
  }
};

export const updateRental = async (updatedRental) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${updatedRental.id}`,
      updatedRental
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating rental");
  }
};

export const deleteRental = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting rental");
  }
};
