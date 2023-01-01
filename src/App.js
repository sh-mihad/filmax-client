import { RouterProvider } from "react-router-dom";
import router from "./Layout/router";

function App() {
  return (
    <div className="">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
