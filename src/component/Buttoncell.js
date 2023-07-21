// btnCellRendererEdit.js
import React from "react";
import PROFILE from "../img/profile.png";
import { WidthFull } from "@mui/icons-material";
export const btnCellRendererEdit = (props) => {
    const handleEditClick = () => {
      const { onEditClick, data } = props;
      onEditClick(data); // Pass the rowData to the onEditClick function
    };
  
    return (
      <button className="btn-cell"style={{"background-color":"orange","color":"block"}} onClick={handleEditClick}>
        Edit 
      </button>
    );
};
export const btnCellRendererDelete = (props) => {
  const handleDelete = () => {
    const { onDeleteClick, data } = props;
    onDeleteClick(data); // Pass the rowData to the onEditClick function
  };

  return (
    <button className="btn-cell" style={{"background-color":"red"}} onClick={handleDelete}>
      Delete 
    </button>
  );
  };
  export const AppointmentDetails = (props) => {
    const {date_input,time_input}=props.data
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <b style={{ marginBottom: "-20px" }}>{time_input}</b>
          <b>{date_input}</b>
        </div>
      </div>
    );
  };
  export const PatientDetails = (props) => {
    const {Patient_Name,Patient_Age,gender}=props.data
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={PROFILE} style={{ height: "30px", marginRight: "10px" }} alt="Profile" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <b style={{ marginBottom: "-20px" }}>{Patient_Name}</b>
          <b>{Patient_Age} yrs, {gender}</b>
        </div>
      </div>
    );
  };
  export const btnCellRendererStatus = (props) => {
    const {status}=props.data
    let color='green'
    if(status==="Revisit")
        color="blue" 
  
    return (
      <button className="btn-cell" style={{"background-color": `${color}`}}>
        {status} 
      </button>
    );
  };
  
  
  
  
  
  
  