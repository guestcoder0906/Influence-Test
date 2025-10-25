// FIX: Import React to resolve 'React' namespace error for React.FC type.
import React from 'react';

export enum InfluenceTypeId {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

export interface Question {
  id: number;
  text: string;
  typeId: InfluenceTypeId;
  example?: string;
}

export interface AnswerOption {
  text: string;
  score: number;
  color: string;
  hex: string;
}

export interface InfluenceTypeInfo {
  id: InfluenceTypeId;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  friendships: string;
  examples: string;
  strengths: string[];
  weaknesses: string[];
  color: string;
  textColor: string;
  icon: React.FC<{ className?: string }>;
}

export interface Result extends InfluenceTypeInfo {
  score: number;
}