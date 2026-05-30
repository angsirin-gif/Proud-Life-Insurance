import React, { createContext, useContext, useState } from 'react';

export type ConsultationMode = 'appointment' | 'line_oa';

interface ConsultationContextType {
  openConsultation: (mode?: ConsultationMode | any) => void;
  closeConsultation: () => void;
  isOpen: boolean;
  mode: ConsultationMode;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ConsultationMode>('appointment');

  const openConsultation = (modeInput?: ConsultationMode | any) => {
    if (typeof modeInput === 'string' && (modeInput === 'appointment' || modeInput === 'line_oa')) {
      setMode(modeInput);
    } else {
      setMode('appointment');
    }
    setIsOpen(true);
  };

  const closeConsultation = () => setIsOpen(false);

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation, isOpen, mode }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};
