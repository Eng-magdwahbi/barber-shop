import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  format,
} from "date-fns";
import "./bookRoute.css";
import { useLocation } from "react-router-dom";

export default function BookRoute() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const location = useLocation();
  const { name, price, time } = location.state || {};

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const handlePrev = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNext = () => setCurrentMonth(addMonths(currentMonth, 1));
  const availableDates = ["2025-02-14", "2025-11-24", "2025-02-21"];

  // Generate calendar days between weekStart → weekEnd
  const days = [];
  let day = weekStart;

  while (day <= weekEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="booking-wrapper">
      <div className="booking-card">
        {/* LEFT SIDE */}
        <div className="calendar-left">
          <div className="calendar-header">
            <h3>Haircut</h3>

            <div className="month-nav">
              <button className="nav-btn" onClick={handlePrev}>
                &lt;
              </button>

              <div className="month">
                {format(currentMonth, "MMMM")}{" "}
                <span className="year">{format(currentMonth, "yyyy")}</span>
              </div>

              <button className="nav-btn" onClick={handleNext}>
                &gt;
              </button>
            </div>
          </div>

          {/* Week names */}
          <div className="week-days">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>

          {/* Calendar Days */}
          <div className="days-grid">
            {days.map((dayItem, index) => {
              const formatted = format(dayItem, "d");

              const isCurrentMonth = isSameMonth(dayItem, currentMonth);
              const isToday = isSameDay(dayItem, new Date());
              const isSelected =
                selectedDate && isSameDay(dayItem, selectedDate);

              // تحويل تاريخ اليوم لصيغة string
              const dateString = format(dayItem, "yyyy-MM-dd");

              // هل اليوم متاح؟
              const isAvailable = availableDates.includes(dateString);

              return (
                <div key={index} className="day-wrapper">
                  <button
                    className={
                      "day " +
                      (!isCurrentMonth ? "disabled " : "") +
                      (isToday ? "today " : "") +
                      (isSelected ? "selected " : "") +
                      (isAvailable ? "available " : "not-available ")
                    }
                    onClick={() => {
                      if (isCurrentMonth && isAvailable) {
                        setSelectedDate(dayItem);
                      }
                    }}
                    disabled={!isCurrentMonth || !isAvailable}
                  >
                    {formatted}
                  </button>

                  {/* زر Book يظهر فقط إذا اليوم متاح */}
                  {isAvailable && isSelected && (
                    <button className="book-route-btn">Book</button>
                  )}
                </div>
              );
            })}
          </div>

          <p className="timezone">Time zone (America/Barbados)</p>
        </div>
      </div>
      <div className="right-barber-card">
        <div className="title">
          <h3>Hair Zone</h3>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <div className="">
            <div className="haircut-name-barberPage">{name}</div>
            <div className="haircut-price-barberPage">{price}$</div>
            <div className="haircut-time-barberPage">{time} mins</div>
            <hr />
            <div className="haircut-total-barberPage">
              <h3>Total Price</h3>
              <div className="total-price">{price}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
