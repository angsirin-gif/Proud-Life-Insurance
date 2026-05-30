import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  CheckCircle2, 
  Coins, 
  Calendar, 
  Phone,
  MessageCircle,
  HeartPulse,
  Sunrise,
  UserCheck,
  Users,
  ShieldCheck,
  CalendarClock,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useConsultation } from '../context/ConsultationContext';

import { ContactSection } from '../components/ContactSection';

const Hero = () => {
  const { openConsultation } = useConsultation();
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-container/20 to-surface">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-on-surface/50">
          <a href="/" className="hover:text-primary">หน้าหลัก</a>
          <span>/</span>
          <a href="#" className="hover:text-primary">แผนประกันส่วนบุคคล</a>
          <span>/</span>
          <span className="text-primary">ประกันบำนาญ</span>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary-container/30 rounded-full">
            Pension Insurance
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
            ประกันบำนาญ <br/>
            <span className="text-primary text-4xl md:text-5xl mt-2 block">วางแผนภาษีอย่างสำราญ</span>
          </h1>
          <p className="text-lg text-on-surface/70 leading-relaxed mb-10 max-w-lg">
            เตรียมพร้อมกระแสเงินสดหลังเกษียณด้วยเงินบำนาญที่แน่นอนทุกปี เพื่อชีวิตที่อิสระและมั่นคงในวัยพักผ่อน พร้อมสิทธิลดหย่อนภาษีเพิ่มเติมสูงสุด 200,000 บาท
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#comparison-table" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center">
              เปรียบเทียบแผนเกษียณ
            </a>
            <button 
              onClick={() => openConsultation('appointment')}
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-high transition-all"
            >
              ปรึกษาพี่ฝ้าย
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end z-10"
        >
          <div className="max-w-[640px] w-full p-4 bg-white rounded-[3rem] shadow-2xl transform rotate-3 border border-surface-container">
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden">
              <img 
                src="/Bamnan.webp" 
                alt="Happy retirement life"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 right-0 md:-left-6 bg-white p-5 rounded-xl shadow-xl max-w-[180px] transform -rotate-3 border-l-4 border-secondary z-20"
          >
            <p className="text-xs font-bold text-secondary mb-1">Happy Retirement</p>
            <p className="text-sm font-medium text-on-surface">เงินบำนาญแน่นอนทุกปี</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

const WhoIsItFor = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-primary leading-snug">ใครที่ควรทำประกัน<br/>กลุ่มนี้?</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl text-on-surface/70 leading-relaxed">
              ประกันบำนาญเหมาะสำหรับผู้ที่ต้องการวางแผนการเงินระยะยาวเพื่อสร้างรายได้ที่แน่นอนหลังเกษียณอายุ
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-surface-container-low rounded-[3rem]">
                <Sunrise className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">ผู้ที่ต้องการความมั่นคง</h3>
                <p className="text-sm text-on-surface/70">รับเงินบำนาญสม่ำเสมอทุกปี ไม่ต้องกังวลเรื่องเงินหมดก่อนวัยอันควร</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[3rem]">
                <TrendingUp className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">วัยทำงานรายได้สูง</h3>
                <p className="text-sm text-on-surface/70">ใช้สิทธิลดหย่อนภาษีสูงสุด 200,000 บาท เพิ่มเติมจากประกันชีวิตปกติ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCards = () => {
  const plans = [
    {
      name: "บำนาญ สมาร์ท 95",
      tag: "คุ้มครองยาวถึงอายุ 95",
      href: "/pension-insurance/bumnan-smart-95",
      features: ["รับเงินบำนาญคงที่ตั้งแต่อายุ 60-95 ปี", "การันตีการจ่ายบำนาญ 15 ปี", "ลดหย่อนภาษีได้สูงสุด 200,000 บาท"],
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">แผนเกษียณที่ออกแบบมาเพื่อคุณ</h2>
          <p className="text-on-surface/70">สร้างรายได้ที่แน่นอนหลังเกษียณ เพื่อความสุขที่ยั่งยืน</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`bg-surface-container-lowest p-8 rounded-[3rem] shadow-md border-t-4 border-secondary flex flex-col h-full`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-1">{plan.name}</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-wider">{plan.tag}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={plan.href} className="w-full py-3 rounded-full font-bold transition-all bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md text-center">
                ดูรายละเอียด
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const data = [
    { name: "บำนาญ สมาร์ท 95", point: "รับบำนาญยาวถึงอายุ 95", coverage: "ถึงอายุ 95 ปี", payment: "ถึงอายุ 60 ปี", target: "คนที่ต้องการเงินบำนาญยาวนานที่สุด" }
  ];

  return (
    <section id="comparison-table" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-12 text-center">ตารางเปรียบเทียบแผนประกัน</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-left">
                <th className="p-6 font-bold text-primary">ชื่อแผน</th>
                <th className="p-6 font-bold text-primary">จุดเด่นหลัก</th>
                <th className="p-6 font-bold text-primary">ระยะเวลาคุ้มครอง</th>
                <th className="p-6 font-bold text-primary">ระยะเวลาชำระเบี้ย</th>
                <th className="p-6 font-bold text-primary">เหมาะกับใคร</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-highest">
              {data.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-surface-container-lowest' : ''}>
                  <td className="p-6 font-bold">{row.name}</td>
                  <td className="p-6">{row.point}</td>
                  <td className="p-6">{row.coverage}</td>
                  <td className="p-6">{row.payment}</td>
                  <td className="p-6">{row.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Recommendation = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">เลือกแผนที่เหมาะกับคุณ</h2>
          <p className="opacity-80">ตอบคำถามง่ายๆ เพื่อค้นหาความมั่นคงที่ใช่</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl text-on-surface col-span-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-primary">ต้องการคำแนะนำแผนภาษีและการเกษียณ?</h3>
            </div>
            <p className="mb-6 text-on-surface/70 leading-relaxed text-center">ทักมาปรึกษาพี่ฝ้ายเพื่อออกแบบแผนที่เหมาะกับเป้าหมายและความสามารถในการออมของคุณที่สุดได้เลยค่ะ</p>
            <div className="bg-secondary/5 p-4 rounded-xl border border-secondary/20">
              <p className="font-bold text-secondary text-center">ปรึกษาพี่ฝ้ายได้ฟรี ไม่มีค่าใช้จ่ายค่ะ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "ประกันบำนาญลดหย่อนภาษีได้เท่าไหร่?", a: "ประกันบำนาญสามารถนำไปลดหย่อนภาษีได้เพิ่มเติมจากประกันชีวิตทั่วไปอีกสูงสุด 200,000 บาท (แต่ไม่เกิน 15% ของเงินได้) และเมื่อรวมกับกองทุนเกษียณอื่นๆ เช่น RMF, SSF, กบข. แล้วต้องไม่เกิน 500,000 บาทค่ะ" },
    { q: "ควรเริ่มทำประกันบำนาญตอนอายุเท่าไหร่?", a: "ยิ่งเริ่มเร็วยิ่งดีค่ะ เพราะเบี้ยประกันจะถูกกว่าและมีระยะเวลาในการสะสมเงินที่นานกว่า ทำให้ได้รับเงินบำนาญที่สูงขึ้นในขณะที่จ่ายเบี้ยน้อยลงค่ะ" },
    { q: "ถ้าเสียชีวิตก่อนได้รับบำนาญ ครอบครัวจะได้อะไรไหม?", a: "หากเสียชีวิตก่อนเริ่มรับบำนาญ บริษัทจะจ่ายเงินชดเชยให้ทายาทตามมูลค่าเวนคืนหรือเบี้ยที่จ่ายมาแล้ว (ตามเงื่อนไขแผนที่เลือก) เพื่อเป็นมรดกให้ครอบครัวค่ะ" }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-12 text-center">คำถามที่พบบ่อย (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-surface-container-lowest rounded-[3rem] border transition-all ${openIdx === idx ? 'border-primary-container shadow-sm' : 'border-transparent'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-lg"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-on-surface/70 leading-relaxed border-t border-surface-container pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PensionInsurance() {
  const { openConsultation } = useConsultation();
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhoIsItFor />
        <ProductCards />
        <ComparisonTable />
        <Recommendation />
        <FAQ />
        <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
      </main>
      
      {/* Quick Contact Bar (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full flex items-center justify-around p-4">
          <a href="tel:+66896965397" className="flex flex-col items-center gap-1 text-primary">
            <Phone className="w-6 h-6" />
            <span className="text-[10px] font-bold">โทรหาเรา</span>
          </a>
          <a href="https://line.me/ti/p/@proudlifeinsurance" className="flex flex-col items-center gap-1 text-secondary">
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="text-[10px] font-bold">LINE Chat</span>
          </a>
          <button 
            onClick={() => openConsultation('appointment')}
            className="bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/20"
          >
            <CalendarClock className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

