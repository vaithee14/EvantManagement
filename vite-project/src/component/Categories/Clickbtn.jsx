import "./Click.css";
import { useParams } from "react-router-dom";
import rockFestImage from "../../assets/music2.jpg";
import JazzNight from "../../assets/eventmusic2.jpg";
import Festival from "../../assets/music3.jpg";
import Classical from "../../assets/music4.jpg";
import PopExtravaganza from "../../assets/music5.jpg";
import HipHopBash from "../../assets/music6.jpg";
import CountryLive from "../../assets/music7.jpg";
import ReggaeVibes from "../../assets/music8.jpg";
import IndieNight from "../../assets/music9.jpg"
import MetalMayhem from "../../assets/music10.jpg"

export default function Clickbtn() {
  const { categoryName } = useParams();

  const events = [
    {
      id: 1,
      image: rockFestImage,
      title: "Rock Fest 2025",
      description: "Experience the best rock bands live!",
      location: "New York, NY",
      date: "March 10, 2025",
      time: "7:00 PM",
    },
    {
      id: 2,
      image: JazzNight,
      title: "Jazz Night",
      description: "A soulful evening with jazz legends.",
      location: "Chicago, IL",
      date: "April 15, 2025",
      time: "8:00 PM",
    },
    {
      id: 3,
      image: Festival,
      title: "EDM Festival",
      description: "Dance to the beats of top DJs.",
      location: "Las Vegas, NV",
      date: "May 20, 2025",
      time: "9:00 PM",
    },
    {
      id: 4,
      image: Classical,
      title: "Classical Symphony",
      description: "A night of timeless classical music.",
      location: "Boston, MA",
      date: "June 5, 2025",
      time: "6:30 PM",
    },
    {
      id: 5,
      image: PopExtravaganza,
      title: "Pop Extravaganza",
      description: "Chart-topping pop stars perform live.",
      location: "Los Angeles, CA",
      date: "July 12, 2025",
      time: "8:30 PM",
    },
    {
      id: 6,
      image: HipHopBash,
      title: "Hip-Hop Bash",
      description: "Top rappers and hip-hop artists in one show.",
      location: "Atlanta, GA",
      date: "August 25, 2025",
      time: "7:45 PM",
    },
    {
      id: 7,
      image: CountryLive,
      title: "Country Live",
      description: "Country music at its finest!",
      location: "Nashville, TN",
      date: "September 18, 2025",
      time: "5:00 PM",
    },
    {
      id: 8,
      image: ReggaeVibes,
      title: "Reggae Vibes",
      description: "Feel the reggae rhythms and relax.",
      location: "Miami, FL",
      date: "October 9, 2025",
      time: "6:00 PM",
    },
    {
      id: 9,
      image:IndieNight ,
      title: "Indie Night",
      description: "A special event for indie music lovers.",
      location: "Seattle, WA",
      date: "November 14, 2025",
      time: "7:30 PM",
    },
    {
      id: 10,
      image: MetalMayhem,
      title: "Metal Mayhem",
      description: "Headbang with the best metal bands.",
      location: "Denver, CO",
      date: "December 22, 2025",
      time: "9:15 PM",
    },
  ];

  return (
    <section className="main-events-section">
      <h1 className="music-title-card">Music Events</h1>
      <div className="event-grid-card">
        {events.map((eventdetails) => (
          <div className="music-event-card" key={eventdetails.id}>
            <img
              src={eventdetails.image}
              alt={eventdetails.title}
              className="event-image"
            />

            <div>
              <h2 className="music-event-title">{eventdetails.title}</h2>
              <p className="event-descriptions">{eventdetails.description}</p>
              <p className="music-event-info">
                <strong>Location:</strong> {eventdetails.location}
              </p>
              <p className="music-event-info">
                <strong>Date:</strong> {eventdetails.date}
              </p>
              <p className="music-event-info">
                <strong>Time:</strong> {eventdetails.time}
              </p>
              <button className="music-book-btn">Book Ticket</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
