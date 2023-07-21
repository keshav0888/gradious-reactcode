import { Formik, Form, Field ,ErrorMessage } from "formik";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import {InsertData, getData,ButtonForm,updateData,UpdateForm} from "../redux/Action/search" 
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
export const BookAppoinmentForm = () => {
  const formInitialValues = useSelector((state) => state.InsertData.formInitialValues);
  const buttonName = useSelector((state) => state.InsertData.button_name);
  console.log("ButtonForm",buttonName)
  const dispatch=useDispatch()
  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];
  const statusOptions = [
    { label: 'Consult', value: 'Consult' },
    { label: 'Revisit', value: 'Revisit' },
  ];
  const validateDoctorName = (value) => {
    if (!value.startsWith("Dr.")) {
      return "Doctor's name must start with 'Dr.'";
    }
    return true;
  };
  const validationSchema = Yup.object().shape({
    Patient_Name: Yup.string().trim()
      .matches(/^[A-Za-z\s]+$/, "Patient Name must contain only alphabetic characters")
      .required("Patient Name is required"),
      Phone_Number: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
      Doctor_Name: Yup.string()
      .test("doctor-name-validation", "Doctor's name Must Start With Dr. and must contain only alphabetic characters and spaces", (value) => {
        if (!value) return true; 
        return /^Dr\.\s*[A-Za-z\s]+$/.test(value.trim());
      })
      .required("Doctor's name is required"),

      Patient_Age: Yup.number()
    .integer("Age must be an integer")
    .positive("Age must be a positive number")
    .max(100, "Age must be less than or equal to 100")
    .required("Age is required"),
    gender: Yup.string()
    .notOneOf(["Select Gender","Select gender"], "Gender selection is required")
    .required("Gender is required"),
    status: Yup.string()
    .notOneOf(["Select Status"], "Status selection is required")
    .required("Status is required"), 
    time_input: Yup.string().required("Time is required"), 
    date_input: Yup.string().notOneOf(["dd-mm-yyyy"]).required("Date is required"), 
  });
  return (
    <div className="searchForm">
      <Formik
    initialValues={formInitialValues}
        enableReinitialize={true} 
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if(buttonName==="Update Appointment"){
            const payloadData=values
            payloadData['_id']=formInitialValues['_id']
            dispatch(updateData(payloadData))
            dispatch(getData())
            dispatch(ButtonForm("Book Appointment"))            
            window.alert("Appoinment Details Updated Successfully")
            dispatch(UpdateForm({Patient_Name: "",
            Phone_Number: "",
            Doctor_Name: "",
            gender: "Select Gender",
            date_input: "",
            status: "Select Status",
            Patient_Age: "",
            time_input: "",}))
          }
          else{
            dispatch(InsertData(values))
            dispatch(getData())
            dispatch(UpdateForm({Patient_Name: "",
            Phone_Number: "",
            Doctor_Name: "",
            gender: "Select gender",
            date_input: "",
            status: "Select Status",
            Patient_Age: "",
            time_input: "",}))
            window.alert("Appoinment Book Successfully")
          }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (  
      <Form className="p-5 m-1 mx-10">
        <Grid container spacing={1} rowSpacing={2}>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <input
                type="text"
                name="Patient_Name"
                value={values.Patient_Name}
                onChange={handleChange}
                placeholder="Patient Name"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              />
              <ErrorMessage name="Patient_Name"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>
            <Grid item xs={4}>
              <input
                type="text"
                name="Phone_Number"
                value={values.Phone_Number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              />
            <ErrorMessage name="Phone_Number"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>

            <Grid item xs={4}>
              <input
                type="text"
                name="Doctor_Name"
                value={values.Doctor_Name}
                onChange={handleChange}
                placeholder="Doctor Name"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              />
            <ErrorMessage name="Doctor_Name" style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <Field
                as="select"
                name="gender"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              >
                <option value={"hi"}>{values.gender}</option>
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="gender"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>
            <Grid item xs={4}>
              <input
                type="date"
                name="date_input"
                value={values.date_input}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border w-80 text-gray-700 h-8 rounded-2xl pl-6"
              />
            <ErrorMessage name="date_input"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>
            <Grid item xs={4}>
              <Field
                as="select"
                name="status"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              >
                <option value={values.status}>{values.status}</option>
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="status"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />

            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <input
                type="text"
                name="Patient_Age"
                value={values.Patient_Age}
                onChange={handleChange}
                placeholder="Patient Age"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              />
              <ErrorMessage name="Patient_Age"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>
            <Grid item xs={4}>
              <input
                type="time"
                name="time_input"
                value={values.time_input}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-2xl w-80 text-gray-700 h-8 rounded-2xl pl-6"
              />
         <ErrorMessage name="time_input"  style={{ color: "red","margin-left":"20px" }} component="div" className="error" />
            </Grid>
            <Grid item xs={4}>
              <button
                className="bg-blue-700 px-24 py-1 text-white rounded-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {buttonName}
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
        )}
      </Formik>
    </div>
  );
};
