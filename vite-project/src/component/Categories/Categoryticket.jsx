import { useNavigate, useParams } from "react-router-dom";
import firstSinger from "../../assets/singer1.jpg";
import secondSinger from "../../assets/singer2.jpg";
import singer3 from "../../assets/3singer.jpg";
import singer4 from "../../assets/singer4.jpg";
import singer5 from "../../assets/singer5.jpg";
import singer6 from "../../assets/singer6.jpg";

export default function TicketsBooking() {
  const { eventId } = useParams();
  const paymentnav = useNavigate();

  const eventDetails = {
    title: "Live Music Festival 2025",
    description:
      "Experience an unforgettable night of live performances by top artists from around the world. Get ready for amazing music, energetic vibes, and a night to remember!",
    location: "Madison Square Garden, New York, NY",
    date: "April 20, 2025",
    time: "7:00 PM",
  };

  const singers = [
    { name: "John Legend", image: firstSinger },
    { name: "Ariana Grande", image: secondSinger },
    { name: "Bruno Mars", image: singer3 },
    { name: "Dua Lipa", image: singer4 },
    { name: "Ed Sheeran", image: singer5 },
    { name: "Taylor Swift", image: singer6 },
  ];

  const buynow = () => {
    paymentnav("../paymentmethods");
  };

  return (
    <section className="w-full min-h-screen p-6 flex flex-col items-center bg-gray-100">
      <h1 className="bg-[#ee526f] text-white text-center text-xl md:text-2xl font-bold py-3 w-full">
        TICKETS BOOKING
      </h1>

      <div className="bg-white shadow-md p-6 mt-6 max-w-[800px] w-full rounded-lg">
        <h2 className="text-black text-3xl font-bold text-center">
          {eventDetails.title}
        </h2>
        <p className="text-gray-600 text-center mt-2">
          {eventDetails.description}
        </p>
        <div className="mt-4 text-gray-700 text-center">
          <p>
            <strong> Location:</strong> {eventDetails.location}
          </p>
          <p>
            <strong> Date:</strong> {eventDetails.date}
          </p>
          <p>
            <strong> Time:</strong> {eventDetails.time}
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-black text-3xl font-bold">OUR FEATURED ARTISTS</h2>
        <hr className="w-[200px] h-[3px] bg-[#ee526f] mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[900px] mt-6 mx-auto">
        {singers.map((singer, index) => (
          <div key={index} className="text-center">
            <img
              src={singer.image}
              alt={singer.name}
              className="w-full h-[250px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-lg font-semibold text-gray-800">
              {singer.name}
            </p>
          </div>
        ))}
      </div>

      <div className="p-6 w-full flex justify-center">
        <button
          type="button"
          className="text-white text-center p-4 bg-[#ee526f] hover:bg-[#d4425b] transition-all duration-300 text-xl font-bold mt-6 w-full max-w-[750px] rounded-lg shadow-lg cursor-pointer"
          onClick={buynow}
        >
          BUY TICKETS NOW
        </button>
      </div>
    </section>
  );
}
