import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";

test("renders the search bar", () => {
  render(<App />);
  expect(screen.getByRole("button")).toHaveTextContent("Search");
});

test("shows loading text when search clicked", async () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button"));

  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("Loading...");
});
