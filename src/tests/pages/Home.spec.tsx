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
    render(<Home product={{ priceId: "fake-price-id", amount: "10.00r" }} />);

    expect(screen.getByText("for 10.00kr måned")).toBeInTheDocument();
  });

  it("loads initial data", () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve);

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: "fake-price-id",
      unit_amount: 1000,
    } as any);
  });
});
