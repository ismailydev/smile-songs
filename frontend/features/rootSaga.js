import { all } from "redux-saga/effects";
import songsSagas from "./songsSagas";

export default function* rootSaga() {
    yield all([songsSagas()]);
}
