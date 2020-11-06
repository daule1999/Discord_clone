import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import appReducer from "../appSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
