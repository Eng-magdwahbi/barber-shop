import { useState } from "react";
import "./book.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

const days = [
  { name: "Sunday", hours: null },
  { name: "Monday", hours: "10 AM - 5 PM" },
  { name: "Tuesday", hours: "10 AM - 5 PM" },
  { name: "Wednesday", hours: "10 AM - 5 PM" },
  { name: "Thursday", hours: "10 AM - 5 PM" },
  { name: "Friday", hours: "10 AM - 5 PM" },
  { name: "Saturday", hours: "10 AM - 5 PM" },
];

function getCurrentDayIndex() {
  return new Date().getDay();
}

function isOpenNow(dayIndex) {
  // simple open check: treat hours "10 AM - 5 PM" as 10..17. This function can be extended.
  const day = days[dayIndex];
  if (!day || !day.hours) return false;
  const now = new Date();
  const hour = now.getHours(); // 0..23
  // hard-coded range used in example data:
  return hour >= 10 && hour < 17;
}

export default function Book() {
  const [showContact, setShowContact] = useState(false);
  const todayIndex = getCurrentDayIndex();
  const openNow = isOpenNow(todayIndex);
  const navigate = useNavigate();
  // find next opening day for simple message (used when closed)
  function findNextOpen(indexStart = todayIndex + 1) {
    for (let i = 0; i < 7; i++) {
      const idx = (indexStart + i) % 7;
      if (days[idx].hours) return days[idx];
    }
    return null;
  }

  const nextOpen = findNextOpen();

  return (
    <div className="schedule-card">
      <div className="card-top">
        <h2 className="title">O Zone</h2>
        <button
          className="book-btn"
          onClick={() => {
            navigate("/servicesRoute");
          }}
        >
          Book
        </button>
      </div>

      <div className="status-row">
        <span className="status-icon">⏱</span>
        <div className="status-text">
          <strong>{openNow ? "Open" : "Closed"}</strong>
          {!openNow && nextOpen ? (
            <span className="muted">
              {" "}
              · Opens {nextOpen.hours?.split(" - ")[0]}{" "}
              {nextOpen.name.slice(0, 3)}
            </span>
          ) : null}
        </div>
      </div>

      <div className="days-list">
        {days.map((d, idx) => {
          const isToday = idx === todayIndex;
          return (
            <div
              key={d.name}
              className={`day-row ${isToday ? "today" : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              <div className={`day-name ${isToday ? "bold" : ""}`}>
                {d.name}
              </div>
              <div className={`day-hours ${!d.hours ? "closed" : ""}`}>
                {d.hours || "Closed"}
              </div>
            </div>
          );
        })}
      </div>

      <div className="timezone">Time zone (Atlantic Standard Time)</div>

      <div className="contact">
        <button
          className="contact-toggle"
          onClick={() => setShowContact(!showContact)}
        >
          Contact us {showContact ? "˄" : "˅"}
        </button>
      </div>

      {showContact && (
        <div className="contact-items">
          <button
            className="contact-btn"
            onClick={() => {
              navigator.clipboard.writeText("+1 246 262-0000");
              alert("Phone number copied!");
            }}
          >
            <PhoneIcon style={{ fontSize: 18 }} /> Phone
          </button>

          <button
            className="contact-btn"
            onClick={() => {
              navigator.clipboard.writeText("magdwahbe@gmail.com");
              alert("Email copied!");
            }}
          >
            <EmailIcon style={{ fontSize: 18 }} /> Email
          </button>
        </div>
      )}
    </div>
  );
}
