import { Footer } from "./footer";
import { screen, render } from "@testing-library/react";

describe("Given header component", () => {
  test("renders the following element", () => {
    render(<Footer></Footer>);
    const address = screen.getByRole("contact");
    expect(address).toBeInTheDocument();
  });
});
