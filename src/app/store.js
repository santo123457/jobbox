import { configureStore,  } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import apiSlice from "../features/api/apiSlice";


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: authSlice,
  },
  middleware : (getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});

export default store;
