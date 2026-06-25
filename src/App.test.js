import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Reserve a Table heading", () => {
  render(<App />);
  const headings = screen.getAllByText(/Reserve a Table/i);
  expect(headings.length).toBeGreaterThan(0);
});

test("renders BookingForm fields", () => {
  render(<App />);
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Make Your Reservation/i })).toBeInTheDocument();
});

test("shows validation message when fields are empty", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });
  fireEvent.click(submitButton);
  
  const errorMessage = screen.getByText(/Please fill in all fields before submitting./i);
  expect(errorMessage).toBeInTheDocument();
});

test("shows successful booking message", () => {
  render(<App />);
  
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });

  fireEvent.change(dateInput, { target: { value: "2026-10-10" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  fireEvent.click(submitButton);

  const successMessage = screen.getByText(/Your table has been reserved successfully!/i);
  expect(successMessage).toBeInTheDocument();
});
