import { configureStore, combineReducers } from "@reduxjs/toolkit";
import users from "components/users/usersSlice";
import refs from "pages";

const rootReducer = combineReducers({
  users,
  refs,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
