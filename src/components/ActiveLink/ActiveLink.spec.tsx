import { render } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {});

test("active link renders correctly", () => {
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Huset</a>
    </ActiveLink>
  );

  debug();
});
