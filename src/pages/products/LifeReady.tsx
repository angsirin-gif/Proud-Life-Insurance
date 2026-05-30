import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Coins, 
  Target,
  ArrowRight,
  Clock,
  Heart,
  Users,
  Medal
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';

export default function LifeReady() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "คุ้มครองยาวนาน",
      desc: "ดูแลคุณและครอบครัวยาวนานจนถึงอายุ 99 ปี"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "ชำระเบี้ยยืดหยุ่น",
      desc: "เลือกได้ตามใจ 6 ปี, 12 ปี, 18 ปี หรือจนถึงอายุ 99 ปี"
    },
    {
      icon: <Coins className="w-6 h-6 text-primary" />,
      title: "เบี้ยประกันคงที่",
      desc: "เบี้ยประกันภัยไม่ปรับเพิ่มขึ้นตามอายุ วางแผนง่าย"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "ลดหย่อนภาษีได้",
      desc: "นำไปลดหย่อนภาษีเงินได้บุคคลธรรมดาสูงสุด 100,000 บาท"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-xs font-medium text-on-surface/50 mb-6">
              <a href="/" className="hover:text-primary">หน้าหลัก</a>
              <span>/</span>
              <a href="/whole-life-insurance" className="hover:text-primary">ประกันชีวิตตลอดชีพ</a>
              <span>/</span>
              <span className="text-primary">LifeReady</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              LifeReady (ไลฟ์ เรดดี้)<br/>
              <span className="text-on-surface">ความคุ้มครองชีวิตตลอดชีพ เพื่ออนาคตที่มั่นคง</span>
            </h1>
            <p className="text-lg text-on-surface/70 mb-8 leading-relaxed">
              แบบประกันชีวิตที่ให้ความคุ้มครองยาวนานถึงอายุ 99 ปี พร้อมความยืดหยุ่นในการเลือกชำระเบี้ย เหมาะสำหรับผู้เริ่มต้นสร้างหลักประกันและมรดกให้ครอบครัว
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://line.me/ti/p/@proudlifeinsurance"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all inline-block text-center"
              >
                เช็กเบี้ยประกันแผนนี้
              </a>
              <p className="text-xs text-on-surface/50 w-full mt-2 italic">
                *เบี้ยประกันขึ้นอยู่กับอายุ เพศ และระยะเวลาชำระเบี้ยที่เลือก
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto lg:ml-auto z-10"
          >
            <img 
              src="/LifeReady_2.webp" 
              alt="LifeReady Insurance" 
              className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-full h-auto max-w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-primary tracking-tight">จุดเด่นผลิตภัณฑ์</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-surface-container-low border border-surface-container transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2 text-primary text-lg tracking-tight">{item.title}</h3>
                <p className="text-sm text-on-surface/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Premium Master Info-Sheet: LifeReady */}
          <div className="max-w-7xl mx-auto mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-surface-container-high"
            >
              {/* Main Header Banner */}
              <div className="bg-gradient-to-r from-primary via-primary/95 to-primary p-8 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-1 bg-secondary rounded-full mb-2"></div>
                   <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">เงื่อนไขเกี่ยวกับการรับประกัน</h3>
                   <p className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">Detailed Product Specifications & Benefits</p>
                </div>
              </div>

              <div className="p-1 md:p-8 space-y-12 bg-surface-container-lowest">
                {/* SECTION 1: CORE RULES (Horizontal Cards) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4">
                    <span className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-sm shadow-sm">01</span>
                    <h4 className="text-lg font-black text-primary">กฎเกณฑ์การรับประกันภัย</h4>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { label: "อายุรับประกัน", value: "1 เดือน – 70 ปี", icon: <Users className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
                      { label: "ระยะคุ้มครอง", value: "ครบอายุ 99 ปี", icon: <Clock className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
                      { label: "ระยะชำระเบี้ย", value: "6, 12, 18, 99 ปี", icon: <Zap className="w-5 h-5" />, color: "bg-amber-50 text-amber-600" },
                      { label: "ทุนประกันขั้นต่ำ", value: "150,000 บาท", icon: <Target className="w-5 h-5" />, color: "bg-rose-50 text-rose-600" },
                      { label: "ทุนประกันสูงสุด", value: "ตามเกณฑ์บริษัท", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-purple-50 text-purple-600" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl border border-surface-container shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                        <div className={`p-4 rounded-2xl ${item.color} mb-4`}>{item.icon}</div>
                        <p className="text-sm font-black text-primary/80 uppercase mb-2 tracking-widest">{item.label}</p>
                        <p className="text-lg font-black text-on-surface leading-tight">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 2: BENEFITS (Highlight Grid) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4">
                    <span className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-sm shadow-sm">02</span>
                    <h4 className="text-lg font-black text-primary">ผลประโยชน์ของแบบประกัน</h4>
                  </div>
                  <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 bg-primary rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
                       <ShieldCheck className="absolute top-4 right-4 text-white/10 w-24 h-24" />
                       <h5 className="text-xl font-black mb-4 relative z-10">กรณีเสียชีวิต หรือ <br/>ครบกำหนดสัญญา</h5>
                       <p className="text-white/70 text-sm leading-relaxed relative z-10">ผู้เอาประกันจะได้รับผลประโยชน์ที่มากที่สุดจาก 3 เงื่อนไขแล้วแต่จำนวนใดจะมากกว่า</p>
                    </div>
                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6 relative">
                       {[
                         { label: "ทุนประกัน", value: "100%", detail: "ของจำนวนเงินเอาประกันภัยเริ่มต้น", color: "border-primary" },
                         { label: "มูลค่าเวนคืน", value: "ตามตาราง", detail: "มูลค่าเวนคืนกรมธรรม์ ณ ปีที่เกิดเหตุ", color: "border-secondary" },
                         { label: "เบี้ยสะสม", value: "101%", detail: "ของเบี้ยประกันภัยหลักที่ชำระมาทั้งหมด", color: "border-primary/40" }
                       ].map((b, idx) => (
                         <div key={idx} className="relative">
                           <div className={`h-full p-6 bg-white rounded-3xl border-b-4 ${b.color} shadow-sm flex flex-col justify-between items-center text-center group hover:-translate-y-1 transition-transform relative z-10`}>
                              <p className="text-sm font-black text-primary/80 uppercase tracking-widest leading-none">{b.label}</p>
                              <div className="my-6">
                                 <p className="text-4xl font-black text-primary tracking-tighter">{b.value}</p>
                              </div>
                              <p className="text-xs font-bold text-on-surface/70 leading-tight">{b.detail}</p>
                           </div>
                           {idx < 2 && (
                             <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                               <span className="bg-secondary text-white font-black text-[10px] px-2 py-1 rounded-md shadow-sm border border-white">หรือ</span>
                             </div>
                           )}
                         </div>
                       ))}
                    </div>
                 </div>
                </div>

                {/* SECTION 3: DISCOUNTS (Premium Table Style) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-4">
                    <span className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-sm shadow-sm">03</span>
                    <h4 className="text-lg font-black text-primary">ส่วนลดเบี้ยประกันภัย <span className="text-primary/70 font-black text-sm ml-2"> (ต่อจำนวนเงินเอาประกันภัย 1,000 บาท)</span></h4>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8">
                     {/* Discount Group 1 */}
                     <div className="bg-white rounded-3xl border border-surface-container overflow-hidden shadow-sm group">
                        <div className="bg-primary/5 p-6 border-b border-surface-container flex justify-between items-center">
                           <h5 className="font-black text-primary uppercase text-sm tracking-wide">แผน 6 ปี และ 12 ปี</h5>
                           <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Coins size={16} /></div>
                        </div>
                        <div className="divide-y divide-surface-container">
                           {[
                             { r: "500,000 - 999,999", d: "2.00", badge: "Standard" },
                             { r: "1,000,000 - 2,999,999", d: "3.00", badge: "Gold" },
                             { r: "3,000,000 ขึ้นไป", d: "4.00", badge: "Platinum" }
                           ].map((row, i) => (
                             <div key={i} className="p-6 flex justify-between items-center px-10 hover:bg-primary/5 transition-colors">
                                <div className="space-y-1">
                                   <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">{row.badge}</p>
                                   <p className="text-base font-black text-on-surface/80">{row.r}</p>
                                </div>
                                <div className="text-right">
                                   <p className="text-3xl font-black text-primary leading-none tracking-tighter">{row.d}</p>
                                   <p className="text-xs font-bold text-on-surface/30 mt-1 uppercase">บาท</p>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                     {/* Discount Group 2 */}
                     <div className="bg-white rounded-3xl border border-surface-container overflow-hidden shadow-sm group">
                        <div className="bg-secondary/10 p-6 border-b border-secondary/20 flex justify-between items-center text-primary">
                           <h5 className="font-black uppercase text-sm tracking-wide">แผน 18 ปี และ 99 ปี</h5>
                           <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center"><Coins size={16} /></div>
                        </div>
                        <div className="divide-y divide-surface-container">
                           {[
                             { r: "300,000 - 999,999", d: "0.50", badge: "Basic" },
                             { r: "1,000,000 - 2,999,999", d: "1.00", badge: "Star" },
                             { r: "3,000,000 ขึ้นไป", d: "1.50", badge: "Elite" }
                           ].map((row, i) => (
                             <div key={i} className="p-6 flex justify-between items-center px-10 hover:bg-secondary/10 transition-colors">
                                <div className="space-y-1">
                                   <p className="text-[10px] font-black text-secondary/50 uppercase tracking-widest">{row.badge}</p>
                                   <p className="text-base font-black text-on-surface/80">{row.r}</p>
                                </div>
                                <div className="text-right text-primary">
                                   <p className="text-3xl font-black text-secondary leading-none tracking-tighter">{row.d}</p>
                                   <p className="text-xs font-bold text-on-surface/30 mt-1 uppercase">บาท</p>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
                   <p className="text-[11px] text-on-surface/50 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                     <CheckCircle2 size={14} className="text-secondary" />
                     ข้อควรจำ: เบี้ยประกันภัยขึ้นอยู่กับอายุ เพศ และการพิจารณารับประกันของบริษัทฯ
                   </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infographic Benefit Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-primary leading-tight lg:whitespace-nowrap"
            >
              เจาะลึกผลประโยชน์ แผนประกัน <span className="text-secondary underline decoration-secondary/30 underline-offset-8">LifeReady</span>
            </motion.h2>
            <p className="text-on-surface/60 max-w-xl mx-auto font-medium">เข้าใจง่ายในหน้าเดียว กับความคุ้มครองที่ออกแบบมาเพื่อคุณ</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Death Benefit Infographic */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-primary text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-2 leading-tight">ผลประโยชน์ 2 กรณี<br/><span className="text-secondary-container">เสียชีวิต หรือครบสัญญา</span></h3>
                  <p className="text-white/70 text-sm mb-8 italic">ผู้เอาประกันจะได้รับผลประโยชน์จาก 3 เงื่อนไขนี้ <span className="text-white font-bold underline decoration-secondary">"แล้วแต่จำนวนใดจะมากกว่า"</span>:</p>
                  
                  <div className="space-y-3 relative">
                    {[
                      { num: "01", title: "100% ของทุนประกัน", sub: "วงเงินเริ่มต้นที่คุณเลือก" },
                      { num: "02", title: "มูลค่าเวนคืนกรมธรรม์", sub: "ตามตารางท้ายกรมธรรม์" },
                      { num: "03", title: "101% ของเบี้ยที่จ่ายมา", sub: "การันตีไม่ขาดทุนเบี้ยประกัน" }
                    ].map((item, i) => (
                      <div key={i} className="relative">
                        <div className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors z-10 relative">
                          <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-black text-sm shrink-0 shadow-md">{item.num}</span>
                          <div>
                            <p className="font-bold text-sm text-white">{item.title}</p>
                            <p className="text-[11px] text-white/50">{item.sub}</p>
                          </div>
                        </div>
                        {i < 2 && (
                          <div className="flex justify-center -my-1 relative z-20">
                            <span className="bg-secondary text-white font-black text-[9px] px-2 py-0.5 rounded-full shadow-sm">หรือ</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle & Right: Timeline & Maturity */}
            <div className="lg:col-span-8 space-y-8">
              {/* Payment Timeline Card */}
              <div className="bg-surface-container-low border border-surface-container rounded-[2rem] p-8 md:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <Zap size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-primary">ออกแบบระยะเวลาชำระเบี้ยได้เอง</h3>
                      <p className="text-sm text-on-surface/50 font-medium tracking-tight">เลือกสั้น-ยาว ตามความพร้อมทางการเงินของคุณ</p>
                   </div>
                </div>

                <div className="space-y-12 py-4">
                  {[
                    { label: "เน้นเร็ว จบไว", years: "6 ปี", width: "w-[15%]", color: "bg-primary" },
                    { label: "บริหารจัดการง่าย", years: "12 ปี", width: "w-[30%]", color: "bg-primary/80" },
                    { label: "เฉลี่ยเบี้ยไม่หนัก", years: "18 ปี", width: "w-[45%]", color: "bg-primary/60" },
                    { label: "คุ้มครองต่อเนื่อง", years: "ถึงอายุ 99 ปี", width: "w-full", color: "bg-secondary" }
                  ].map((p, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between items-end mb-2">
                         <span className="text-xs font-bold text-on-surface/70">{p.label}</span>
                         <span className="text-sm font-black text-primary">{p.years}</span>
                      </div>
                      <div className="h-3 bg-surface-container-high rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: p.width === "w-full" ? "100%" : p.width.split('-')[1].replace(']', '') }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full ${p.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                   <div className="w-2 h-2 bg-secondary animate-pulse rounded-full"></div>
                   <p className="text-xs font-bold text-on-surface/70">คุ้มครองต่อเนื่องทุกแผน จนถึงอายุ 99 ปี</p>
                </div>
              </div>

              {/* Maturity Benefit Card */}
              <div className="bg-gradient-to-r from-secondary-container/50 to-secondary/10 border-2 border-dashed border-secondary/30 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="space-y-2">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">Maturity Benefit</span>
                   </div>
                   <h3 className="text-2xl font-black text-primary leading-tight">กรณีครบกำหนดสัญญา <br className="hidden md:block" />รับแผนเงินก้อน</h3>
                   <p className="text-on-surface/60 font-medium">เมื่อมีชีวิตอยู่จนถึงอายุครบ 99 ปี</p>
                   <p className="text-xs text-primary/60 font-bold italic">รับผลประโยชน์ที่มากที่สุดจาก 3 เงื่อนไขแล้วแต่จำนวนใดจะมากกว่า</p>
                </div>
                <div className="text-center md:text-right relative">
                   <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10"
                   >
                     <p className="text-6xl font-black text-secondary leading-none">100%</p>
                     <p className="text-primary font-bold mt-2">ของทุนประกันภัย*</p>
                   </motion.div>
                   {/* Decorative floating coins */}
                   <div className="absolute -top-4 -right-4 text-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Coins size={40} />
                   </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-[10px] text-center text-on-surface/40 italic">
            * หรือมูลค่าเวนคืนกรมธรรม์ หรือ 101% ของเบี้ยประกันภัยของกรมธรรม์หลักที่ชำระมาแล้วทั้งหมดแล้วแต่จำนวนใดจะมากกว่า
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-primary tracking-tight">จุดเด่นที่ทำให้ LifeReady พร้อมสำหรับคุณ</h2>
              <ul className="space-y-6">
                {[
                  "ความคุ้มครองชีวิตสูง มั่นใจว่าคนที่คุณรักจะไม่ลำบาก",
                  "เลือกจ่ายเบี้ยสั้นสุดเพียง 6 ปี หรือทยอยจ่ายสบายๆ จนถึงอายุ 99 ปี",
                  "ทุนประกันเริ่มต้นเพียง 150,000 บาท เข้าถึงได้ง่าย",
                  "สิทธิลดหย่อนภาษีได้เต็มจำนวนตามที่จ่ายจริง",
                  "สามารถซื้อสัญญาเพิ่มเติมสุขภาพ หรือโรคร้ายแรงควบคู่ไปได้"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-on-surface/80 leading-relaxed font-bold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
              <div className="relative scale-110 md:translate-x-4">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 opacity-20"></div>
                <img 
                  src="/LifeReady_1.webp" 
                  alt="Long-term planning" 
                  className="relative z-10 rounded-[2rem] shadow-2xl border-[16px] border-white w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-10">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-10 leading-tight italic text-green-300">
              "เพราะความรัก... คือการเตรียมความพร้อม"
            </h2>
            <div className="w-24 h-1.5 bg-white mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
              ประกันชีวิตไม่ใช่การกังวลเรื่องการจากไป แต่เป็นการมั่นใจว่าในวันที่เราไม่อยู่ ชีวิตของลูกและครอบครัวจะยังดำเนินต่อไปได้ตามที่เราตั้งใจไว้
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="LifeReady" 
      />
    </div>
  );
}
