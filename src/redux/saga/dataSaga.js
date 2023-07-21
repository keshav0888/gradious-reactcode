import { call, put, takeEvery } from "redux-saga/effects";
//import { SEARCH } from "../../utils/constant";
import {URL} from "../../Util/constant"
function InsertApi(payload) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(function (data) {
      const items = data;
      return items;
    });
}
function GetApi(action, payload) {
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(function (data) {
      const items = data;
      return items;
    });
}
function UpdateApi(payload) {
  return fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(function (data) {
      const items = data;
      return items;
    });
}
function DeleteApi(payload) {
  return fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(function (data) {
      const items = data;
      return items;
    });
}
function* insertData(action) {
  try {
    const search = yield call(InsertApi, action.payload);
    yield put({ type: "INERT_DATA_SUCCESS", search: search });
  } catch (e) {
    yield put({ type: "INERT_DATA_FAILED", message: e.message });
  }
}
function* GetData(action) {
  try {
    const search = yield call(GetApi);
    yield put({ type: "GET_DATA_SUCCESS", search: search });
  } catch (e) {
    yield put({ type: "GET_DATA_FAILED", message: e.message });
  }
}
function* UpdateData(action) {
  try {
    const search = yield call(UpdateApi,action.payload);
    yield put({ type: "GET_DATA_SUCCESS", search: search });
  } catch (e) {
    yield put({ type: "GET_DATA_FAILED", message: e.message });
  }
}function* DeleteData(action) {
  try {
    const search = yield call(DeleteApi,action.payload);
    yield put({ type: "GET_DATA_SUCCESS", search: search });
  } catch (e) {
    yield put({ type: "GET_DATA_FAILED", message: e.message });
  }
}
function* UpdtateForm(action) {
    yield put({ type: "UPDATE_FORM",payload:action });
}
function* searchSaga() {
  yield takeEvery("INERT_DATA", insertData);
  yield takeEvery("GET_DATA", GetData);
  yield takeEvery("UPDATE_DATA", UpdateData);
  yield takeEvery("DELETE_DATA", DeleteData);
  // yield takeEvery("UPDATE_FORM", UpdtateForm);
}

export default searchSaga;
