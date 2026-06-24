import { useState } from "react";
import "./App.css";

function App() {
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
    <div className="app">
      <header className="header">
        <h1>Little Lemon</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#booking">Reserve a Table</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist.
            </p>
            <a href="#booking" className="primary-button">
              Reserve a Table
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            alt="Restaurant food"
          />
        </section>

        <section id="about" className="about">
          <h2>About Little Lemon</h2>
          <p>
            Little Lemon offers fresh meals, friendly service, and a comfortable
            dining experience for families, friends, and food lovers.
          </p>
        </section>

        <section id="booking" className="booking">
          <h2>Reserve a Table</h2>

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
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
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
        </section>
      </main>

      <footer>
        <p>© 2026 Little Lemon Restaurant</p>
      </footer>
    </div>
  );
}

export default App;
