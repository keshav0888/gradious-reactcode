import * as type from "../types";
export function InsertData(payload) {
  return {
    type: type.INERT_DATA,
    payload: payload,
  };
}
export function getData(payload) {
  return {
    type: type.GET_DATA,
    payload: payload,
  };
}
export function updateData(payload) {
  return {
    type: type.UPDATE_DATA,
    payload: payload,
  };
}
export function DeleteData(payload) {
  return {
    type: type.DELETE_DATA,
    payload: payload,
  };
}
export function UpdateForm(payload) {
  return {
    type: type.UPDATE_FORM,
    payload: payload,
  };
}
  export function ButtonForm(payload) {
    return {
      type: type.BUTTON_FORM,
      payload: payload,
    };
}
