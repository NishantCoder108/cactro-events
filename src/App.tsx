import { useState } from "react";

import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <BookFlight />
      </div>
    </>
  );
}

const BookFlight = () => {
  const [flightType, setFlightType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const todayDate = new Date().toISOString().split("T")[0];

  const isValidDate = (date: string) => {
    if (!departureDate || departureDate < todayDate) return false;

    if (flightType === "return" && (!returnDate || returnDate < todayDate)) {
      return false;
    }

    return true;
  };

  const handleFlightBooking = () => {
    if (flightType === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}`);
    } else {
      alert(
        `You have booked a return flight from ${departureDate} to ${returnDate}`
      );
    }
  };
  return (
    <>
      <div>
        <h1>Book Flight</h1>

        <label htmlFor="one-way"> Your Flight Type </label>
        <select
          id="one-way"
          name="one-way"
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
        >
          <option value="one-way">One Way</option>
          <option value="return">return</option>
        </select>

        <h1> Departure Date</h1>
        <label htmlFor="one-way"> Your Flight Type </label>
        <input
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          type="date"
          id="departure-date"
          name="departure-date"
        />

        {flightType === "return" && (
          <label>
            <h1>Return Date</h1>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              name="return-date"
            />
          </label>
        )}

        <button
          onClick={handleFlightBooking}
          disabled={
            !isValidDate(departureDate) ||
            (flightType === "return" && !isValidDate(returnDate))
          }
        >
          Book Flight
        </button>
      </div>
    </>
  );
};
