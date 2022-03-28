import { render, screen, fireEvent } from "@testing-library/react";
import { signIn } from "next-auth/client";
import { mocked } from "ts-jest/utils";
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

    expect(screen.getByText("Abonner na!")).toBeInTheDocument();
  });

  it("redirects user to sign in when not authenticated", () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Abonner na!");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });
});
