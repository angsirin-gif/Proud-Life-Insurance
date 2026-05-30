import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Facebook, MapPin, ChevronDown, CheckCircle2, Send } from 'lucide-react';

export const ContactSection = ({ defaultPlan }: { defaultPlan?: string }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: defaultPlan || 'โปรดเลือกแผนประกันที่สนใจ',
    note: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to your API or Firebase
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    
    // Auto-reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        plan: defaultPlan || 'โปรดเลือกแผนประกันที่สนใจ',
        note: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-surface-container-lowest relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12 md:sticky md:top-32">
            <div className="space-y-6">
              <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-black text-primary leading-tight">
                ปรึกษาแผนประกันที่ใช่ <br />
                <span className="text-secondary italic">ให้พี่ฝ้ายดูแลคุณ</span>
              </h2>
              <p className="text-on-surface/60 text-lg font-medium leading-relaxed max-w-md">
                เพราะความอุ่นใจของคุณคือความภูมิใจของพี่ฝ้ายค่ะ ทิ้งข้อมูลไว้ให้ติดต่อกลับ หรือเลือกช่องทางที่สะดวกด้านล่างได้เลยนะคะ
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'โทรศัพท์ (สายตรง)', value: '089-696-5397', icon: <Phone size={24} />, color: 'bg-white text-primary', href: 'tel:+66896965397' },
                { label: 'LINE OFFICIAL', value: '@proudlifeinsurance', icon: <MessageCircle size={24} />, color: 'bg-white text-emerald-600', href: 'https://line.me/ti/p/@proudlifeinsurance' },
                { label: 'FACEBOOK', value: 'Proud Life Insurance', icon: <Facebook size={24} />, color: 'bg-white text-blue-600', href: 'https://www.facebook.com/proudlifeinsurance' }
              ].map(item => (
                <motion.a 
                  whileHover={{ x: 10 }}
                  key={item.label} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-5 group transition-all p-4 bg-white rounded-2xl border border-surface-container shadow-sm hover:shadow-md"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-inner ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-on-surface/40 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                    <p className="text-lg font-black text-primary group-hover:text-secondary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
              <div className="flex items-center gap-4 text-on-surface/40 px-4">
                <MapPin size={18} />
                <span className="font-bold text-xs">ดูแลอย่างใกล้ชิดทั่วประเทศไทยค่ะ</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-surface-container relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">ชื่อ-นามสกุล</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-surface-container-lowest border-2 border-surface-container px-6 py-4 rounded-2xl focus:border-primary outline-none transition-all font-bold" 
                        placeholder="คุณสมชาย ใจดี" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">เบอร์โทรศัพท์</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-surface-container-lowest border-2 border-surface-container px-6 py-4 rounded-2xl focus:border-primary outline-none transition-all font-bold" 
                        placeholder="08x-xxx-xxxx" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">แผนประกันที่สนใจ</label>
                    <div className="relative">
                      <select 
                        value={formData.plan}
                        onChange={(e) => setFormData({...formData, plan: e.target.value})}
                        className="w-full bg-surface-container-lowest border-2 border-surface-container px-6 py-4 rounded-2xl focus:border-primary outline-none transition-all appearance-none font-bold text-on-surface"
                      >
                        <option value="โปรดเลือกแผนประกันที่สนใจ">โปรดเลือกแผนประกันที่สนใจ</option>
                        <option value="ประกันสุขภาพเหมาจ่าย">ประกันสุขภาพเหมาจ่าย (iHealthy Ultra / Health Fit)</option>
                        <option value="ประกันชีวิตมรดก">ประกันชีวิตมรดก (LifeTreasure / Life Ready)</option>
                        <option value="ประกันโรคร้ายแรง">ประกันโรคร้ายแรง (CI123 / iShield / So Shield)</option>
                        <option value="ประกันสะสมทรัพย์">ประกันสะสมทรัพย์ (Global Index / Super Save)</option>
                        <option value="ประกันบำนาญ">ประกันบำนาญ (Bumnan Smart 95 / iSmart 806)</option>
                        <option value="ประกันอุบัติเหตุ">ประกันอุบัติเหตุ (Personal Accident)</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">รายละเอียดเพิ่มเติม (ถ้ามี)</label>
                    <textarea 
                      value={formData.note}
                      onChange={(e) => setFormData({...formData, note: e.target.value})}
                      className="w-full bg-surface-container-lowest border-2 border-surface-container px-6 py-4 rounded-[2rem] focus:border-primary outline-none transition-all h-32 resize-none font-bold" 
                      placeholder="เช่น สอบถามเบี้ยประกันของช่วงอายุ... หรือ ต้องการให้แนะนำแผนที่เน้น..." 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-3xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 group"
                  >
                    ส่งข้อมูลให้พี่ฝ้ายติดต่อกลับ
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-[10px] text-on-surface/40 font-bold uppercase tracking-widest pt-2">
                    * พี่ฝ้ายจะติดต่อกลับเพื่อให้ข้อมูลโดยไม่มีค่าใช้จ่ายและไม่มีข้อผูกมัดค่ะ
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-4">ส่งข้อมูลสำเร็จ!</h3>
                  <p className="text-on-surface/60 font-bold text-lg leading-relaxed">
                    ได้รับข้อมูลความสนใจในแผน <br/>
                    <span className="text-secondary font-black italic">"{formData.plan}"</span> <br/>
                    เรียบร้อยแล้วค่ะ พี่ฝ้ายจะรีบศึกษาข้อมูล <br/>
                    และติดต่อกลับหาคุณโดยไวที่สุดนะคะ
                  </p>
                  <p className="mt-8 text-primary font-black animate-pulse">
                    ขอบคุณที่ให้ Proud Life Insurance ดูแลค่ะ
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

