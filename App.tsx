import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { SectionRenderer } from './components/SectionRenderer';
import { ThreatExplorer } from './components/ThreatExplorer';
import { GlobalSearch } from './components/GlobalSearch';
import { SECTIONS } from './constants';
import { ViewType } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DOCUMENT);
  const [currentSectionId, setCurrentSectionId] = useState<string>(SECTIONS[0].id);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle initial load of threat table if needed
  const handleSectionSelect = (id: string) => {
    setCurrentSectionId(id);
    if (id === 'annex-5') {
      setCurrentView(ViewType.THREAT_EXPLORER);
    } else {
      setCurrentView(ViewType.DOCUMENT);
    }
    window.scrollTo(0, 0);
  };

  const handleResultClick = (id: string) => {
    handleSectionSelect(id);
  };

  const currentSection = SECTIONS.find(s => s.id === currentSectionId);

  const renderContent = () => {
    if (currentView === ViewType.SEARCH) {
      return <GlobalSearch onResultClick={handleResultClick} />;
    }
    if (currentView === ViewType.THREAT_EXPLORER) {
      return <ThreatExplorer />;
    }
    if (currentSection) {
      return <SectionRenderer section={currentSection} />;
    }
    return <div>Section not found</div>;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        currentSectionId={currentSectionId}
        onSectionSelect={handleSectionSelect}
        currentView={currentView}
        onViewChange={setCurrentView}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center">
          <button onClick={() => setIsMobileOpen(true)} className="mr-4">
            <Menu className="text-slate-600" />
          </button>
          <span className="font-bold text-slate-800">UNECE R155</span>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;