import React, { useEffect, useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  btnCellRendererEdit,
  btnCellRendererDelete,
  PatientDetails,
  btnCellRendererStatus,
  AppointmentDetails
} from "./Buttoncell";
import { useDispatch, useSelector } from "react-redux";
import { ButtonForm, getData,UpdateForm,DeleteData } from "../redux/Action/search";
export const Table = () => {
  //const data=useSelector((state)=>state.InsertData?.data)
  const [editclick, seteditClick] = useState(false);
  const [rowDatavalue, setrowDatavalue] = useState({});
  const rowDataValue = useSelector((state) => state.InsertData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const handleEdit = (rowData) => {
    dispatch(UpdateForm(rowData))
    dispatch(ButtonForm("Update Appointment"))
    // setrowDatavalue(rowData);
    // seteditClick(true);
  };
  const handleDelete = (rowData) => {
    if (window.confirm("Are you sure you want to delete the appointment data?")) {
      console.log("Delete clicked", rowData);
      alert("Data deleted successfully");
      dispatch(DeleteData(rowData));
      dispatch(getData())
    }
  };
  const columnDefs = [
    {
      headerName: "Patient",
      field: "Patient_Name",
      width: 300,
      cellRenderer: PatientDetails, // Use cellRendererFramework instead of cellRenderer
      cellRendererParams: {
        rowData:rowDataValue,
      },
    },
    {
      headerName: "Status",
      field:"status",
      width: 150,
      cellRenderer: btnCellRendererStatus, // Use cellRendererFramework instead of cellRenderer
    },
    {
      headerName: "Appointment",
      field: "date_input",
      width: 150,
      cellRenderer: AppointmentDetails, // Use cellRendererFramework instead of cellRenderer
      cellRendererParams: {
        rowData:rowDataValue,
      },
    },
    { headerName: "Phone",field:"Phone_Number", filter: "agTextColumnFilter", width: 150 },
    { headerName: "Doctor", field:"Doctor_Name",filter: "agTextColumnFilter", width: 150 },

    {
      headerName: "Edit",
      width: 150,
      cellRenderer: btnCellRendererEdit, // Use cellRendererFramework instead of cellRenderer
      cellRendererParams: {
        onEditClick: handleEdit,
      },
    },
    {
      headerName: "Delete",
      width: 150,
      cellRenderer: btnCellRendererDelete, // Use cellRendererFramework instead of cellRenderer
      cellRendererParams: {
        onDeleteClick: handleDelete,
      },
    },
  ];
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizeble: true,
      isVisible: true,
    };
  }, []);
  const rowStyle = {
    display: "flex",
    alignItems: "center", 
    justifyContent: "center",
    background: "black",
  };
  const getRowStyle = (params) => {
    // if (params.node.rowIndex % 2 === 0) {
    //   return { background: "rgb(245,245,245)" };
    // } else {
      return { background: "white", color: "#04aa6d" };
   // }
  };
  const getRowHeight = (params) => {
    return 60;
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "30rem",
        width: "88vw",
        "background-color": "#f6ffe5",
        margin: "1rem",
        marginLeft: "6rem",
      }}
    >
      <AgGridReact
        rowData={rowDataValue}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowStyle={rowStyle}
        getRowStyle={getRowStyle}
        // onGridReady={onGridReady}
        frameworkComponents={{
          btnCellRendererEdit: btnCellRendererEdit,
        }}
        // gridOptions={gridOptions}
        getRowHeight={getRowHeight}
      ></AgGridReact>
    </div>
  );
};
