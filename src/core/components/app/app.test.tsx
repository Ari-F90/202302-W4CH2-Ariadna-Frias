import { render, screen } from "@testing-library/react";
import { App } from "./app";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Form/i);
  expect(linkElement).toBeInTheDocument();
});
