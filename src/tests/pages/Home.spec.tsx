import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "10.00kr" }} />);

    expect(screen.getByText("/10.00kr/")).toBeInTheDocument();
  });
});
