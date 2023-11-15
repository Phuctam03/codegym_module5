import axios, { Axios } from "axios";

export const getAll = async () => {
  try {
    let respone = await axios.get("http://localhost:8080/todos");
    console.log(respone);
    alert("http status is:" + respone.status);
    return respone.data;
  } catch (err) {}
};

export const save = async (values) => {
  let respone = await axios.post("http://localhost:8080/todos", values);
  return respone.status;
};
