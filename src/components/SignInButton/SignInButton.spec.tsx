import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/client";
import { SignInButton } from ".";

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    render(<SignInButton />);

    expect(screen.getByText("Logg på med GitHub")).toBeInTheDocument();
  });
});
