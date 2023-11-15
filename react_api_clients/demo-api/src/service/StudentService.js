import axios from "axios";

export const getAll = async (name, languages) => {
  try {
    console.log(name, languages);
    let respone = await axios.get(
      "http://localhost:8080/students?name_like=" +
        name +
        "&languages_like=" +
        languages
    );
    console.log(respone);
    return respone.data;
  } catch (err) {}
};

export const save = async (values) => {
  let respone = await axios.post("http://localhost:8080/students", values);
  console.log(respone);
  return respone.status;
};
