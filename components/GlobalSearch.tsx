import React, { useState, useEffect } from 'react';
import { SECTIONS, THREATS_DATA } from '../constants';
import { Search, ChevronRight } from 'lucide-react';
import { Section } from '../types';

interface GlobalSearchProps {
  onResultClick: (sectionId: string) => void;
}

interface SearchResult {
  id: string;
  title: string;
  preview: string;
  type: 'Section' | 'Threat';
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ onResultClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search Sections
    SECTIONS.forEach(section => {
      // Check title
      if (section.title.toLowerCase().includes(lowerQuery)) {
        newResults.push({
          id: section.id,
          title: section.title,
          preview: 'Section Header',
          type: 'Section'
        });
      } 
      // Check content string
      else if (typeof section.content === 'string' && section.content.toLowerCase().includes(lowerQuery)) {
        newResults.push({
            id: section.id,
            title: section.title,
            preview: `...${section.content.substring(section.content.toLowerCase().indexOf(lowerQuery), section.content.toLowerCase().indexOf(lowerQuery) + 60)}...`,
            type: 'Section'
        });
      }

      // Check subsections
      if (section.subsections) {
        section.subsections.forEach(sub => {
             if (typeof sub.content === 'string' && sub.content.toLowerCase().includes(lowerQuery)) {
                newResults.push({
                    id: section.id,
                    title: `${section.title} > ${sub.title}`,
                    preview: sub.content,
                    type: 'Section'
                });
             }
        });
      }
    });

    // Search Threats
    THREATS_DATA.forEach(threat => {
        if (threat.description.toLowerCase().includes(lowerQuery) || threat.example?.toLowerCase().includes(lowerQuery)) {
            newResults.push({
                id: 'annex-5',
                title: `Annex 5: Threat ${threat.id}`,
                preview: threat.description,
                type: 'Threat'
            });
        }
    });

    setResults(newResults);
  }, [query]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Search Regulation</h2>
        <p className="text-slate-500">Search across definitions, requirements, threats, and mitigations.</p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          autoFocus
          type="text"
          className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Type to search (e.g., 'CSMS', 'Spoofing', 'Approval')..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {results.map((result, idx) => (
          <button
            key={`${result.id}-${idx}`}
            onClick={() => onResultClick(result.id)}
            className="w-full text-left bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${result.type === 'Threat' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                            {result.type}
                        </span>
                        <h3 className="font-bold text-slate-800 group-hover:text-blue-600">{result.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm line-clamp-2">{result.preview}</p>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-blue-500" />
            </div>
          </button>
        ))}
        {query && results.length === 0 && (
            <div className="text-center text-gray-400 py-8">No results found.</div>
        )}
      </div>
    </div>
  );
};