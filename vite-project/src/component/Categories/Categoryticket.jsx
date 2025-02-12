import { useParams } from "react-router-dom";
import firstSinger from "../../assets/singer1.jpg";
import secondSinger from "../../assets/singer2.jpg";
import singer3 from "../../assets/3singer.jpg"
import singer4 from "../../assets/singer4.jpg"

export default function TicketsBooking() {
  const { eventId } = useParams();

  return (
    <section className="w-full min-h-[300px] p-4 flex flex-col items-center">
      {/* Title with background color */}
      <h1 className="bg-[#ee526f] text-white text-center text-xl font-bold py-2 w-full">
        TICKETS BOOKING
      </h1>

      {/* Title + Horizontal Line */}
      <div className="text-center mt-4">
        <h2 className="text-black text-3xl font-bold">OUR SINGERS</h2>
        <hr className="w-[200px] h-[3px] bg-[#ee526f] mx-auto mt-2" />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-0 w-full max-w-[900px] mt-4">
        <img src={firstSinger} className="w-full h-[250px] object-cover" />
        <img src={secondSinger} className="w-full h-[250px] object-cover" />
        <img src={singer3} className="w-full h-[250px] object-cover" />
        <img src={singer4} className="w-full h-[250px] object-cover" />
        <img src={firstSinger} className="w-full h-[250px] object-cover" />
        <img src={secondSinger} className="w-full h-[250px] object-cover" />
      </div>
    </section>
  );
}
