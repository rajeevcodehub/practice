import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home";
import StopWatch from "./component/Stopwatch";
import ToDo from "./component/ToDo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stopwatch",
      element: <StopWatch />,
    },
    {
      path: "/ToDo",
      element: <ToDo />,
    },
  ]);
  return (
   <RouterProvider router={router} />
  );
}

export default App;
