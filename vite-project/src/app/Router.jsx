import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Clickbtn from "../component/Categories/Clickbtn";
import Ticketsbooking from "../component/Categories/Categoryticket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Eventprojects />,
  },

  {
    path: "/category/:categoryName",
    element: <Clickbtn />,
  },

  {
    path: "/book-ticket/:eventId",
    element: <Ticketsbooking />,
  },
]);

export default router;
