import React, { useState } from "react";
import Tab from "./Tab";
import { TabId, TabsData } from "./types";

export interface TabsProps {
  data: Array<TabsData>;
  containerStyle?: string;
  tabStyle?: string;
  activeTabStyle?: string;
}

const Tabs = ({
  data,
  containerStyle,
  tabStyle,
  activeTabStyle,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<TabId>(data[0].id);

  const styles = {
    container: containerStyle,
    tab: tabStyle,
    activeTab: activeTabStyle,
  };

  const OnClickTabItem = (tab: TabId) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ol aria-label="tabs" className={styles.container}>
        {/* Tab ids */}
        {data.map((tab) => {
          const { id, title } = tab;

          return (
            <Tab
              activeTab={activeTab}
              key={id}
              id={id}
              title={title}
              onClick={OnClickTabItem}
              tabStyle={styles.tab}
              activeTabStyle={styles.activeTab}
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
