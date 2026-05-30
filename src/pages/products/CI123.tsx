import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Activity, 
  Heart, 
  Stethoscope, 
  Clock, 
  Users, 
  Target, 
  Wallet,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Coins,
  History,
  Medal,
  Zap,
  Dna
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import React from 'react';

export default function CI123() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#E8F5E9] via-white to-[#C8E6C9]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <Dna size={14} />
                Maximum CI Coverage
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                CI123<br/>
                <span className="text-on-surface">ครอบคลุม 123 โรคร้าย</span>
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl font-bold">
                ที่สุดของความประกันโรคร้ายแรง ดูแลคุณตั้งแต่ระยะเริ่มต้นจนถึงระยะรุนแรง ครอบคลุมจำนวนโรคมากที่สุด ให้คุณเตรียมพร้อมและสู้กับทุกโรคได้อย่างไร้กังวล
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://line.me/ti/p/@proudlifeinsurance"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all inline-block text-center"
                >
                  เช็กเบี้ยประกันแผนนี้
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white max-w-[85%]">
                <img 
                  src="/CI123_1.webp" 
                  alt="CI123 Critical Illness Insurance" 
                  className="w-full h-auto block mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 font-bold uppercase">Comprehensive Care</p>
                    <p className="text-lg font-black text-primary">ดูแลทุกระยะของโรค</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-primary leading-tight tracking-tight"
            >
              แผนประกัน <span className="text-secondary underline decoration-secondary/30 underline-offset-8">CI123</span>
            </motion.h2>
            <p className="text-on-surface/60 max-w-xl mx-auto font-bold italic">ประกันโรคร้ายแรงที่ครอบคลุมมากที่สุดในตลาด</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.1)] overflow-hidden border border-surface-container-high"
            >
              <div className="bg-gradient-to-r from-primary via-primary/95 to-primary p-12 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-1.5 bg-secondary rounded-full mb-4"></div>
                   <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">รายละเอียดแผนความคุ้มครอง</h3>
                   <p className="text-white/60 text-sm font-black uppercase tracking-[0.3em] mt-2">CI123 Product Details</p>
                </div>
              </div>

              <div className="p-4 md:p-12 space-y-16 bg-surface-container-lowest">
                {/* SECTION 1: CORE RULES */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 px-4 overflow-hidden">
                    <span className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-base shadow-sm shrink-0">01</span>
                    <h4 className="text-2xl font-extrabold text-primary tracking-tight">เงื่อนไขการรับประกัน</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "อายุที่รับประกันภัย", value: "1 เดือน – 70 ปี", sub: "คุ้มครองถึงอายุ 85 ปี", icon: <Users className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
                      { label: "จำนวนโรคที่คุ้มครอง", value: "123 โรค/อาการ", sub: "ครอบคลุมทุกระยะ", icon: <Stethoscope className="w-6 h-6" />, color: "bg-emerald-50 text-emerald-600" },
                      { label: "ทุนประกันภัย", value: "เลือกได้ตามความต้องการ", sub: "(ตามเงื่อนไขที่บริษัท)", icon: <Coins className="w-6 h-6" />, color: "bg-amber-50 text-amber-600" },
                      { label: "ระยะเวลารอคอย", value: "90 วัน", sub: "นับจากวันเริ่มคุ้มครอง", icon: <Clock className="w-6 h-6" />, color: "bg-purple-50 text-purple-600" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-surface-container shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className={`p-5 rounded-2xl ${item.color} mb-6 inline-block`}>{item.icon}</div>
                        <p className="text-xs font-black text-primary/40 uppercase mb-2 tracking-widest leading-none">{item.label}</p>
                        <p className="text-lg font-bold text-on-surface leading-tight tracking-tight">{item.value}</p>
                        <p className="text-[11px] font-bold text-on-surface/40 mt-2 uppercase tracking-wider">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 2: STAGES */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 px-4">
                    <span className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-base shadow-sm shrink-0">02</span>
                    <h4 className="text-2xl font-extrabold text-primary tracking-tight">คุ้มครองครบทุกระยะ</h4>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8">
                     {[
                       { 
                         title: "ระยะเริ่มต้น (Early Stage)", 
                         desc: "รับผลประโยชน์ 25% ของทุนประกันภัย เมื่อตรวจเจอโรคร้ายแรงในระยะเริ่มต้น", 
                         icon: <Zap className="w-8 h-8" />, 
                         color: "text-blue-500 bg-blue-50" 
                       },
                       { 
                         title: "ระยะปานกลาง (Intermediate)", 
                         desc: "รับผลประโยชน์ 50% ของทุนประกันภัย เพื่อรองรับค่ารักษาที่เพิ่มขึ้น", 
                         icon: <Activity className="w-8 h-8" />, 
                         color: "text-emerald-500 bg-emerald-50" 
                       },
                       { 
                         title: "ระยะรุนแรง (Late Stage)", 
                         desc: "รับผลประโยชน์ 100% ของทุนประกันภัย (หักผลประโยชน์ที่เคยได้รับไปแล้ว)", 
                         icon: <ShieldAlert className="w-8 h-8" />, 
                         color: "text-amber-500 bg-amber-50" 
                       }
                     ].map((feat, idx) => (
                       <div key={idx} className="p-10 bg-white border border-surface-container rounded-[3rem] shadow-sm hover:shadow-xl hover:border-primary transition-all group">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feat.color} group-hover:scale-110 transition-transform shadow-sm`}>
                             {feat.icon}
                          </div>
                          <h5 className="text-xl font-bold text-primary mb-4 tracking-tight">{feat.title}</h5>
                          <p className="text-base font-bold text-on-surface/50 leading-relaxed">{feat.desc}</p>
                       </div>
                     ))}
                  </div>
                </div>

                {/* SECTION 3: HIGHLIGHTS */}
                <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group shadow-2xl">
                   <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-1000 blur-3xl"></div>
                   <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8">
                         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-[11px] font-black uppercase tracking-[0.3em]">
                            Product Highlight
                         </div>
                         <h4 className="text-4xl font-extrabold leading-[1.05] tracking-tighter italic">ดูแลต่อเนื่อง <br/><span className="text-secondary-container">มั่นใจทุกขั้นตอน</span></h4>
                         <p className="text-xl text-white/70 font-bold leading-relaxed">CI123 ถูกออกแบบมาเพื่อให้คุณได้รับการรักษาที่ดีที่สุดตั้งแต่เนิ่นๆ เพื่อโอกาสในการหายขาดที่มากขึ้น</p>
                      </div>
                      <div className="space-y-4">
                         {[
                           "คุ้มครอง 123 โรค/อาการ มากที่สุดในตลาด",
                           "ครอบคลุมโรคฮิต เช่น มะเร็ง หัวใจ หลอดเลือดสมอง",
                           "จ่ายผลประโยชน์แยกตามระยะของโรค",
                           "ไม่ต้องสำรองจ่าย (เมื่อใช้บริการกับ รพ. คู่สัญญา)"
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-sm">
                              <CheckCircle2 className="text-secondary-container" size={24} />
                              <span className="font-black text-base tracking-tight">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผนประกัน CI123 (ครอบคลุม 123 โรคร้ายแรง)" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="CI123" 
      />
    </div>
  );
}
