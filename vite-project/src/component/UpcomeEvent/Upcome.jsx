import "./Upcome.css";
import { useState } from "react";
import birthday from "../../assets/birthday.jpg";
import musicImg from "../../assets/music.jpg";
import party from "../../assets/grid1.jpg";

export default function UpcomingEvents() {
  const [showTicket, setShowTicket] = useState(false);
  const [showTicket2, setShowTicket2] = useState(false);
  const [showTicket3, setShowTicket3] = useState(false);

  return (
    <>
      <section className="event-main-container">
        <div className="upcoming-border">
          <h1 className="coming-event-head">UPCOMING EVENTS</h1>
        </div>

        <article className="event-card">
          <div className="event-content">
            <h1>BIRTHDAY</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
            <a href="#" className="book-table">
              Read More →
            </a>

            <div className="ticket-btn">
              <button
                type="button"
                className="btn"
                onClick={() => setShowTicket(true)}
              >
                Tickets Booking
              </button>
            </div>
          </div>

          <div className="event-image">
            <img className="event-img" src={birthday} alt="Birthday Party" />
            <div className="event-details">
              <h1 className="event-date">14 Feb</h1>
              <p className="event-location">
                <i className="fa fa-map-marker"></i> New York City
              </p>
            </div>
          </div>
        </article>

        <article className="event-card">
          <div className="event-image">
            <img className="event-img" src={musicImg} alt="Music Event" />
            <div className="event-details">
              <h1 className="event-date">18 Feb</h1>
              <p className="event-location">
                <i className="fa fa-map-marker"></i> Los Angeles
              </p>
            </div>
          </div>
          <div className="event-content">
            <h1>DANCING EVENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="#" className="book-table">
              Read More →
            </a>
            <div className="ticket-btn">
              <button
                type="button"
                className="btn"
                onClick={() => setShowTicket2(true)}
              >
                Tickets Booking
              </button>
            </div>
          </div>
        </article>

        <article className="event-card">
          <div className="event-content">
            <h1>MUSIC EVENT</h1>
            <p>Enjoy a night of mesmerizing music with live performances...</p>
            <a href="#" className="book-table">
              Read More →
            </a>
            <div className="ticket-btn">
              <button
                type="button"
                className="btn"
                onClick={() => setShowTicket3(true)}
              >
                Tickets Booking
              </button>
            </div>
          </div>
          <div className="event-image">
            <img className="event-img" src={party} alt="Music Event" />
            <div className="event-details">
              <h1 className="event-date">27 Feb</h1>
              <p className="event-location">
                <i className="fa fa-map-marker"></i> Los Angeles
              </p>
            </div>
          </div>
        </article>
      </section>

      {showTicket === true && (
        <div className="ticket-modal">
          <div className="ticket-content">
            <i
              className="fa fa-close close-icon"
              onClick={() => setShowTicket(false)}
            ></i>

            <h2 className="tickets-form-heading">Book Your Tickets</h2>
            <section className="registration-form">
              <div>
                <h3 className="event-headings">
                  {" "}
                  Birthday Party Registration:
                </h3>
                <input type="email" placeholder="Enter Your Email" />
                <p>Or</p>
                <input type="text" placeholder="Enter Your Phone Number" />
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
              </div>
            </section>
          </div>
        </div>
      )}

      {showTicket2 === true && (
        <div className="ticket-modal">
          <div className="ticket-content">
            <i
              className="fa fa-close close-icon"
              onClick={() => setShowTicket2(false)}
            ></i>

            <h2 className="tickets-form-heading">Book Your Tickets</h2>
            <section className="registration-form">
              <div>
                <h3 className="event-headings"> Dancing Event Registration:</h3>
                <input type="email" placeholder="Enter Your Email" />
                <p>Or</p>
                <input type="text" placeholder="Enter Your Phone Number" />
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
              </div>
            </section>
          </div>
        </div>
      )}

      {showTicket3 === true && (
        <div className="ticket-modal">
          <div className="ticket-content">
            <i
              className="fa fa-close close-icon"
              onClick={() => setShowTicket3(false)}
            ></i>

            <h2 className="tickets-form-heading">Book Your Tickets</h2>
            <section className="registration-form">
              <div>
                <h3 className="event-headings"> Music Event Registration:</h3>
                <input type="email" placeholder="Enter Your Email" />
                <p>Or</p>
                <input type="text" placeholder="Enter Your Phone Number" />
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
