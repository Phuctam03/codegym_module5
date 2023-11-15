import axios from "axios";

export const getAll = async (name) => {
  try {
    let respone = await axios.get(
      "http://localhost:8080/Contact?name_like=" + name
    );
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const findByid = async (id) => {
  try {
    let respone = await axios.get("http://localhost:8080/Contact/" + id);
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};
export const save = async (values) => {
  try {
    let respone = await axios.post("http://localhost:8080/Contact", values);
    return respone.status;
  } catch (error) {
    console.log(error);
  }
};

export const Update = async (id, values) => {
  try {
    let respone = await axios.put(
      `http://localhost:8080/Contact/${id}`,
      values
    );
    return respone.status;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    let respone = await axios.delete(`http://localhost:8080/Contact/${id}`);
    return respone.status;
  } catch (error) {
    console.log(error);
  }
};
