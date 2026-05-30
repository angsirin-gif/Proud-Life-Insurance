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
  ShieldAlert,
  Coins,
  Medal,
  Zap,
  ShieldHalf
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function SoShield() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#FFF9C4] via-white to-[#FFF59D]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest">
                <ShieldHalf size={14} />
                High Impact CI Protection
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                โรคร้าย โซชิลด์ (So Shield)<br/>
                <span className="text-on-surface">ปกป้องคุณจากการตรวจพบ 70 โรคร้าย</span>
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl">
                ประกันโรคร้ายแรงที่ให้คุณ "ชิลด์" กว่าที่เคย ด้วยการจ่ายเงินก้อนสูงสุดเมื่อตรวจพบ 70 โรคร้ายแรง เบี้ยประกันราคาย่อมเยาแต่คุ้มครองมหาศาล
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
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-primary/5">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span className="text-sm font-bold text-primary">ครอบคลุม 70 โรคร้ายแรง</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-primary/5">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span className="text-sm font-bold text-primary">รับเงินก้อนทันที 100%</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[16px] border-white">
                <img 
                  src="/โรคร้ายโซชิลด์.webp" 
                  alt="So Shield Critical Illness Insurance" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 font-bold uppercase">Critical Care</p>
                    <p className="text-lg font-black text-primary">ปกป้องคุณจากโรคร้าย</p>
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
              className="text-3xl font-extrabold text-primary leading-tight"
            >
              รายละเอียด <span className="text-secondary underline decoration-secondary/30 underline-offset-8">โรคร้ายโซชิลด์</span>
            </motion.h2>
            <p className="text-on-surface/60 max-w-xl mx-auto font-medium">เตรียมพร้อมรับมือกับทุกความเสี่ยงอย่างผู้เชี่ยวชาญ</p>
          </div>

          {/* Info-Sheet Design */}
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-surface-container-high"
            >
              <div className="bg-gradient-to-r from-primary via-primary/95 to-primary p-8 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-1 bg-secondary rounded-full mb-2"></div>
                   <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">ทำไมต้องเลือก "โซชิลด์"?</h3>
                   <p className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">Key Advantages</p>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-16 bg-surface-container-lowest">
                {/* Features Section */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {[
                    { 
                      title: "ครอบคลุม 70 โรคร้าย", 
                      desc: "ดูแลโรคร้ายแรงยอดฮิต ทั้งมะเร็ง หัวใจ ไต เสื่อมสมอง และภาวะแทรกซ้อนจากการทำงาน", 
                      icon: <Target className="w-6 h-6" />, 
                      color: "text-blue-500 bg-blue-50" 
                    },
                    { 
                      title: "จ่ายก้อน 100% ทันที", 
                      desc: "เมื่อตรวจพบโรคร้ายแรงระยะรุนแรงตามระบุ รับทุนประกันเต็มจำนวนทันทีเพื่อการวางแผนรักษา", 
                      icon: <Coins className="w-6 h-6" />, 
                      color: "text-emerald-500 bg-emerald-50" 
                    },
                    { 
                      title: "เบี้ยประหยัด คุ้มครองยาว", 
                      desc: "จ่ายเบี้ยในราคาสบายกระเป๋า แต่ให้ความคุ้มครองยาวนานถึงอายุ 80 ปี", 
                      icon: <Medal className="w-6 h-6" />, 
                      color: "text-amber-500 bg-amber-50" 
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-8 bg-white border border-surface-container rounded-3xl shadow-sm hover:border-primary transition-colors group">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feat.color} group-hover:scale-110 transition-transform`}>
                          {feat.icon}
                       </div>
                       <h5 className="text-xl font-bold text-primary mb-3">{feat.title}</h5>
                       <p className="text-sm font-medium text-on-surface/60 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000"></div>
                   <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                            Worry Free
                         </div>
                         <h4 className="text-4xl font-extrabold leading-tight">เพิ่มความปลอดภัย <br/><span className="text-[#C1FF72]">ให้กับชีวิตคุณ</span></h4>
                         <p className="text-white/70 font-medium">ชีวิตคือสิ่งไม่แน่นอน แต่คุณสามารถเลือกความแน่นอนให้กับค่ารักษาพยาบาลในอนาคตได้ด้วย โซชิลด์</p>
                      </div>
                      <div className="space-y-4">
                         {[
                           "คุ้มครอง 70 โรคร้ายแรงทุกระยะ",
                           "รับผลประโยชน์เงินก้อนรวดเร็ว",
                           "เบี้ยประกันคงที่ในช่วงอายุที่กำหนด",
                           "เลือกทุนประกันได้หลากหลาย"
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                              <Zap className="text-[#C1FF72]" size={20} />
                              <span className="font-bold text-sm tracking-tight">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Specs Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "อายุรับประกัน", value: "1 เดือน - 65 ปี", icon: <Users className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
                    { label: "ระยะเวลาคุ้มครอง", value: "ถึงอายุ 80 ปี", icon: <Clock className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
                    { label: "การชำระเบี้ย", value: "รายปี/รายเดือน", icon: <Wallet className="w-5 h-5" />, color: "bg-amber-50 text-amber-600" },
                    { label: "ประเภทสัญญา", value: "สัญญาเพิ่มเติม", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-purple-50 text-purple-600" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-surface-container shadow-sm">
                      <div className={`p-4 rounded-xl ${item.color} mb-4 inline-block`}>{item.icon}</div>
                      <p className="text-xs font-black text-primary/60 uppercase mb-1 tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold text-on-surface leading-tight">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผนประกันโรคร้าย โซชิลด์ (So Shield)" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="So Shield" 
      />
    </div>
  );
}
