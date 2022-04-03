import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useSession } from "next-auth/client";
import { SubscribeButton } from ".";

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});
