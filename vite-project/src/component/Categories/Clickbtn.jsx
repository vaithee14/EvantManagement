import "./Click.css"
import { useParams } from "react-router-dom";
import rockFestImage from "../../assets/music2.jpg"
import event2 from "../../assets/eventmusic2.jpg"

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
      image: event2,
      title: "Jazz Night",
      description: "A soulful evening with jazz legends.",
      location: "Chicago, IL",
      date: "April 15, 2025",
      time: "8:00 PM",
    },
    {
      id: 3,
      image: "",
      title: "EDM Festival",
      description: "Dance to the beats of top DJs.",
      location: "Las Vegas, NV",
      date: "May 20, 2025",
      time: "9:00 PM",
    },
    {
      id: 4,
      image: "",
      title: "Classical Symphony",
      description: "A night of timeless classical music.",
      location: "Boston, MA",
      date: "June 5, 2025",
      time: "6:30 PM",
    },
    {
      id: 5,
      image: "",
      title: "Pop Extravaganza",
      description: "Chart-topping pop stars perform live.",
      location: "Los Angeles, CA",
      date: "July 12, 2025",
      time: "8:30 PM",
    },
    {
      id: 6,
      image: "",
      title: "Hip-Hop Bash",
      description: "Top rappers and hip-hop artists in one show.",
      location: "Atlanta, GA",
      date: "August 25, 2025",
      time: "7:45 PM",
    },
    {
      id: 7,
      image: "",
      title: "Country Live",
      description: "Country music at its finest!",
      location: "Nashville, TN",
      date: "September 18, 2025",
      time: "5:00 PM",
    },
    {
      id: 8,
      image: "",
      title: "Reggae Vibes",
      description: "Feel the reggae rhythms and relax.",
      location: "Miami, FL",
      date: "October 9, 2025",
      time: "6:00 PM",
    },
    {
      id: 9,
      image: "",
      title: "Indie Night",
      description: "A special event for indie music lovers.",
      location: "Seattle, WA",
      date: "November 14, 2025",
      time: "7:30 PM",
    },
    {
      id: 10,
      image: "",
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
        {events.map((event) => (

          <div className="music-event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h2 className="music-event-title">{event.title}</h2>
            <p className="event-descriptions">{event.description}</p>
            <p className="music-event-info">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="music-event-info" >
              <strong>Date:</strong> {event.date}
            </p>
            <p className="music-event-info">
              <strong>Time:</strong> {event.time}
            </p>
            <button className="music-book-btn">Book Ticket</button>
          </div>
        ))}
      </div>
    </section>
  );
}
