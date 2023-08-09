import React from "react";
import "./Tabs.css";
import { TabId, TabTitle } from "./types";

export interface TabProps {
  activeTab: TabId;
  id: TabId;
  title: TabTitle;
  activeColor?: string;
  onClick: (id: TabId) => void;
}

const Tab = ({ activeTab, id, title, activeColor, onClick }: TabProps) => {
  const isActive = activeTab === id;

  return (
    <li
      className={`tab ${isActive && "active-tab"}`}
      style={activeColor ? { borderBottomColor: activeColor } : {}}
      onClick={() => onClick(id)}
    >
      {title}
    </li>
  );
};

export default Tab;
