'use client';

import { createContext, useContext, useState } from 'react';

export interface QuotePrefill {
  lengthIn: string;
  widthIn: string;
  thicknessIn: string;
  grade: string;
}

interface QuoteContextValue {
  prefill: QuotePrefill | null;
  setPrefill: (p: QuotePrefill) => void;
}

const QuoteContext = createContext<QuoteContextValue>({
  prefill: null,
  setPrefill: () => {},
});

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [prefill, setPrefill] = useState<QuotePrefill | null>(null);
  return (
    <QuoteContext.Provider value={{ prefill, setPrefill }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
