import React from 'react';
import { BookOpen, ShieldAlert, Search, Menu, X } from 'lucide-react';
import { SECTIONS } from '../constants';
import { ViewType, Section } from '../types';

interface SidebarProps {
  currentSectionId: string;
  onSectionSelect: (id: string) => void;
  onViewChange: (view: ViewType) => void;
  currentView: ViewType;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSectionId,
  onSectionSelect,
  onViewChange,
  currentView,
  isMobileOpen,
  setIsMobileOpen
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`
        fixed top-0 left-0 h-full bg-slate-900 text-white w-64 z-50 transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-screen overflow-y-auto border-r border-slate-700
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center space-x-2 font-bold text-xl">
            <ShieldAlert className="text-blue-400" />
            <span>UNECE R155</span>
          </div>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden">
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">Tools</h3>
            <button
              onClick={() => { onViewChange(ViewType.SEARCH); setIsMobileOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                currentView === ViewType.SEARCH ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Search size={18} />
              <span>Global Search</span>
            </button>
             <button
              onClick={() => { onSectionSelect('annex-5'); setIsMobileOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-2 mt-2 rounded-lg transition-colors ${
                currentSectionId === 'annex-5' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <ShieldAlert size={18} />
              <span>Threat Explorer</span>
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">Regulation Text</h3>
            <nav className="space-y-1">
              {SECTIONS.filter(s => s.id !== 'annex-5').map((section) => (
                <button
                  key={section.id}
                  onClick={() => { onSectionSelect(section.id); setIsMobileOpen(false); }}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                    currentSectionId === section.id && currentView === ViewType.DOCUMENT
                      ? 'bg-slate-800 text-blue-400 border-l-2 border-blue-400' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 mt-auto">
          <p className="text-xs text-slate-500 text-center">
            UN Regulation No. 155<br/>
            Addendum 154
          </p>
        </div>
      </div>
    </>
  );
};