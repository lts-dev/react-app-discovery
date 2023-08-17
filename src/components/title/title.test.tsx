import { render, screen } from "@testing-library/react";
import Title from "./title";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Title />);

    const heading = screen.getAllByTestId("heading");

    expect(heading).toBeTruthy();
  });
});
