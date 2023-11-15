import { Formik, Form, Field, ErrorMessage } from "formik";
import * as contactService from "../service/Contactservice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ContactUpdate() {
  const [contact, setContact] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    findById();
  }, [id]);

  const findById = async () => {
    let temp = await contactService.findByid(id);
    setContact(temp);
  };

  const updateContact = async (contact) => {
    await contactService.Update(id, contact);
    alert("update successffuly");
    navigate("/contacts");
  };

  if (!contact) return null;
  return (
    <div>
      <Formik
        initialValues={contact}
        onSubmit={(values) => {
          updateContact(values);
        }}
      >
        <Form>
          <h1>Add Contact</h1>
          {/* <img src="\access\profile.jpg" id="src-file"></img>
          <label htmlFor="contactFile" className="label-file">
            Add Image
          </label>
          <Field
            type="file"
            // accpet="image/jpeg,image/png,image/jpg"
            name="image"
            className="img"
            id="contactFile"
            // onChange={() => {
            //     URL.createObjectURL()
            // }}
          ></Field> */}
          <br></br>
          <label htmlFor="contactName">Name :</label>
          <br />
          <Field type="text" id="contactName" name="name"></Field>
          <br />
          <label htmlFor="contactEmail">Email :</label>
          <br />
          <Field type="text" id="contactEmail" name="email"></Field>
          <br />
          <label htmlFor="contactPhone">phone :</label>
          <br />
          <Field type="text" id="contactPhone" name="phone"></Field>
          <br />
          <button type="submit" className="button">
            Update
          </button>
        </Form>
      </Formik>
    </div>
  );
}
