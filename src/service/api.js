import axios from "axios";

const API_URL = "http://localhost:3002/defects";

/* function component for adding expense to API */
export const addDefectsToApi = async (data) => {
  try {
    await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addExpense api", error.message);
  }
};

/* function component for getting all expense from API */
export const getDefectsFromApi = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getExpense api", error.message);
  }
};

/* function component for getting  expense using ID from API */
export const getDefectsByIdFromApi = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling getexpenseById api", error.message);
  }
};

/* function component for editting expense using ID from API */
export const editDefectById = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling editExpense api", error.message);
  }
};

/* function component for deleting expense using ID from API */
export const deleteDefectById = async (id) => {
  try {
    console.log("api called");
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteExpense api", error.message);
  }
};
