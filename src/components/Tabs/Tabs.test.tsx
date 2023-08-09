import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";

import Tabs from "./Tabs";

const mockTabs = [
  {
    id: "tabOne",
    title: "Tab One",
    content: <div role="tab-content">Hello Tab One</div>,
  },
  {
    id: "tabTwo",
    title: "Tab Two",
    content: <div role="tab-content">Hello Tab Two</div>,
  },
  {
    id: "tabThree",
    title: "Tab Three",
    content: <div role="tab-content">Hello Tab Three</div>,
  },
];

describe("Tabs", () => {
  test("renders the Tabs component", () => {
    render(<Tabs data={mockTabs} />);

    const tabList = screen.getByRole("list", { name: /tabs/i });
    const tabItems = screen.getAllByRole("listitem");
    const tabOne = within(tabList).getByText("Tab One");

    expect(tabList).toBeInTheDocument();
    expect(tabItems).toHaveLength(3);
    expect(tabOne).toBeInTheDocument();
  });

  test("display active tab content", async () => {
    render(<Tabs data={mockTabs} />);

    const tabList = screen.getByRole("list", { name: /tabs/i });
    const tabOne = within(tabList).getByText("Tab One");

    await user.click(tabOne);

    expect(await screen.findByRole("tab-content")).toHaveTextContent(
      "Hello Tab One"
    );
  });

  test("have the correct style for tab", () => {
    render(<Tabs data={mockTabs} tabStyle="my-tab-style" />);

    const tabItems = screen.getAllByRole("listitem");

    tabItems.forEach((item) => {
      expect(item).toHaveClass("my-tab-style");
    });
  });

  test("have the correct style for tabList", () => {
    render(<Tabs data={mockTabs} containerStyle="my-container-style" />);

    const tabList = screen.getByRole("list", { name: /tabs/i });

    expect(tabList).toHaveClass("my-container-style");
  });

  test("have the correct style for active tab", async () => {
    render(<Tabs data={mockTabs} activeTabStyle="active" />);

    const tabList = screen.getByRole("list", { name: /tabs/i });
    const tabOne = within(tabList).getByText("Tab One");

    await user.click(tabOne);

    expect(tabOne).toHaveClass("active");
  });
});
