import React from 'react';

export interface Mitigation {
  ref: string;
  description: string;
}

export interface Threat {
  id: string;
  category: string;
  subCategory?: string;
  description: string;
  example?: string;
  mitigationRefs?: string[]; // Links to mitigation IDs (e.g., M1, M10)
  relatedMitigations?: Mitigation[]; // Hydrated mitigation data
}

export interface Section {
  id: string;
  title: string;
  content?: string | React.ReactNode;
  subsections?: Section[];
  type?: 'text' | 'list' | 'threat_table';
  tags?: string[];
}

export enum ViewType {
  DOCUMENT = 'DOCUMENT',
  THREAT_EXPLORER = 'THREAT_EXPLORER',
  SEARCH = 'SEARCH'
}