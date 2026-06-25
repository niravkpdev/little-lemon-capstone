import { useReducer } from "react";
import BookingForm from "./BookingForm";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same times regardless of the date
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <section id="booking" className="booking">
      <h2>Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
