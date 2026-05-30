import { useState } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  ShieldAlert, 
  Clock, 
  HeartPulse, 
  Phone,
  MessageCircle,
  Stethoscope,
  Activity,
  Globe, 
  Bike, 
  Wallet, 
  CalendarClock, 
  ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

import { ContactSection } from '../components/ContactSection';
import { PremiumCalculatorModal } from '../components/PremiumCalculatorModal';
import { useConsultation } from '../context/ConsultationContext';

const Hero = () => {
  const { openConsultation } = useConsultation();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-container/20 to-surface">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-on-surface/50">
          <a href="/" className="hover:text-primary transition-colors">หน้าหลัก</a>
          <span>/</span>
          <a href="#" className="hover:text-primary transition-colors">แผนประกันส่วนบุคคล</a>
          <span>/</span>
          <span className="text-primary">ประกันอุบัติเหตุ</span>
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
            Accident Insurance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
            ประกันอุบัติเหตุ <br/>
            <span className="text-primary text-4xl md:text-5xl mt-2 block">คุ้มครองทันใจ 24 ชม.</span>
          </h1>
          <p className="text-lg text-on-surface/70 leading-relaxed mb-6 max-w-lg">
            เน้นคุ้มครองเหตุไม่คาดฝันจากอุบัติเหตุ 24 ชั่วโมง ทุกที่ทั่วโลก ตามเงื่อนไขและแผนความคุ้มครองที่เลือก เพื่อให้คุณก้าวเดินต่อได้อย่างมั่นใจ ไม่สะดุด
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface/80">
              <Globe className="w-4 h-4 text-secondary" />
              <span>คุ้มครอง 24 ชม. ทั่วโลก</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface/80">
              <Bike className="w-4 h-4 text-secondary" />
              <span>รวมอุบัติเหตุจากมอเตอร์ไซค์</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface/80">
              <Wallet className="w-4 h-4 text-secondary" />
              <span>มีค่ารักษาและค่าชดเชย</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/accident-insurance/pa" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 inline-flex items-center">
              ดูแผนประกัน PA
            </Link>
            <button 
              onClick={() => openConsultation('appointment')}
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-high transition-all active:scale-95"
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
          <div className="max-w-[580px] w-full p-4 bg-white rounded-[2rem] shadow-2xl transform -rotate-3 border border-surface-container">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden">
              <img 
                src="/Accident.webp" 
                alt="Safe and active life"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 right-0 md:-left-6 bg-white p-5 rounded-lg shadow-xl max-w-[180px] transform rotate-3 border-l-4 border-secondary z-20"
          >
            <p className="text-xs font-bold text-secondary mb-1">Safety First</p>
            <p className="text-sm font-medium text-on-surface">คุ้มครองครอบคลุมทั่วโลก</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

const WhoIsItFor = () => {
  const personas = [
    {
      title: "คนขับรถ/เดินทางบ่อย",
      desc: "เพิ่มความอุ่นใจในทุกเส้นทาง ไม่ว่าจะขับเองหรือโดยสารสาธารณะ",
      icon: <Globe className="w-8 h-8 text-secondary" />
    },
    {
      title: "คนทำงานนอกสถานที่",
      desc: "คุ้มครองความเสี่ยงจากการทำงานที่อาจเกิดอุบัติเหตุได้ทุกเมื่อ",
      icon: <Activity className="w-8 h-8 text-secondary" />
    },
    {
      title: "คนที่มีประกันสุขภาพอยู่แล้ว",
      desc: "ใช้เสริมเพื่อรับเงินก้อนกรณีเหตุรุนแรง ซึ่งประกันสุขภาพทั่วไปอาจไม่ครอบคลุม",
      icon: <ShieldAlert className="w-8 h-8 text-secondary" />
    },
    {
      title: "คนกังวลอุบัติเหตุมอเตอร์ไซค์",
      desc: "แผนนี้รวมความคุ้มครองจากการขับขี่หรือโดยสารรถจักรยานยนต์ชัดเจน",
      icon: <Bike className="w-8 h-8 text-secondary" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">ประกัน PA นี้เหมาะกับใคร?</h2>
          <p className="text-on-surface/70">เหตุผลที่คุณควรมีประกันอุบัติเหตุติดตัวไว้</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((item, idx) => (
            <div key={idx} className="bg-surface-container-low p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-surface-container">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-on-surface/60 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductDetail = ({ onCheckPremium }: { onCheckPremium: () => void }) => {
  const features = [
    {
      title: "คุ้มครองค่ารักษาพยาบาล",
      desc: "ครอบคลุมทั้งกรณีผู้ป่วยใน (IPD) และผู้ป่วยนอก (OPD) ตามเงื่อนไขแผน ไม่ต้องสำรองจ่ายในโรงพยาบาลคู่สัญญา",
      icon: <Stethoscope className="w-6 h-6 text-primary" />
    },
    {
      title: "ค่าชดเชยรายสัปดาห์",
      desc: "มีค่าชดเชยรายสัปดาห์ หากทุพพลภาพชั่วคราวสิ้นเชิงจากอุบัติเหตุ ตามแผนที่เลือก",
      icon: <Activity className="w-6 h-6 text-primary" />
    },
    {
      title: "คุ้มครองกรณีเสียชีวิต",
      desc: "คุ้มครองกรณีเสียชีวิต/สูญเสียอวัยวะ/สายตา/ทุพพลภาพถาวรสิ้นเชิงจากอุบัติเหตุ",
      icon: <ShieldAlert className="w-6 h-6 text-primary" />
    },
    {
      title: "ดูแล 24 ชั่วโมง ทั่วโลก",
      desc: "ไม่ว่าจะเดินทางไปที่ไหน ก็อุ่นใจด้วยความคุ้มครองที่ติดตามคุณไปทุกที่ ทุกเวลา",
      icon: <Clock className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-on-surface">ประกันอุบัติเหตุส่วนบุคคล (PA)</h2>
              <p className="text-on-surface/70 text-lg leading-relaxed">
                แผนประกันที่ให้ความคุ้มครองที่เรียบง่ายแต่ทรงพลัง ออกแบบมาเพื่อรับมือกับเหตุการณ์ไม่คาดฝันโดยเฉพาะ
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="p-6 bg-surface-container-lowest rounded-[2rem] border border-surface-container shadow-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-surface-container shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">จุดเด่นของแผนนี้</h3>
            <ul className="space-y-4">
              {[
                "โดยทั่วไปไม่ต้องตรวจสุขภาพ",
                "มีหลายแผนให้เลือกตามอาชีพและงบประมาณ",
                "คุ้มครองรวมถึงการขับขี่จักรยานยนต์",
                "คุ้มครอง 24 ชั่วโมง ทุกที่ทั่วโลก",
                "มีค่าชดเชยรายสัปดาห์ตามแผนที่เลือก",
                "วงเงินคุ้มครองเพิ่มขึ้นปีละ 5% (สูงสุด 25%)"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-on-surface leading-snug">{text}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onCheckPremium}
              className="w-full mt-10 bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
            >
              เช็คเบี้ยประกันของคุณ
            </button>
            <p className="text-center mt-4 text-xs text-on-surface/50">
              เบี้ยประกันขึ้นอยู่กับอายุ อาชีพ และแผนความคุ้มครองที่เลือก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">PA ต่างจากประกันสุขภาพอย่างไร?</h2>
          <p className="text-on-surface/70">ทำความเข้าใจเพื่อเลือกความคุ้มครองที่ตรงจุด</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-surface-container-highest rounded-xl overflow-hidden border border-surface-container-highest shadow-xl">
          <div className="bg-white p-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">ประกันอุบัติเหตุ (PA)</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-on-surface/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>เน้นเหตุจาก <strong>"อุบัติเหตุ"</strong> เท่านั้น</span>
              </li>
              <li className="flex items-start gap-3 text-on-surface/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>เน้นเงินก้อนกรณีเสียชีวิต/ทุพพลภาพ</span>
              </li>
              <li className="flex items-start gap-3 text-on-surface/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>เบี้ยประกันคงที่ ไม่ปรับตามอายุ</span>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest p-10">
            <div className="flex items-center gap-3 mb-6">
              <HeartPulse className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-secondary">ประกันสุขภาพ</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-on-surface/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>ครอบคลุมทั้ง <strong>"โรคภัย"</strong> และอุบัติเหตุ</span>
              </li>
              <li className="flex items-start gap-3 text-on-surface/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>เน้นค่ารักษาพยาบาล (IPD/OPD)</span>
              </li>
              <li className="flex items-start gap-3 text-on-surface/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>เบี้ยประกันปรับเพิ่มตามช่วงอายุ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "ประกันอุบัติเหตุ PA คืออะไร?", a: "เป็นประกันที่เน้นคุ้มครองเหตุไม่คาดฝันจากอุบัติเหตุ เช่น การเสียชีวิต สูญเสียอวัยวะ ค่ารักษาพยาบาลจากอุบัติเหตุ และค่าชดเชยรายสัปดาห์ค่ะ" },
    { q: "PA ต่างจากประกันสุขภาพอย่างไร?", a: "PA เน้นเหตุที่เกิดจาก “อุบัติเหตุ” ส่วนประกันสุขภาพครอบคลุมการเจ็บป่วยจากโรคด้วยค่ะ" },
    { q: "ต้องตรวจสุขภาพไหม?", a: "โดยทั่วไปไม่ต้องตรวจสุขภาพค่ะ แต่ต้องแถลงข้อมูลสุขภาพตามจริงค่ะ" },
    { q: "ความคุ้มครองนานแค่ไหน?", a: "สัญญา PA นี้มีระยะเวลาคุ้มครอง 1 ปี ต่ออายุปีต่อปี ต่อได้ถึงอายุ 64 ปีค่ะ" }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-12 text-center">คำถามที่พบบ่อย (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`bg-surface-container-lowest rounded-[1rem] border transition-all ${openIdx === idx ? 'border-primary shadow-sm' : 'border-transparent'}`}>
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-lg">
                <span className={openIdx === idx ? 'text-primary' : 'text-on-surface'}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180 text-primary' : 'text-on-surface/50'}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-on-surface/70 leading-relaxed border-t border-surface-container pt-4">{faq.a}</div>
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

export default function AccidentInsurance() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhoIsItFor />
        <ProductDetail onCheckPremium={() => setIsModalOpen(true)} />
        <Comparison />
        <FAQ />
        <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
      </main>
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full flex items-center justify-around p-4">
          <a href="tel:+66896965397" className="flex flex-col items-center gap-1 text-primary"><Phone className="w-6 h-6" /><span className="text-[10px] font-bold">โทรหาเรา</span></a>
          <a href="https://line.me/ti/p/@proudlifeinsurance" className="flex flex-col items-center gap-1 text-secondary"><MessageCircle className="w-6 h-6 fill-current" /><span className="text-[10px] font-bold">LINE Chat</span></a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/20"
          >
            <CalendarClock className="w-6 h-6" />
          </button>
        </div>
      </div>

      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="ประกันอุบัติเหตุ PA" 
      />
    </div>
  );
}
