import { render, testA11y, screen } from "@fuel-ui/test-utils";

import { Button } from "../Button";
import { Stack } from "../Stack";

import { Focus } from "./Focus";

describe("Focus", () => {
  it("a11y", async () => {
    await testA11y(
      <Focus.ArrowNavigator asChild autoFocus>
        <Stack gap="$3" direction="row">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </Focus.ArrowNavigator>
    );
  });

  it("should have focus navigation usings arrows with a single children", async () => {
    const { user } = render(
      <Focus.ArrowNavigator autoFocus>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </Focus.ArrowNavigator>
    );

    expect(screen.getByText("First")).toHaveFocus();
    await user.press("ArrowDown");
    expect(screen.getByText("Second")).toHaveFocus();
    await user.press("ArrowDown");
    expect(screen.getByText("Third")).toHaveFocus();
    await user.press("ArrowUp");
    expect(screen.getByText("Second")).toHaveFocus();
    await user.press("ArrowUp");
    expect(screen.getByText("First")).toHaveFocus();
  });

  it("should have focus navigation usings arrows with multiple children", async () => {
    const { user } = render(
      <Focus.ArrowNavigator asChild autoFocus>
        <Stack gap="$3" direction="row">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </Focus.ArrowNavigator>
    );

    expect(screen.getByText("First")).toHaveFocus();
    await user.press("ArrowDown");
    expect(screen.getByText("Second")).toHaveFocus();
    await user.press("ArrowDown");
    expect(screen.getByText("Third")).toHaveFocus();
    await user.press("ArrowUp");
    expect(screen.getByText("Second")).toHaveFocus();
    await user.press("ArrowUp");
    expect(screen.getByText("First")).toHaveFocus();
  });
});
