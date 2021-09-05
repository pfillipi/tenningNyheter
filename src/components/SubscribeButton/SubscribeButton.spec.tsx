import { render, screen } from "@testing-library/react";
// import { mocked } from "ts-jest/utils";
// import { useSession } from "next-auth/client";
import { SubscribeButton } from ".";

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });
});
