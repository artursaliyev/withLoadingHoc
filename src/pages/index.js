import { combineReducers } from "@reduxjs/toolkit";

import articleSlice from "./refs/article/articleSlice";
import postSlice from "./refs/post/postSlice";

const refs = combineReducers({
  article: articleSlice,
  post: postSlice,
});

export default refs;
