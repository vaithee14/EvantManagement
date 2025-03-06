import { createBrowserRouter } from "react-router-dom";
import Eventprojects from "../component/Eventproject";
import Musicbtn from "../component/Categories/musicbtn";
import Ticketsbooking from "../component/Categories/Categoryticket";
import Categorypaymentmethod from "../component/Categories/CategoryPayment";
import Dancingbtn from "../component/Categories/Dancingbtn";
import AnotherMusicEvent from "../component/Categories/Anothermusic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Eventprojects />,
  },

  {
    path: "/category/music",
    element: <Musicbtn />,
  },

  {
    path: "/tickectsection",
    element: <Ticketsbooking />,
  },

  {
    path: "/paymentmethods",
    element: <Categorypaymentmethod />,
  },

  {
    path: "/category/dancing",
    element: <Dancingbtn />,
  },
  {
    path: "/AnotherMusicEvent",
    element: <AnotherMusicEvent />,
  },
]);

export default router;
