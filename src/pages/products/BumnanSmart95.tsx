import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Target,
  Clock,
  TrendingUp,
  Coins,
  CalendarDays,
  ArrowRight,
  PiggyBank,
  Briefcase,
  Smile,
  Wallet,
  Zap,
  MessageCircle,
  Users
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import React from 'react';

export default function BumnanSmart95() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "สิทธิประโยชน์ด้านภาษี",
      desc: "ลดหย่อนภาษีได้สูงสุด 200,000 บาท (เพิ่มเติมจากเบี้ยประกันชีวิต 100,000 บาทแรก)",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "รับเงินบำนาญคงที่",
      desc: "รับผลประโยชน์เงินบำนาญ 12% ของทุนประกันภัยทุกปีอย่างสม่ำเสมอและแน่นอน",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "คุ้มครองยาวถึงอายุ 95",
      desc: "รับเงินบำนาญต่อเนื่องตั้งแต่อายุ 60 จนถึงอายุ 95 ปี ให้คุณอุ่นใจวัยเกษียณ",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "ความคุ้มครองชีวิต",
      desc: "รับความอุ่นใจด้วยความคุ้มครองชีวิตในช่วงปีที่เริ่มออมเงินจนถึงก่อนเริ่มรับบำนาญ",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#E3F2FD] via-white to-[#E8F5E9]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <PiggyBank size={14} />
                Smart Retirement Plan
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                บำนาญ สมาร์ท 95<br/>
                <span className="text-on-surface">เงินใช้หลังเกษียณชัวร์ 100%</span>
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl font-bold">
                แบบประกันบำนาญที่ช่วยให้คุณวางแผนเป้าหมายหลังเกษียณได้อย่างมีประสิทธิภาพ รับเงินบำนาญคงที่สม่ำเสมอ พร้อมสิทธิลดหย่อนภาษีแบบจัดเต็ม
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
              animate={{ opacity: 1, scale: 1.0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="/BamnanSmart.webp" 
                alt="Comfortable Retirement" 
                className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-[85%] h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 font-bold uppercase">Stable Income</p>
                    <p className="text-lg font-black text-primary">การันตีรายได้หลังเกษียณ</p>
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
              ทำความรู้จัก <span className="text-secondary underline decoration-secondary/30 underline-offset-8">บำนาญ สมาร์ท 95</span>
            </motion.h2>
            <p className="text-on-surface/60 max-w-xl mx-auto font-bold italic">ชีวิตหลังเกษียณที่มั่นคง ด้วยรายได้ที่แน่นอนทุกปี</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.1)] overflow-hidden border border-surface-container-high"
            >
              <div className="bg-gradient-to-r from-primary via-primary/95 to-primary p-12 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-1.5 bg-secondary rounded-full mb-4"></div>
                   <h3 className="text-2xl font-bold tracking-tight text-white uppercase">เงื่อนไขและรายละเอียดแผนประกัน</h3>
                   <p className="text-white/60 text-sm font-black uppercase tracking-[0.3em] mt-2">Bumnan Smart 95 Specifications</p>
                </div>
              </div>

              <div className="p-4 md:p-12 space-y-16 bg-surface-container-lowest">
                {/* SECTION 1: CORE RULES */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 px-4 overflow-hidden">
                    <span className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-base shadow-sm shrink-0">01</span>
                    <h4 className="text-xl font-bold text-primary tracking-tight">กฎเกณฑ์การรับประกันภัย</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "อายุที่รับประกันภัย", value: "20 – 55 ปี", sub: "วางแผนได้ตั้งแต่เริ่มต้น", icon: <Users className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
                      { label: "ระยะเวลาชำระเบี้ย", value: "ถึงอายุ 60 ปี", sub: "สม่ำเสมอตลอดวัยทำงาน", icon: <Clock className="w-6 h-6" />, color: "bg-emerald-50 text-emerald-600" },
                      { label: "ทุนประกันขั้นต่ำ", value: "50,000 บาท", sub: "(ปรับได้ตามความต้องการ)", icon: <Coins className="w-6 h-6" />, color: "bg-amber-50 text-amber-600" },
                      { label: "สิทธิประโยชน์ทางภาษี", value: "สูงสุด 200,000", sub: "ตามเกณฑ์กรมสรรพากร", icon: <Wallet className="w-6 h-6" />, color: "bg-purple-50 text-purple-600" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-surface-container shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className={`p-5 rounded-2xl ${item.color} mb-6 inline-block`}>{item.icon}</div>
                        <p className="text-xs font-black text-primary/40 uppercase mb-2 tracking-widest leading-none">{item.label}</p>
                        <p className="text-xl font-black text-on-surface leading-tight tracking-tight">{item.value}</p>
                        <p className="text-[11px] font-bold text-on-surface/40 mt-2 uppercase tracking-wider">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 2: HIGHLIGHTS */}
                <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group shadow-2xl">
                   <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-1000 blur-3xl"></div>
                   <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8">
                         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-[11px] font-black uppercase tracking-[0.3em]">
                            Product Highlight
                         </div>
                         <h4 className="text-4xl font-extrabold leading-[1.05] tracking-tighter italic">เกษียณอย่างสง่า <br/><span className="text-secondary-container">ชัวร์ทุกปีจนถึงอายุ 95</span></h4>
                         <p className="text-xl text-white/70 font-bold leading-relaxed">บำนาญ สมาร์ท 95 ถูกออกแบบมาเพื่อลบความกังวลเรื่องรายได้หลังเกษียณ ด้วยการจ่ายบำนาญที่แน่นอน 12% ของทุนประกันภัย ทุกปี</p>
                      </div>
                      <div className="space-y-4">
                         {[
                           "รับบำนาญต่อปี 12% ของทุนประกัน",
                           "รับเงินคืนสม่ำเสมอตั้งแต่อายุ 60-95 ปี",
                           "ความคุ้มครองชีวิตในช่วงปีที่ออมเงิน",
                           "นำเบี้ยไปลดหย่อนภาษีได้สูงสุด 200,000 บาท"
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

      {/* Checklist Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Target Group</h2>
                <h3 className="text-3xl font-extrabold text-primary leading-tight">ทำไม บำนาญ สมาร์ท 95 <br />ถึงตอบโจทย์คุณ?</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "พนักงานประจำเงินเดือนสูง", desc: "ต้องการใช้สิทธิลดหย่อนภาษีสูงสุด และเตรียมเงินบำนาญที่แน่นอน", icon: <Briefcase className="w-5 h-5" /> },
                  { title: "คนที่ต้องการความชัวร์", desc: "ไม่อยากเสี่ยงกับการลงทุนในช่วงเกษียณ ต้องการรายได้ที่การันตี", icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: "คนที่อายุ 30-50 ปี", desc: "เป็นช่วงวัยที่เหมาะที่สุดในการเริ่มต้นออมเพื่อผลลัพธ์ในอนาคต", icon: <CalendarDays className="w-5 h-5" /> },
                  { title: "เจ้าของกิจการ", desc: "สร้างระบบบำนาญส่วนตัวเพื่อให้มีความมั่นคงเหมือนข้าราชการ", icon: <Target className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-8 rounded-[3rem] border border-surface-container bg-surface-container-lowest hover:border-primary transition-all shadow-sm group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary leading-tight text-xl">{item.title}</h4>
                      <p className="text-sm text-on-surface/50 font-bold font-sans mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                 <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary-container">
                       <Smile size={32} />
                    </div>
                    <h3 className="text-3xl font-extrabold italic text-white flex flex-col">
                       <span>ปรึกษาพี่ฝ้าย</span>
                       <span className="text-secondary-container font-black tracking-tighter">เรื่องการวางแผนบำนาญ</span>
                    </h3>
                    <p className="text-white/80 font-bold leading-relaxed">
                      การวางแผนบำนาญไม่ใช่แค่เรื่องตัวเลขค่ะ แต่คือความมั่นคงและความสบายใจในวันหน้าที่เราไม่ได้ทำงานแล้ว พี่ฝ้ายช่วยวิเคราะห์ทุนประกันที่เหมาะสมกับเป้าหมายรายได้ที่คุณอยากได้หลังเกษียณได้นะคะ
                    </p>
                    <button className="w-full py-4 bg-white text-primary rounded-full font-bold shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                       <MessageCircle size={20} /> ทักแชทปรึกษาฟรี
                    </button>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผนประกันบำนาญ สมาร์ท 95 (ออมเพื่อเกษียณ)" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Bumnan Smart 95" 
      />
    </div>
  );
}
