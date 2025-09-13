import { useState } from 'react';

export const useNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigateToTab = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return {
    activeTab,
    navigateToTab,
  };
};
