import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import "./Medical.css";

export function Medical() {
  const medicalInit = {
    name: "",
    identity: "",
    year: 0,
    gender: 0,
    nationality: "",
    company: "",
    division: "",
    medicalCard: [],
    city: "",
    county: "",
    wards: "",
    address: "",
    phone: "",
    email: "",
    info: "",
    checkboxone: [],
    checkboxtwo: [],
  };

  const medicalValidate = {
    name: Yup.string().required("Required"),
    identity: Yup.string().required("Required"),
    year: Yup.number().required("required").min(1900, ">1900"),
    nationality: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    county: Yup.string().required("required"),
    wards: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "email phải đúng định dạng vd:abc@gmail.com"
      ),
  };
  return (
    <div>
      <Formik
        initialValues={medicalInit}
        onSubmit={(values) => {
          console.log(values);
          alert("khai báo thành công");
        }}
        validationSchema={Yup.object(medicalValidate)}
      >
        <Form>
          <h1>Tờ khai y tế</h1>
          <table>
            <tbody>
              <label htmlFor="medicalName">Họ và Tên</label>
              <br />
              <Field type="text" id="medicalName" name="name"></Field>
              <ErrorMessage name="name" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalIdentityCard">Số hộ chiếu/CMND</label>
              <br />
              <Field
                tupe="text"
                id="medicalIdentitycard"
                name="identity"
              ></Field>
              <ErrorMessage name="identity" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalYear">Năm sinh</label>
              <br />
              <Field type="text" id="medicalYear" name="year"></Field>
              <ErrorMessage name="year" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalGender">Giới tính</label>
              <Field
                type="radio"
                value="1"
                id="medicalGender1"
                name="gender"
              ></Field>
              <label htmlFor="medicalGender1">Nam</label>
              <Field
                type="radio"
                value="0"
                id="medicalGender2"
                name="gender"
              ></Field>
              <label htmlFor="medicalGender2">Nữ</label>
              <br />
              <label htmlFor="medicalNationality">Quốc tịch</label>
              <br />
              <Field
                type="text"
                id="medicalNationlity"
                name="nationality"
              ></Field>
              <ErrorMessage name="nationality" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalCompany">Công ty làm việc</label>
              <br />
              <Field type="text" id="medicalNationlity" name="company"></Field>
              <br />
              <label htmlFor="medicalDivision">Bộ phận làm việc</label>
              <br />
              <Field type="text" id="medicalDivision" name="division"></Field>
              <br />
              <label htmlFor="medical">bảo hiểm y tế</label>
              <Field type="checkbox" value="yes" name="medicalCard"></Field>
              <br />
            </tbody>
          </table>
          <h2>Địa chỉ liên lạc tại Việt Nam</h2>
          <table>
            <tbody>
              <label htmlFor="medicalCity">Tỉnh Thành</label>
              <br />
              <Field type="text" id="medicalCity" name="city"></Field>
              <ErrorMessage name="city" component="span"></ErrorMessage>

              <br />
              <label htmlFor="meidcalDistricts">Quận/Huyện</label>
              <br />
              <Field type="text" id="meidcalDistricts" name="county"></Field>
              <ErrorMessage name="county" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalWards">Phường/xã</label>
              <br />
              <Field type="text" id="medicalWards" name="wards"></Field>
              <ErrorMessage name="wards" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalAddess">
                số nhà,phố,tổ dân phố/thôn/đội
              </label>
              <br />
              <Field type="text" id="medicalAddess" name="address"></Field>
              <ErrorMessage name="address" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalPhone">Điện thoại</label>
              <br />
              <Field type="text" id="medicalPhone" name="phone"></Field>
              <ErrorMessage name="phone" component="span"></ErrorMessage>
              <br />
              <label htmlFor="medicalEmail">Email</label>
              <br />
              <Field type="text" id="medicalEmail" name="email"></Field>
              <ErrorMessage name="email" component="span"></ErrorMessage>
              <br />
            </tbody>
          </table>
          <h2>
            Trong vòng 14 ngày qua, Anh/chị có đến quốc gia/vùng lãnh thổ nào
            (có thể đi qua nhiều quốc gia)
          </h2>
          <Field as="textarea" cols="60" rows="5" name="info"></Field>
          <h2>
            Trong vòng 14 ngày qua, Anh/chị có thấy xuất hiện dấu hiệu nào sau
            đây không
          </h2>
          <Field
            type="checkbox"
            value="sốt"
            id="fever"
            name="checkboxone"
          ></Field>
          <label htmlFor="fever">Sốt</label>
          <br />
          <Field
            type="checkbox"
            value="Ho"
            id="cough"
            name="checkboxone"
          ></Field>
          <label htmlFor="cough">Ho</label>
          <br />
          <Field
            type="checkbox"
            value="Khó thở"
            id="breath"
            name="checkboxone"
          ></Field>
          <label htmlFor="breath">Khó thở</label>
          <br />
          <Field
            type="checkbox"
            value="viêm phổi"
            id="pneumonia"
            name="checkboxone"
          ></Field>
          <label htmlFor="pneumonia">Viêm phổi </label>
          <br />
          <Field
            type="checkbox"
            value="Đau họng"
            id="sorethroat"
            name="checkboxone"
          ></Field>
          <label htmlFor="sorethroat">Đau họng</label>
          <br />
          <Field
            type="checkbox"
            value="Mệt mỏi"
            id="tired"
            name="checkboxone"
          ></Field>
          <label htmlFor="tired">Mệt mỏi</label>
          <br />
          <h2>Trong vòng 14 ngày qua,Anh/Chị có tiếp xúc với ?</h2>
          <Field
            type="checkbox"
            value="người bệnh hoặc nghi ngờ mắc bệnh Covid-19"
            id="selectone"
            name="checkboxtwo"
          ></Field>
          <label htmlFor="selectone">
            người bệnh hoặc nghi ngờ mắc bệnh Covid-19
          </label>
          <br />
          <Field
            type="checkbox"
            value="người từ nước có bệnh Covid-19"
            id="selecttwo"
            name="checkboxtwo"
          ></Field>
          <label htmlFor="selecttwo">người từ nước có bệnh Covid-19</label>
          <br />
          <Field
            type="checkbox"
            value="người có biểu hiện"
            id="selectthree"
            name="checkboxtwo"
          ></Field>
          <label htmlFor="selectthree">
            người có biểu hiện sốt, khó thở,viêm phổi
          </label>
          <br />

          <button type="submit" style={{ width: 500 }}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
