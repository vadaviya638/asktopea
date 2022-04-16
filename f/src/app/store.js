import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../components/Userslice";


export default configureStore({
  reducer: {
    user: userReducer,

  },
});