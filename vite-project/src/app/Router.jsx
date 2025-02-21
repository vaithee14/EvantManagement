import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Clickbtn from "../component/Categories/Clickbtn";
import Ticketsbooking from "../component/Categories/Categoryticket";
import Categorypaymentmethod from "../component/Categories/CategoryPayment";

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
    path: "/book/1",
    element: <Ticketsbooking />,
  },

  {
    path: "/paymentmethods",
    element: <Categorypaymentmethod />,
  },
]);

export default router;
