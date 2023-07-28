import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./Firebase/firebase.config";
import { useDispatch } from "react-redux";
import { getUser,  toggleLoading } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email))
      }
      else{
        dispatch(toggleLoading())
      }
    });
  }, []);
  return (
    <>
    <Toaster/>
      <RouterProvider router={routes} />

    
    </>
  );
}

export default App;
