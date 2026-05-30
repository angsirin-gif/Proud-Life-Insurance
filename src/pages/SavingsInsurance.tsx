import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  CheckCircle2, 
  Wallet, 
  TrendingUp, 
  Coins, 
  Phone,
  MessageCircle,
  HeartPulse,
  PiggyBank,
  LineChart,
  Users,
  Landmark,
  CalendarClock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { ContactSection } from '../components/ContactSection';
import { useConsultation } from '../context/ConsultationContext';

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
          <span className="text-primary">ประกันสะสมทรัพย์</span>
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
            Savings Insurance
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
            ประกันสะสมทรัพย์ <br/>
            <span className="text-primary text-4xl md:text-5xl mt-2 block">ออมเงินพร้อมความคุ้มครอง</span>
          </h1>
          <p className="text-lg text-on-surface/70 leading-relaxed mb-10 max-w-lg">
            สร้างวินัยการออมและวางแผนการเงินเพื่ออนาคตที่มั่นคง พร้อมรับความคุ้มครองชีวิตและสิทธิประโยชน์ทางภาษีที่คุ้มค่า
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#comparison-table" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center">
              เปรียบเทียบทั้ง 5 แผน
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="max-w-[580px] w-full p-4 bg-white rounded-[3rem] shadow-2xl transform rotate-3 border border-surface-container">
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden">
              <img 
                src="/Saving.webp" 
                alt="Financial planning and growth"
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
            <p className="text-xs font-bold text-secondary mb-1">Smart Savings</p>
            <p className="text-sm font-medium text-on-surface">ออมสั้น คุ้มครองยาว</p>
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
              ประกันสะสมทรัพย์เหมาะสำหรับผู้ที่ต้องการสร้างวินัยการออมเงินอย่างเป็นระบบ พร้อมรับผลตอบแทนที่แน่นอนและความคุ้มครองชีวิต
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-surface-container-low rounded-[3rem]">
                <PiggyBank className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">ผู้ที่ต้องการออมเงิน</h3>
                <p className="text-sm text-on-surface/70">สร้างเงินก้อนเพื่อเป้าหมายในอนาคต เช่น การศึกษาบุตร หรือซื้อบ้าน</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[3rem]">
                <TrendingUp className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">ผู้ที่ต้องการลดหย่อนภาษี</h3>
                <p className="text-sm text-on-surface/70">ใช้สิทธิประโยชน์ทางภาษีให้คุ้มค่าที่สุด พร้อมรับเงินคืนรายปี</p>
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
      name: "Global Index 16/6",
      tag: "ออมควบการลงทุนโลก",
      href: "/savings-insurance/global-index-16-6",
      features: ["โอกาสรับผลตอบแทนจากดัชนีระดับโลก", "การันตีเงินต้นเมื่อครบสัญญา", "คุ้มครองชีวิตและออมเงินในหนึ่งเดียว"],
      highlight: true
    },
    {
      name: "Life Super Save 14/5",
      tag: "ออมสั้น 5 ปี คุ้มครอง 14 ปี",
      href: "/savings-insurance/super-save-14-5",
      features: ["ชำระเบี้ยสั้นเพียง 5 ปี", "คุ้มครองยาวถึง 14 ปี", "ไม่ตรวจและไม่ตอบคำถามสุขภาพ"],
      highlight: false
    },
    {
      name: "Ultimate Growth",
      tag: "เน้นการเติบโตของเงินทุน",
      href: "/savings-insurance/ultimate-growth",
      features: ["แผนออมเงินระยะยาวเพื่อเป้าหมายใหญ่", "รับเงินคืนเพิ่มขึ้นทุกปี", "ลดหย่อนภาษีได้สูงสุด"],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">แผนออมเงินเพื่ออนาคต</h2>
          <p className="text-on-surface/70">สร้างความมั่งคั่งพร้อมความอุ่นใจ ด้วยประกันสะสมทรัพย์</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    { name: "Global Index 16/6", point: "โอกาสรับผลตอบแทนดัชนีโลก", coverage: "16 ปี", payment: "6 ปี", target: "คนที่ต้องการผลตอบแทนสูงกว่าเงินฝาก" },
    { name: "Life Super Save 14/5", point: "ออมสั้น 5 ปี รับเงินคืนสูงสุด 608%", coverage: "14 ปี", payment: "5 ปี", target: "ต้องการออมสั้นและไม่กังวลเรื่องสุขภาพ" },
    { name: "Ultimate Growth", point: "เน้นการเติบโตของทุนระยะยาว", coverage: "20-25 ปี", payment: "10-25 ปี", target: "คนที่ต้องการออมเงินเพื่อเป้าหมายใหญ่ในอนาคต" }
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
          <p className="opacity-80">ตอบคำถามง่ายๆ เพื่อค้นหาความมั่งคั่งที่ใช่</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl text-on-surface"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-primary">ต้องการออมสั้นและได้เงินคืนเร็ว?</h3>
            </div>
            <p className="mb-6 text-on-surface/70 leading-relaxed">หากคุณต้องการจบภาระการจ่ายเบี้ยไวและมีกระแสเงินสดคืนทุกปี</p>
            <div className="bg-secondary/5 p-4 rounded-xl border border-secondary/20">
              <p className="font-bold text-secondary text-center">แนะนำ: Life Super Save 14/5</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl text-on-surface"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-primary">ต้องการโอกาสรับผลตอบแทนสูง?</h3>
            </div>
            <p className="mb-6 text-on-surface/70 leading-relaxed">เน้นการเติบโตของเงินทุนผ่านดัชนีการลงทุนระดับโลก</p>
            <div className="bg-secondary/5 p-4 rounded-xl border border-secondary/20">
              <p className="font-bold text-secondary text-center">แนะนำ: Global Index 16/6</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "ประกันสะสมทรัพย์ลดหย่อนภาษีได้เท่าไหร่?", a: "เบี้ยประกันสะสมทรัพย์ที่มีระยะเวลาคุ้มครองตั้งแต่ 10 ปีขึ้นไป สามารถนำไปลดหย่อนภาษีได้ตามจริง สูงสุดไม่เกิน 100,000 บาทต่อปีค่ะ" },
    { q: "ถ้าชำระเบี้ยไม่ไหว สามารถเวนคืนกรมธรรม์ได้ไหม?", a: "สามารถทำได้ค่ะ แต่การเวนคืนก่อนครบสัญญาอาจทำให้ได้รับเงินคืนน้อยกว่าเบี้ยที่จ่ายไป แนะนำให้ปรึกษาพี่ฝ้ายเพื่อดูทางเลือกอื่น เช่น การใช้มูลค่าเงินสำเร็จ หรือการกู้กรมธรรม์ค่ะ" },
    { q: "เงินคืนรายปีต้องเสียภาษีไหม?", a: "เงินคืนรายปีจากกรมธรรม์ประกันชีวิต (Cash Back) ได้รับการยกเว้นภาษีเงินได้บุคคลธรรมดาค่ะ คุณจะได้รับเงินเต็มจำนวนตามที่ระบุในสัญญา" }
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

export default function SavingsInsurance() {
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

