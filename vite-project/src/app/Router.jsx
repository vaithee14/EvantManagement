import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Clickbtn from "../component/Categories/Clickbtn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Eventprojects />,
  },
  {
    path: "/category/:categoryName",
    element: <Clickbtn />,
  },
]);

export default router;
