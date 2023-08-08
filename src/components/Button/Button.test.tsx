import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button>Click</Button>);

    const button = screen.getByRole("button", { name: /click/i });
    expect(button).toBeInTheDocument();
  });
});
