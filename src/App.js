import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Layout/router";

function App() {
  return (
    <div className="">
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-center" ></Toaster>
    </div>
  );
}

export default App;
