import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home";
import StopWatch from "./component/Stopwatch";
import ToDo from "./component/ToDo";
import ProgressBar from "./component/ProgressBar";
import Animation from "./component/Animation";
import WhackAMole from "./component/WhackAMole";
import Debouncing from "./component/Debouncing";
import Throttling from "./component/Throttling";

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
    {
      path: "/progressbar",
      element: <ProgressBar />,
    },
    {
      path: "/animation",
      element: <Animation />,
    },
    {
      path: "/whack-a-mole",
      element: <WhackAMole />,
    },
    {
      path: "/debouncing",
      element: <Debouncing />,
    },
    {
      path: "/throttling",
      element: <Throttling />,
    },
  ]);
  return (
   <RouterProvider router={router} />
  );
}

export default App;
