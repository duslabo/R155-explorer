import React, { useState, useMemo } from 'react';
import { AlertTriangle, CheckCircle, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { THREATS_DATA, MITIGATIONS_DB } from '../constants';
import { Threat } from '../types';

export const ThreatExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedThreatId, setExpandedThreatId] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(THREATS_DATA.map(t => t.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter threats
  const filteredThreats = useMemo(() => {
    return THREATS_DATA.filter(threat => {
      const matchesSearch = 
        threat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        threat.example?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        threat.id.includes(searchTerm);
      
      const matchesCategory = selectedCategory === 'All' || threat.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedThreatId(expandedThreatId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center">
          <AlertTriangle className="mr-3 text-orange-500" size={32} />
          Annex 5: Threat Explorer
        </h2>
        <p className="text-slate-600 text-lg">
          Interactive mapping of Table A1 (Threats) to Table B1/C1 (Mitigations).
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search threats, ID (e.g., 4.1), or keywords..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Filter size={18} className="text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredThreats.length === 0 && (
            <div className="text-center py-12 text-gray-500">
                No threats found matching your criteria.
            </div>
        )}
        
        {filteredThreats.map((threat) => {
          const isExpanded = expandedThreatId === threat.id;
          return (
            <div 
              key={threat.id} 
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                isExpanded ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div 
                className="p-5 cursor-pointer flex items-start gap-4"
                onClick={() => toggleExpand(threat.id)}
              >
                <div className="flex-shrink-0 bg-slate-100 text-slate-700 font-mono font-bold px-3 py-1 rounded text-sm">
                  {threat.id}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {threat.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-1">{threat.description}</h3>
                  <p className="text-slate-500 text-sm">{threat.example}</p>
                </div>

                <div className="flex-shrink-0 self-center">
                    {isExpanded ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
                </div>
              </div>

              {/* Expanded Mitigations Section */}
              {isExpanded && (
                <div className="bg-slate-50 p-5 border-t border-gray-100 animate-fadeIn">
                  <h4 className="text-sm font-bold text-slate-700 uppercase mb-3 flex items-center">
                    <CheckCircle size={16} className="mr-2 text-green-600" />
                    Required Mitigations
                  </h4>
                  <div className="grid gap-3">
                    {threat.mitigationRefs && threat.mitigationRefs.length > 0 ? (
                      threat.mitigationRefs.map(ref => (
                        <div key={ref} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex gap-3">
                           <span className="flex-shrink-0 bg-green-100 text-green-800 font-mono font-bold text-xs px-2 py-1 rounded h-fit">
                             {ref}
                           </span>
                           <span className="text-slate-700 text-sm">
                             {MITIGATIONS_DB[ref] || "Mitigation details not found in database."}
                           </span>
                        </div>
                      ))
                    ) : (
                        <div className="text-slate-400 italic text-sm">No specific mitigations linked in this dataset.</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};