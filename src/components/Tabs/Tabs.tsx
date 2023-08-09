import React, { useState } from "react";
import "./Tabs.css";
import Tab from "./Tab";
import { TabId, TabsData } from "./types";

export interface TabsProps {
  data: Array<TabsData>;
  activeColor?: string;
}

const Tabs = ({ data, activeColor }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<TabId>(data[0].id);

  const OnClickTabItem = (tab: TabId) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ol aria-label="tabs" className={`tab-container`}>
        {/* Tab ids */}
        {data.map((tab) => {
          const { id, title } = tab;

          return (
            <Tab
              activeTab={activeTab}
              activeColor={activeColor}
              key={id}
              id={id}
              title={title}
              onClick={OnClickTabItem}
            />
          );
        })}
      </ol>
      {/* Tab content */}
      <>
        {data.map((tab) => {
          if (tab.id !== activeTab) return undefined;
          return tab.content;
        })}
      </>
    </>
  );
};

export default Tabs;
