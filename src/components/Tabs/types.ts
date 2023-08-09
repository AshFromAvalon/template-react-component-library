export type TabId = string | number;
export type TabTitle = React.ReactNode;
export type TabContent = React.ReactNode;

export type TabsData = {
  id: TabId;
  title: TabTitle;
  content: TabContent;
};
