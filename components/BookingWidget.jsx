"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Loader2 } from "lucide-react";

function dateKey(d) {
  return d.toISOString().slice(0, 10);
}

function nextDays(count) {
  const days = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setUTCDate(now.getUTCDate() + i);
    days.push(d);
  }
  return days;
}

export default function BookingWidget() {
  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const days = useMemo(() => nextDays(7), []);

  const [selectedDate, setSelectedDate] = useState(dateKey(days[0]));
  const [slots, setSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState(null);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booking, setBooking] = useState("idle"); // idle | submitting | success | error
  const [bookingError, setBookingError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setSelectedSlot(null);
    setSlotsLoading(true);
    setSlotsError(null);

    fetch(`/api/cal/slots?date=${selectedDate}&timeZone=${encodeURIComponent(timeZone)}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.error) {
          setSlotsError(data.error);
          setSlots([]);
        } else {
          setSlots(data.slots || []);
        }
      })
      .catch(() => {
        if (!cancelled) setSlotsError("Could not reach the scheduler.");
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedDate, timeZone]);

  async function handleBook(event) {
    event.preventDefault();
    setBooking("submitting");
    setBookingError(null);

    try {
      const res = await fetch("/api/cal/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start: selectedSlot.start, name, email, timeZone }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setBookingError(data.error || "Could not book that slot.");
        setBooking("error");
        return;
      }
      setBooking("success");
    } catch {
      setBookingError("Could not reach the scheduler.");
      setBooking("error");
    }
  }

  if (booking === "success") {
    return (
      <div className="scheduler neo-card reveal">
        <div className="scheduler-success">
          <Check size={32} />
          <h3>You&apos;re booked.</h3>
          <p>
            Confirmed for{" "}
            {new Date(selectedSlot.start).toLocaleString(undefined, {
              weekday: "long",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
            . A calendar invite is on its way to {email}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="scheduler neo-card reveal">
      <p className="scheduler-label">Pick a day</p>
      <div className="scheduler-dates">
        {days.map((d) => {
          const key = dateKey(d);
          return (
            <button
              key={key}
              type="button"
              className={`date-pill ${selectedDate === key ? "active" : ""}`}
              onClick={() => setSelectedDate(key)}
            >
              <span>{d.toLocaleDateString(undefined, { weekday: "short" })}</span>
              <strong>{d.getUTCDate()}</strong>
            </button>
          );
        })}
      </div>

      <p className="scheduler-label">Pick a time ({timeZone})</p>
      {slotsLoading && (
        <div className="scheduler-status">
          <Loader2 size={18} className="spin" /> Loading times…
        </div>
      )}
      {!slotsLoading && slotsError && <div className="scheduler-status">{slotsError}</div>}
      {!slotsLoading && !slotsError && slots.length === 0 && (
        <div className="scheduler-status">No open times this day — try another.</div>
      )}
      {!slotsLoading && !slotsError && slots.length > 0 && (
        <div className="scheduler-slots">
          {slots.map((slot) => (
            <button
              key={slot.start}
              type="button"
              className={`slot-btn ${selectedSlot?.start === slot.start ? "active" : ""}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {new Date(slot.start).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}
            </button>
          ))}
        </div>
      )}

      {selectedSlot && (
        <form className="scheduler-form" onSubmit={handleBook}>
          <label htmlFor="booking-name">Your Name</label>
          <input
            id="booking-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
          />
          <label htmlFor="booking-email">Email Address</label>
          <input
            id="booking-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
          />
          {booking === "error" && <div className="scheduler-status error">{bookingError}</div>}
          <button className="btn btn-primary btn-large neo-btn" type="submit" disabled={booking === "submitting"}>
            {booking === "submitting" ? "Booking…" : "Confirm Booking"}
          </button>
        </form>
      )}
    </div>
  );
}
