import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle, MessageCircle, ExternalLink } from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const { mode } = useConsultation();
  const [imageSrc, setImageSrc] = useState('/Link_142649.webp');
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (imageSrc === '/Link_142649.webp') {
      setImageSrc('/Link_142649.png');
    } else if (imageSrc === '/Link_142649.png') {
      setImageSrc('/Link_142649.jpg');
    } else {
      setHasError(true);
    }
  };

  // 1. Line OA mode details
  if (mode === 'line_oa') {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[111] p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white w-full max-w-sm md:max-w-md rounded-[2rem] shadow-2xl pointer-events-auto overflow-hidden relative border border-surface-container p-8"
              >
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container bg-surface/50 backdrop-blur-sm shadow-sm transition-colors z-10 text-on-surface/50 hover:text-on-surface"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center justify-center text-center pt-4">
                  <div className="w-16 h-16 bg-[#06C755]/10 text-[#06C755] rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <MessageCircle className="w-8 h-8 fill-current" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-primary mb-3">ทักแชทสอบถามกับพี่ฝ้าย</h3>
                  <p className="text-sm text-on-surface/60 font-medium mb-6 leading-relaxed max-w-xs">
                    แอดไลน์เป็นเพื่อนเพื่อนัดวันเวลาพูดคุย หรือปรึกษาข้อมูลแผนประกันกับพี่ฝ้ายได้ฟรี ไม่จำกัดเวลาเลยค่ะ
                  </p>

                  {/* LINE OA handle container */}
                  <div className="bg-surface border border-surface-container rounded-2xl p-4 w-full mb-6 font-mono font-bold text-sm text-primary flex items-center justify-center gap-2">
                    <span className="text-on-surface/40 select-none">Line ID:</span>
                    <span className="text-secondary select-all">@proudlifeinsurance</span>
                  </div>

                  {/* Redirection button */}
                  <a
                    href="https://line.me/ti/p/@proudlifeinsurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#06C755] hover:bg-[#05b04b] text-white py-4 px-6 rounded-2xl font-black shadow-lg shadow-[#06C755]/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    <span>คลิกเพื่อเปิดคุยใน Line OA</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // 2. Appointment format mode: ONLY the image and a close button
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[111] p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-transparent w-full max-w-sm md:max-w-md rounded-3xl shadow-2xl pointer-events-auto overflow-hidden relative"
            >
              {/* Close Button always visible over the image */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/20 bg-black/40 backdrop-blur-sm shadow-md transition-all z-10 text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center w-full">
                {!hasError ? (
                  <img
                    src={imageSrc}
                    alt="Krungthai-AXA Appointment Link"
                    onError={handleImageError}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-3xl block shadow-lg select-none"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-surface-container max-w-sm w-full">
                    <AlertCircle className="w-10 h-10 text-rose-500 mb-3 animate-bounce" />
                    <span className="text-sm font-black text-rose-700">ไม่สามารถโหลดภาพนัดหมายได้</span>
                    <span className="text-xs text-on-surface/60 mt-2 font-medium">กรุณาติดต่อสอบถามผ่านทาง Line Official ได้เลยค่ะ</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
