import React from "react";
import { TabId, TabTitle } from "./types";

export interface TabProps {
  activeTab: TabId;
  id: TabId;
  title: TabTitle;
  onClick: (id: TabId) => void;
  activeTabStyle?: string;
  tabStyle?: string;
}

const Tab = ({
  activeTab,
  id,
  title,
  onClick,
  activeTabStyle,
  tabStyle,
}: TabProps) => {
  const isActive = activeTab === id;
  const tabClassName = tabStyle
    ? `${tabStyle} ${isActive ? activeTabStyle : ""}`
    : "";

  return (
    <li className={tabClassName} onClick={() => onClick(id)}>
      {title}
    </li>
  );
};

export default Tab;
