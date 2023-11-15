import { Formik, Form, Field, ErrorMessage } from "formik";
import * as contactService from "../service/Contactservice";
import { useNavigate } from "react-router-dom";

export function ContactCreate() {
  const navigate = useNavigate();
  const contactInit = {
    image: null,
    name: "",
    email: "",
    phone: "",
  };

  const addNewContact = async (contact) => {
    await contactService.save(contact);
    alert("add contact successfuly");
    navigate("/contacts");
  };
  return (
    <div>
      <Formik
        initialValues={contactInit}
        onSubmit={(values) => {
          addNewContact(values);
        }}
      >
        <Form>
          <h1>Add Contact</h1>
          <img src="\access\profile.jpg" id="src-file"></img>
          <label htmlFor="contactFile" className="label-file">
            Add Image
          </label>
          <Field
            type="file"
            accpet="image/jpeg,image/png,image/jpg"
            name="image"
            className="img"
            id="contactFile"
            // onChange={() => {
            //     URL.createObjectURL()
            // }}
          ></Field>
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
            ADD
          </button>
        </Form>
      </Formik>
    </div>
  );
}
