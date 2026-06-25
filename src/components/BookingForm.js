import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.guests || !formData.occasion) {
      setMessage("Please fill in all fields before submitting.");
      return;
    }

    if (Number(formData.guests) < 1 || Number(formData.guests) > 10) {
      setMessage("Number of guests must be between 1 and 10.");
      return;
    }

    setMessage("Your table has been reserved successfully!");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        id="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Family Dinner">Family Dinner</option>
      </select>

      <button type="submit">Make Your Reservation</button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
}

export default BookingForm;
