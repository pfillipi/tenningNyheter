import { render, screen, fireEvent } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { SubscribeButton } from ".";

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
    signIn: jest.fn(),
  };
});

jest.mock("next/router");

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

  it("redirects to post when user already has a subscription", () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
        },
        activeSubscription: "fake-active-subscription",
        expires: "fake-expires",
      },
      false,
    ]);

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Abonner na!");

    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalled();
  });
});
