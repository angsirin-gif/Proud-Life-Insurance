import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Coins, 
  Calendar,
  Clock,
  CircleDollarSign,
  Briefcase,
  Heart,
  Users
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function TwelvePL() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    {
      icon: <Clock size={24} className="text-primary" />,
      title: "ชำระเบี้ยสั้น 12 ปี",
      desc: "บริหารเงินง่าย จบภาระไว คุ้มครองยาวนานถึงอายุ 85 ปี"
    },
    {
      icon: <CircleDollarSign size={24} className="text-primary" />,
      title: "เงินคืนรายปี",
      desc: "รับเงินคืนในทุกปี ตั้งแต่สิ้นปีกรมธรรม์ที่ 1 เป็นต้นไป"
    },
    {
      icon: <ShieldCheck size={24} className="text-primary" />,
      title: "คุ้มครองชีวิต",
      desc: "สร้างหลักประกันที่แน่นอนให้คนข้างหลัง 100% ของทุนประกัน"
    },
    {
      icon: <Briefcase size={24} className="text-primary" />,
      title: "ลดหย่อนภาษี",
      desc: "ใช้สิทธิลดหย่อนภาษีเงินได้บุคคลธรรมดาได้สูงสุด 100,000 บาท"
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
              <span className="text-primary font-bold">12PL</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              12PL (Whole Life 12PL)<br/>
              <span className="text-on-surface">คุ้มครองต่อเนื่อง พร้อมเงินคืนรายปี</span>
            </h1>
            <p className="text-lg text-on-surface/70 mb-8 leading-relaxed">
              ตอบโจทย์การบริหารเงินอย่างชาญฉลาด ด้วยการชำระเบี้ยเพียง 12 ปี แต่ได้รับความคุ้มครองต่อเนื่องจนถึงอายุ 85 ปี พร้อมมีกระแสเงินสดคืนระหว่างทางเพื่อความคล่องตัว
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://line.me/ti/p/@proudlifeinsurance"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all inline-block text-center"
              >
                เช็กเบี้ยประกันแผนนี้
              </a>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="/12PL_1.webp" 
              alt="12PL Insurance Planning" 
              className="rounded-[2rem] shadow-2xl border-[16px] border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-primary">จุดเด่นผลิตภัณฑ์</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-surface-container-low border border-surface-container transition-all hover:shadow-lg">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2 text-primary text-lg tracking-tight">{item.title}</h3>
                <p className="text-sm text-on-surface/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-primary">ทำไมแผน 12PL ถึงคุ้มค่าสำหรับคุณ?</h2>
              <ul className="space-y-6">
                {[
                  "เหมาะสำหรับหัวหน้าครอบครัวที่ต้องการสร้างมรดก และมีเงินคืนมาใช้จ่ายรายปี",
                  "จ่ายเบี้ยคงที่ตลอด 12 ปี ไม่ต้องกังวลเรื่องการปรับเบี้ยตามอายุ",
                  "คุ้มครองกรณีเสียชีวิต 100% ของจำนวนเงินเอาประกันภัยตลอดสัญญา",
                  "รับเงินคืนเมื่อครบกำหนดสัญญา (อายุ 85 ปี) อีก 100% ของจำนวนเงินเอาประกันภัย",
                  "สามารถซื้อสัญญาเพิ่มเติมสุขภาพ หรือค่าชดเชยรายวันควบคู่ไปได้"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-on-surface/80 leading-relaxed font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white overflow-hidden rounded-xl shadow-xl border border-surface-container">
              <h3 className="text-2xl font-bold p-10 pb-4 flex items-center gap-2">
                <Calendar className="text-secondary" /> เงื่อนไขการรับประกัน
              </h3>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { t: "อายุรับประกัน", v: "1 เดือน - 60 ปี" },
                    { t: "ระยะเวลาความคุ้มครอง", v: "ถึงอายุ 85 ปี" },
                    { t: "ระยะเวลาชำระเบี้ย", v: "12 ปี" },
                    { t: "งวดการชำระเบี้ย", v: "รายปี, ราย 6 เดือน, ราย 3 เดือน, รายเดือน" },
                    { t: "จำนวนเงินเอาประกันภัยขั้นต่ำ", v: "100,000 บาท" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-surface-container hover:bg-surface-container-low transition-colors">
                      <td className="p-4 pl-10 text-sm font-medium text-on-surface/70 w-1/2">{row.t}</td>
                      <td className="p-4 pr-10 text-sm font-bold text-primary text-right">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary/5 rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-primary/10">
            <div className="md:w-1/3 flex justify-center">
               <div className="relative">
                 <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110"></div>
                 <Users size={120} className="text-primary relative z-10" />
               </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-black text-primary mb-8">ใครที่เหมาะกับแผน 12PL?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                 {["หัวหน้าครอบครัวที่ต้องการความอุ่นใจ", "คนวัยทำงานที่อยากออมเงินพร้อมคุ้มครองชีวิต", "คนที่ต้องการปูพื้นฐานมรดกให้ลูกหลาน", "คนที่ต้องการสิทธิลดหย่อนภาษีสูงสุด"].map((txt, i)=>(
                   <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-primary/5 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                      <div className="w-2.5 h-2.5 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,193,7,0.5)]"></div>
                      <span className="font-bold text-on-surface/80 text-sm leading-tight">{txt}</span>
                   </div>
                 ))}
              </div>
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
              "เพราะหลักประกันที่มั่นคง คือจุดเริ่มต้นของความสุข"
            </h2>
            <div className="w-24 h-1.5 bg-white mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
              12PL ออกแบบมาเพื่อให้คุณได้ทำหน้าที่ดูแลคนข้างหลังได้อย่างสมบูรณ์แบบที่สุด พร้อมความยืดหยุ่นทางเงินคืนที่ตอบโจทย์ชีวิตในปัจจุบัน
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผน 12PL" />
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="12PL" 
      />
    </div>
  );
}
