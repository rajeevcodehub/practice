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
import Calculator from "./component/Calculator";
import LazyLoadDemo from "./component/LazyLoadDemo";

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
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/lazyload",
      element: <LazyLoadDemo />,
    },
  ]);
  return (
   <RouterProvider router={router} />
  );
}

export default App;
