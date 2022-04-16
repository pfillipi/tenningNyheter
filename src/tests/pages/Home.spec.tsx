import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import { stripe } from "../../services/stripe";
import Home from "../../pages";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});
jest.mock("../../services/stripe");

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "10.00kr" }} />);

    expect(screen.getByText("for 10.00kr måned")).toBeInTheDocument();
  });

  it("loads initial data", () => {
    const stripeMocked = mocked(stripe.prices.retrieve);

    stripeMocked;
  });
});
