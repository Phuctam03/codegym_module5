import axios from "axios";

export const getAll = async (title) => {
  try {
    let respone = await axios.get(
      "http://localhost:8080/Books?title_like=" + title
    );
    return respone.data;
  } catch (error) {}
};

export const findById = async (id) => {
  try {
    let respone = await axios.get(`http://localhost:8080/Books/${id}`);
    console.log(respone);
    return respone.data;
  } catch (err) {}
};

export const save = async (book) => {
  let respone = await axios.post("http://localhost:8080/Books", book);
  return respone.status;
};

export const Update = async (id, book) => {
  try {
    let respone = await axios.put(`http://localhost:8080/Books/${id}`, book);
    return respone.status;
  } catch (err) {}
};

export const Delete = async (id) => {
  try {
    let respone = await axios.delete(`http://localhost:8080/Books/${id}`);
    return respone.status;
  } catch (err) {}
};
