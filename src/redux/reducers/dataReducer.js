import * as type from "../types";

const initialState = {
  data: [],
  formInitialValues:{
    "Patient_Name": "",
    "Phone_Number": "",
    "Doctor_Name": "",
    "gender": "Select Gender",
    "date_input": "",
    "status": "Select Status",
    "Patient_Age": "",
    "time_input": "",
  },
  button_name:'Book Appoinment'
};
export default function getData(state = initialState, action) {
  console.log("keshav",action)
  switch (action.type) {
    case type.GET_DATA:
      return {
        ...state,
      };
    case type.GET_DATA_SUCCESS:
      return {
        ...state,
        data:action.search,
      };
    case type.GET_DATA_FAILED:
      return {
        ...state,
      };
    case type.UPDATE_FORM:
        return {
          ...state,
          formInitialValues:action.payload,
        };
    case type.BUTTON_FORM:
          return {
            ...state,
            button_name:action.payload,
          };    
    default:
      return state;
  }
}
