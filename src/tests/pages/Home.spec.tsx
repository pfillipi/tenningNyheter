import { render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("next/router/index");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "10.00kr" }} />);

    expect(screen.getByText("for 10.00kr måned")).toBeInTheDocument();
  });
});
