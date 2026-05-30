import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Calendar, Coins, MessageCircle, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';

interface PremiumCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const PremiumCalculatorModal: React.FC<PremiumCalculatorModalProps> = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    sumInsured: '',
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or Google Sheet
    console.log('Form Submitted:', { productName, ...formData });
    setIsSubmitted(true);
    
    // Auto close after 3 seconds on success
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl pointer-events-auto overflow-hidden relative border border-surface-container"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-colors z-10"
              >
                <X className="w-5 h-5 text-on-surface/50" />
              </button>

              <div className="p-8 md:p-10">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-primary mb-2">เช็กเบี้ยประกัน</h3>
                      <p className="text-sm text-on-surface/60 font-medium">ระบุข้อมูลเพื่อรับการคำนวณเบี้ยแผน <span className="text-secondary">{productName}</span></p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Gender Selection */}
                      <div className="space-y-3">
                        <label className="text-xs font-black text-on-surface/40 uppercase tracking-widest flex items-center gap-2">
                          <User size={14} /> เพศของคุณ
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {['ชาย', 'หญิง'].map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => setFormData({ ...formData, gender: g })}
                              className={`py-3 rounded-2xl font-bold transition-all border-2 ${
                                formData.gender === g 
                                  ? 'border-secondary bg-secondary/5 text-secondary' 
                                  : 'border-surface-container bg-surface-container-lowest text-on-surface/50 hover:border-surface-container-high'
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Age & Sum Insured */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <label className="text-xs font-black text-on-surface/40 uppercase tracking-widest flex items-center gap-2">
                            <Calendar size={14} /> อายุ (ปี)
                          </label>
                          <input
                            type="number"
                            required
                            placeholder="เช่น 30"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            className="w-full bg-surface-container-lowest border-2 border-surface-container rounded-2xl px-5 py-3 focus:border-primary outline-none transition-all font-bold placeholder:text-on-surface/20"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black text-on-surface/40 uppercase tracking-widest flex items-center gap-2">
                            <Coins size={14} /> ทุนประกันที่ต้องการ
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="เช่น 1,000,000"
                            value={formData.sumInsured}
                            onChange={(e) => setFormData({ ...formData, sumInsured: e.target.value })}
                            className="w-full bg-surface-container-lowest border-2 border-surface-container rounded-2xl px-5 py-3 focus:border-primary outline-none transition-all font-bold placeholder:text-on-surface/20"
                          />
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-3">
                        <label className="text-xs font-black text-on-surface/40 uppercase tracking-widest flex items-center gap-2">
                          <MessageCircle size={14} /> Line ID / อีเมล
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="ระบุเพื่อส่งผลการคำนวณให้คุณ"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full bg-surface-container-lowest border-2 border-surface-container rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all font-bold pl-12 placeholder:text-on-surface/20"
                          />
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface/30" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-5 rounded-3xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-4"
                      >
                        รับผลการคำนวณเบี้ย
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-3">ส่งคุณข้อมูลเรียบร้อย!</h3>
                    <p className="text-on-surface/60 font-medium">พี่ฝ้ายกำลังคำนวณเบี้ยที่ดีที่สุดให้คุณ<br/>และจะติดต่อกลับผ่านช่องทางที่ระบุโดยเร็วที่สุดค่ะ</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
