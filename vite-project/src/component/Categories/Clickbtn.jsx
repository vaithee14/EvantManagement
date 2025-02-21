import "./Click.css";
import { useNavigate, useParams } from "react-router-dom";
import rockFestImage from "../../assets/rock.jpg";
import JazzNight from "../../assets/jazz.jpg";
import Festival from "../../assets/festival.jpg";
import Classical from "../../assets/classical.jpg";
import PopExtravaganza from "../../assets/pop.jpg";
import HipHopBash from "../../assets/hiphop.jpg";
import CountryLive from "../../assets/Countrylive.jpg";
import ReggaeVibes from "../../assets/singer5.jpg";
import IndieNight from "../../assets/indie.jpg";
import MetalMayhem from "../../assets/metal.jpg";

export default function Clickbtn() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      category: "music",
      image: rockFestImage,
      title: "Rock Fest 2025",
      description: "Experience the best rock bands live!",
      location: "New York, NY",
      date: "March 10, 2025",
      time: "7:00 PM",
    },
    {
      id: 2,
      category: "music",
      image: JazzNight,
      title: "Jazz Night",
      description: "A soulful evening with jazz legends.",
      location: "Chicago, IL",
      date: "April 15, 2025",
      time: "8:00 PM",
    },
    {
      id: 3,
      category: "music",
      image: Festival,
      title: "EDM Festival",
      description: "Dance to the beats of top DJs.",
      location: "Las Vegas, NV",
      date: "May 20, 2025",
      time: "9:00 PM",
    },
    {
      id: 4,
      category: "music",
      image: Classical,
      title: "Classical Symphony",
      description: "A night of timeless classical music.",
      location: "Boston, MA",
      date: "June 5, 2025",
      time: "6:30 PM",
    },
    {
      id: 5,
      category: "music",
      image: PopExtravaganza,
      title: "Pop Extravaganza",
      description: "Chart-topping pop stars perform live.",
      location: "Los Angeles, CA",
      date: "July 12, 2025",
      time: "8:30 PM",
    },
    {
      id: 6,
      category: "music",
      image: HipHopBash,
      title: "Hip-Hop Bash",
      description: "Top rappers and hip-hop artists in one show.",
      location: "Atlanta, GA",
      date: "August 25, 2025",
      time: "7:45 PM",
    },
    {
      id: 7,
      category: "music",
      image: CountryLive,
      title: "Country Live",
      description: "Country music at its finest!",
      location: "Nashville, TN",
      date: "September 18, 2025",
      time: "5:00 PM",
    },
    {
      id: 8,
      category: "music",
      image: ReggaeVibes,
      title: "Reggae Vibes",
      description: "Feel the reggae rhythms and relax.",
      location: "Miami, FL",
      date: "October 9, 2025",
      time: "6:00 PM",
    },
    {
      id: 9,
      category: "music",
      image: IndieNight,
      title: "Indie Night",
      description: "A special event for indie music lovers.",
      location: "Seattle, WA",
      date: "November 14, 2025",
      time: "7:30 PM",
    },
    {
      id: 10,
      category: "music",
      image: MetalMayhem,
      title: "Metal Mayhem",
      description: "Headbang with the best metal bands.",
      location: "Denver, CO",
      date: "December 22, 2025",
      time: "9:15 PM",
    },
  ];
  // filter the events
  const fiteredEvents = events.filter(
    (event) => event.category === categoryName
  );

  return (
    <section className="main-events-section">
      <h1 className="music-title-card">
        {categoryName ? `${categoryName} Events` : "Events"}
      </h1>

      <div className="event-grid-card">
        {fiteredEvents.length > 0 ? (
          fiteredEvents.map((eventdetails) => (
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
                <button
                  className="music-book-btn"
                  onClick={() => navigate(`/book/${eventdetails.id}`)}
                >
                  Book Ticket
                </button>
              </div>
            
              
            </div>
          ))
        ) : (
          <p className="no-events">No events available {categoryName}.</p>
        )}
      </div>
    </section>
  );
}
