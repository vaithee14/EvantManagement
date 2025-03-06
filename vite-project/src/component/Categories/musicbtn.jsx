import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchMusicEvents } from "../slice/music";
import { useDispatch, useSelector } from "react-redux";

export default function Musicbtn() {
  // const [musicEvent, setmusicEvent] = useState([]);

  const SectionNavigate = useNavigate();
  const Anotherevent = useNavigate();

  const dispatch = useDispatch();
  const { musicEvents, status, error } = useSelector((state) => state.music);
  console.log(musicEvents, "musicEvents");

  // get method
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMusicEvents()); // Dispatch Redux action to fetch data
    }
  }, [status, dispatch]);
  // useEffect(() => {
  //   const FetchMusicEvents = async () => {
  //     try {
  //       const musicEvents = await axios.get(
  //         "http://localhost:4050/api/music/getMusic"
  //       );
  //       setmusicEvent(musicEvents.data);
  //     } catch (Error) {
  //       console.error(Error);
  //     }
  //   };
  //   FetchMusicEvents();
  // }, []);
  // post method
  const addMusicEvent = async () => {
    try {
      const newEvent = { title, description, image, location, date, time };
      const response = await axios.post(
        "http://localhost:4050/api/music/addMusic",
        newEvent
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const moveTicketSection = () => {
    SectionNavigate("../tickectsection");
  };

  const clickaanotherbtn = () => {
    Anotherevent("../AnotherMusicEvent");
  };

  return (
    <section className="p-6">
      <h1 className="text-white bg-[#ee526f] text-center py-2 text-2xl font-bold uppercase">
        Music Events
      </h1>
      <div>
        <button className="px-5 bg-amber-400" onClick={clickaanotherbtn}>
          Click Me
        </button>
      </div>

      <div className="flex flex-col items-center gap-6 mt-6">
        {musicEvents.map((events) => (
          <div
            key={events._id}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg w-[90%] md:w-[80%] p-6"
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={events.image}
                alt={events.title}
                className="w-[30%] md:w-[100%] h-40 md:h-56 object-cover rounded-md"
              />
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-2 mt-4 md:mt-0 md:pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {events.title}
              </h3>
              <p className="text-gray-700">{events.description}</p>
              <p className="text-gray-600">
                <strong>Location:</strong> {events.location}
              </p>
              <p className="text-gray-600">
                <strong>Date:</strong> {events.date}
              </p>
              <p className="text-gray-600">
                <strong>Time:</strong> {events.time}
              </p>
              <button
                className="mt-4 bg-[#ee526f] hover:bg-[#d9432a] text-white font-bold py-2 px-4 rounded-md w-full md:w-auto transition duration-300"
                onClick={moveTicketSection}
              >
                Book Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
