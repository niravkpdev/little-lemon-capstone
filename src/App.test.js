import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Reserve a Table heading", () => {
  render(<App />);
  const heading = screen.getAllByText(/Reserve a Table/i)[0]; // Since there's a link and a heading with this text
  expect(heading).toBeInTheDocument();
});

test("renders booking form submit button", () => {
  render(<App />);
  const button = screen.getByText(/Make Your Reservation/i);
  expect(button).toBeInTheDocument();
});
