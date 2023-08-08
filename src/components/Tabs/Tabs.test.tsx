import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Tabs from "./Tabs";

describe("Tabs", () => {
  test("renders the Button component", () => {
    render(<Tabs />);
  });
});
