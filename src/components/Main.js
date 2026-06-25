import BookingPage from "./BookingPage";

function Main() {
  return (
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

      <BookingPage />
    </main>
  );
}

export default Main;
