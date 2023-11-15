import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Contactservice from "../service/Contactservice";
import "./ContactList.css";

export function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAll();
  }, [name]);

  const getAll = async () => {
    let temp = await Contactservice.getAll(name);
    setContacts(temp);
  };

  const handleDelete = async (id) => {
    const notification = window.confirm("Do you want to delte this ?");
    if (notification) {
      await Contactservice.remove(id);
      alert("delete is succesffuly");
      getAll();
      navigate("/contacts");
    }
  };

  return (
    <div>
      <h1 className="title">Contacts</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Link to={"/create"} className="link">
        ADD Contact
      </Link>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.image}></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button>
                    <Link to={"/update/" + contact.id} className="link-2">
                      Update
                    </Link>
                  </button>
                  <button onClick={() => handleDelete(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
