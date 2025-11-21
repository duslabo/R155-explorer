import React from 'react';
import { Section } from '../types';
import { FileText, Tag } from 'lucide-react';

interface SectionRendererProps {
  section: Section;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="text-blue-600" size={24} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{section.title}</h1>
        </div>
        
        {section.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {section.tags.map(tag => (
              <span key={tag} className="flex items-center text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="prose prose-slate max-w-none">
        {typeof section.content === 'string' ? (
          <p className="whitespace-pre-wrap text-lg leading-relaxed text-slate-700">
            {section.content}
          </p>
        ) : (
          section.content
        )}
      </div>

      {section.subsections && (
        <div className="mt-12 space-y-8">
          {section.subsections.map(sub => (
            <div key={sub.id} id={`sub-${sub.id}`} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{sub.title}</h3>
              <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {sub.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};