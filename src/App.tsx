import React, { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OverviewPage from './pages/OverviewPage';
import ChatbotPage from './pages/ChatbotPage';
import LeadScoringPage from './pages/LeadScoringPage';
import PredictiveInsightsPage from './pages/PredictiveInsightsPage';
import CampaignsPage from './pages/CampaignsPage';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Keep these simple page components here for now
const AnalyticsPage = () => (
  <div className="mb-8">
    <h1 className="text-2xl font-bold text-[#b7cd51]">Analytics</h1>
    <p className="text-[#4e557f]">View detailed analytics and reports.</p>
  </div>
);

const SettingsPage = () => (
  <div className="mb-8">
    <h1 className="text-2xl font-bold text-[#b7cd51]">Settings</h1>
    <p className="text-[#4e557f]">Manage your account and application settings.</p>
  </div>
);

function App() {
  return (
    <div className="flex bg-[#14123a] min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-[#14123a]/95">
        {/* Add Header Section */}
        <header className="p-4 flex items-center justify-between border-b border-[#2a2d52]">
          <div className="flex items-center bg-[#1e1b4b] rounded-lg px-3 py-2 w-64">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search..."
              className="ml-2 bg-transparent border-none focus:outline-none text-gray-300 w-full"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-gray-300">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            <button className="p-2 hover:bg-[#2a2d52] rounded-full">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </header>

        <div className="p-8">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/lead-scoring" element={<LeadScoringPage />} />
            <Route path="/insights" element={<PredictiveInsightsPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;