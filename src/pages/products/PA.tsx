import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Clock, 
  Activity, 
  Globe, 
  Bike, 
  Wallet, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Stethoscope, 
  Zap, 
  ShieldCheck, 
  Target, 
  Coins, 
  Heart,
  Users,
  Medal,
  ArrowRight
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';

export default function PA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#E1F5FE] via-white to-[#B3E5FC]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <ShieldAlert size={14} />
                Accident Protection
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                PA <br />
                <span className="text-on-surface">ประกันอุบัติเหตุที่อุ่นใจที่สุด</span>
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl">
                แผนประกันอุบัติเหตุส่วนบุคคลที่ออกแบบมาเพื่อความสบายใจของทุกคนในครอบครัว คุ้มครองสูง ค่ารักษาสบายกระเป๋า พร้อมบริการช่วยเหลือฉุกเฉิน 24 ชม.
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
                  <span className="text-sm font-bold text-primary">ไม่ต้องตรวจสุขภาพ</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-primary/5">
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span className="text-sm font-bold text-primary">คุ้มครองทันทีที่อนุมัติ</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-[550px] mx-auto lg:ml-auto"
            >
              <img 
                src="/PA.webp" 
                alt="Personal Accident Insurance" 
                className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-[90%] h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Heart size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 font-bold uppercase">Peace of Mind</p>
                    <p className="text-lg font-black text-primary">ดูแลคุณทุกย่างก้าว</p>
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
              className="text-3xl font-extrabold text-primary leading-tight lg:whitespace-nowrap"
            >
              ผลประโยชน์ความคุ้มครอง ประกันอุบัติเหตุ <span className="text-secondary underline decoration-secondary/30 underline-offset-8">PA Classic</span>
            </motion.h2>
            <p className="text-on-surface/60 max-w-xl mx-auto font-medium">คุ้มครองชีวิตและค่ารักษาพยาบาลจากอุบัติเหตุ 24 ชั่วโมง ทั่วโลก</p>
          </div>

          {/* Benefit Table Section */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
               <div>
                  <h3 className="text-2xl font-extrabold text-primary">ตารางผลประโยชน์ความคุ้มครอง</h3>
                  <p className="text-on-surface/50 text-sm font-medium">เลือกความคุ้มครองที่เหมาะสมกับไลฟ์สไตล์ของคุณ</p>
               </div>
            </div>

            <div className="overflow-x-auto rounded-[3rem] border border-surface-container shadow-xl">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-primary text-white text-center">
                    <th className="p-10 text-lg font-black uppercase tracking-widest border-r border-white/10 text-left">ความคุ้มครอง (อบ. 1)</th>
                    {[1, 2, 3, 4].map((n) => (
                      <th key={n} className={`p-10 text-lg font-black uppercase tracking-widest ${n < 4 ? 'border-r border-white/10' : ''}`}>
                         แผน {n}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container text-sm">
                  {[
                    { label: "เสียชีวิต สูญเสียอวัยวะ หรือทุพพลภาพถาวรสิ้นเชิง", sub: "Accidental Death & Disability", v: ["500,000", "1,000,000", "1,500,000", "2,000,000"] },
                    { label: "การถูกฆาตกรรมหรือลอบทำร้ายร่างกาย", sub: "Murder or Assault", v: ["500,000", "1,000,000", "1,500,000", "2,000,000"] },
                    { label: "การขับขี่หรือโดยสารรถจักรยานยนต์", sub: "Motorcycle Accident", v: ["250,000", "500,000", "750,000", "1,000,000"] },
                    { label: "ค่ารักษาพยาบาล (ต่ออุบัติเหตุแต่ละครั้ง)", sub: "Medical Expense per Accident", v: ["25,000", "50,000", "75,000", "100,000"] }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-primary/5 transition-colors group">
                      <td className="p-10">
                        <p className="font-bold text-primary leading-tight text-lg">{row.label}</p>
                        <p className="text-[10px] text-on-surface/40 mt-1 uppercase font-black tracking-widest">{row.sub}</p>
                      </td>
                      {row.v.map((val, vi) => (
                        <td key={vi} className={`p-10 text-center font-bold text-lg tracking-tight ${vi === 3 ? 'text-secondary' : 'text-on-surface'}`}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-on-surface/50 mt-4 italic font-medium px-4">
              * ข้อมูลเบื้องต้นเพื่อประกอบการตัดสินใจ ผลประโยชน์เป็นไปตามเงื่อนไขในกรมธรรม์และชั้นอาชีพของผู้เอาประกัน
            </p>
          </div>

          {/* Premium Master Info-Sheet: PA Details */}
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
                   <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">จุดเด่นของแผน "PA Classic"</h3>
                   <p className="text-white/60 text-sm font-black uppercase tracking-[0.3em] mt-2">Key Privileges of PA Classic</p>
                </div>
              </div>

              <div className="p-4 md:p-12 space-y-16 bg-surface-container-lowest">
                {/* SECTION 1: CORE RULES */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 px-4 overflow-hidden">
                    <span className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-base shadow-sm shrink-0">01</span>
                    <h4 className="text-2xl font-extrabold text-primary tracking-tight">กฎเกณฑ์การรับประกันภัย</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "อายุที่รับประกันภัย", value: "1 เดือน – 64 ปี", sub: "(ต่อสัญญาได้ถึงอายุ 75 ปี)", icon: <Users className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
                      { label: "อาชีพที่รับประกัน", value: "ชั้นอาชีพ 1 และ 2", sub: "(งานบริหาร หรืองานเสี่ยงน้อย)", icon: <Target className="w-6 h-6" />, color: "bg-emerald-50 text-emerald-600" },
                      { label: "ทุนประกันภัย", value: "สูงสุด 2,000,000", sub: "(เลือกแผนได้ตามต้องการ)", icon: <Coins className="w-6 h-6" />, color: "bg-amber-50 text-amber-600" },
                      { label: "พื้นที่ความคุ้มครอง", value: "ทั่วโลก 24 ชม.", sub: "อุ่นใจได้ทุกที่ทุกเวลา", icon: <Globe className="w-6 h-6" />, color: "bg-purple-50 text-purple-600" }
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

                {/* SECTION 2: SPECIAL BENEFITS */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 px-4 overflow-hidden">
                    <span className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-base shadow-sm shrink-0">02</span>
                    <h4 className="text-2xl font-extrabold text-primary tracking-tight">ความคุ้มครองที่เหนือกว่า</h4>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8">
                     {[
                       { 
                         title: "อุบัติเหตุสาธารณะ", 
                         desc: "รับความคุ้มครองเพิ่มเป็น 2 เท่า หากเกิดอุบัติเหตุในลิฟต์โดยสาร หรืออาคารสาธารณะ", 
                         icon: <ShieldAlert className="w-8 h-8" />, 
                         color: "text-blue-500 bg-blue-50" 
                       },
                       { 
                         title: "คุ้มครองการลอบทำร้าย", 
                         desc: "สบายใจยิ่งขึ้นด้วยความคุ้มครองกรณีถูกฆาตกรรมหรือลอบทำร้ายร่างกาย", 
                         icon: <ShieldCheck className="w-8 h-8" />, 
                         color: "text-emerald-500 bg-emerald-50" 
                       },
                       { 
                         title: "ไม่ต้องสำรองจ่าย", 
                         desc: "สะดวกสบายด้วยบัตร Care Card ไม่ต้องสำรองจ่ายค่ารักษาในสถานพยาบาลคู่สัญญา", 
                         icon: <Wallet className="w-8 h-8" />, 
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

                {/* SECTION 3: EMERGENCY */}
                <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group shadow-2xl">
                   <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full -mr-48 -mt-48 group-hover:scale-125 transition-transform duration-1000 blur-3xl"></div>
                   <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8">
                         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-[11px] font-black uppercase tracking-[0.3em]">
                            Emergency Assistant
                         </div>
                         <h4 className="text-4xl font-extrabold leading-[1.05] tracking-tighter italic whitespace-nowrap">บริการช่วยเหลือฉุกเฉิน <br/><span className="text-secondary-container">ตลอด 24 ชั่วโมง</span></h4>
                         <p className="text-xl text-white/70 font-bold leading-relaxed">คุ้มครองและดูแลคุณไม่ว่าจะอยู่ที่ไหนทั่วโลก ด้วยทีมงานมืออาชีพที่พร้อมประสานงานช่วยเหลือคุณทันที</p>
                      </div>
                      <div className="space-y-4">
                         {[
                           "บริการส่งผู้ป่วยกลับประเทศเพื่อรักษาต่อ",
                           "บริการจัดหาแพทย์และโรงพยาบาลในต่างประเทศ",
                           "บริการช่วยเหลือด้านข้อมูลการเดินทาง",
                           "บัตร Care Card เข้ารักษาแบบไม่ต้องสำรองจ่าย"
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-sm">
                              <Zap className="text-secondary-container" size={24} />
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

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-12 rounded-3xl shadow-xl border border-surface-container overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-primary">เหตุผลที่ควรมีประกันอุบัติเหตุ (PA) เสริมไว้</h3>
              <p className="text-on-surface/70 leading-relaxed">แม้จะมีประกันสุขภาพอยู่แล้ว แต่ PA จะช่วยเติมเต็มในส่วนของ "เงินก้อน" และ "ค่าใช้จ่ายที่เกิดขึ้นทันที" จากอุบัติเหตุ โดยไม่ต้องนำสวัสดิการอื่นมาใช้ทั้งหมด</p>
              <ul className="space-y-4">
                {[
                  "เบี้ยประกันถูกมาก เมื่อเทียบกับวงเงินความคุ้มครองที่ได้รับ",
                  "คุ้มครอง 24 ชั่วโมง ทุกกิจกรรม ไม่ว่าจะทำงาน เดินทาง หรือกีฬา",
                  "มีเงินชดเชยรายสัปดาห์ ช่วยลดผลกระทบจากการขาดรายได้",
                  "คุ้มครองอุบัติเหตุทางน้ำ และเหตุจากสาธารณภัยบางประเภทรวมอยู่ด้วย"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span className="font-medium text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl text-center space-y-6 border border-primary/10">
               <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                 <ShieldCheck size={40} />
               </div>
               <div className="space-y-2">
                 <p className="text-xs font-black text-primary uppercase tracking-widest leading-none mb-2">Instant Protection</p>
                 <p className="text-2xl font-black text-primary">อุ่นใจทุกที่ทั่วโลก</p>
                 <p className="text-sm text-on-surface/60 font-medium">เริ่มต้นแค่วินาทีละไม่กี่สตางค์ เพื่อความปลอดภัยที่คุณเลือกได้</p>
               </div>
               <a 
                 href="https://line.me/ti/p/@proudlifeinsurance"
                 target="_blank"
                 rel="noreferrer"
                 className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 text-center"
               >
                 เช็กเบี้ยประกันแผนนี้ <ArrowRight size={20} />
               </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="PA Classic" 
      />
    </div>
  );
}
