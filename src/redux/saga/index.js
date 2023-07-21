import { all } from "redux-saga/effects";
import InsertDataSaga from "./dataSaga";
export default function* rootSaga() {
  yield all([InsertDataSaga()]);
}
