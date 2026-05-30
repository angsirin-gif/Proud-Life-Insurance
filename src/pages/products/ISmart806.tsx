import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Coins, 
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  Heart,
  Users
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function ISmart806() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    {
      icon: <Zap className="text-primary w-6 h-6" />,
      title: "จ่ายสั้น จบเร็ว",
      desc: "ชำระเบี้ยประกันภัยเพียง 6 ปี เพื่อสร้างสินทรัพย์ระยะยาว"
    },
    {
      icon: <Coins className="text-primary w-6 h-6" />,
      title: "เงินคืนทุกปี",
      desc: "รับเงินจ่ายคืนทุกปี ตั้งแต่สิ้นปีกรมธรรม์ที่ 1 จนถึงอายุ 79 ปี"
    },
    {
      icon: <TrendingUp className="text-primary w-6 h-6" />,
      title: "คุ้มครองสูง 200%",
      desc: "ความคุ้มครองชีวิตสูงสุดถึง 200% ของจำนวนเงินเอาประกันภัย"
    },
    {
      icon: <Sparkles className="text-primary w-6 h-6" />,
      title: "ความมั่งคั่งที่แน่นอน",
      desc: "รับเงินก้อน 200% ของทุนประกัน เมื่อครบกำหนดสัญญา (อายุ 80 ปี)"
    }
  ];

  const annualBenefits = [
    { year: "ปีที่ 1 - 10", rate: "10% ของทุนประกัน" },
    { year: "ปีที่ 11 - 20", rate: "11% ของทุนประกัน" },
    { year: "ปีที่ 21 ขึ้นไป", rate: "12% ของทุนประกัน" },
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
              <span className="text-primary font-bold">iSmart 80/6</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-bold text-secondary text-sm">
              <Sparkles size={16} /> แนะนำเป็นพิเศษ
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              iSmart 80/6 (ไอสมาร์ท)<br/>
              <span className="text-on-surface">จ่ายสั้น คุ้มครองสูง รับเงินคืนไว</span>
            </h1>
            <p className="text-lg text-on-surface/70 mb-8 leading-relaxed">
              อิสระทางการเงินที่เริ่มต้นได้ทันที ด้วยการออมเงินเพียง 6 ปี แต่รับเงินคืนสม่ำเสมอทุกปีจนถึงอายุ 80 ปี พร้อมความคุ้มครองชีวิตที่สูงเป็นพิเศษเพื่อคนที่คุณรัก
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
              src="/iSmart80_6.webp" 
              alt="iSmart 80/6 Investment and Protection" 
              className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-[85%] h-auto"
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
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-white overflow-hidden rounded-xl shadow-xl border border-surface-container">
              <h3 className="text-2xl font-bold p-10 pb-4 flex items-center gap-2">
                <TrendingUp className="text-secondary" /> ตารางผลประโยชน์ iSmart 80/6
              </h3>
              <div className="px-10 pb-6 pt-2">
                <div className="p-6 bg-primary/5 rounded-xl">
                  <p className="text-sm font-bold text-primary mb-3 uppercase tracking-widest text-[#006064]">เงินจ่ายคืนรายปี (เงินคืนไว)</p>
                  <div className="space-y-3">
                    {annualBenefits.map((item, id) => (
                      <div key={id} className="flex justify-between items-center text-sm font-medium">
                        <span>{item.year}</span>
                        <span className="text-primary font-black">{item.rate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { t: "อายุรับประกัน", v: "1 เดือน - 70 ปี" },
                    { t: "ระยะเวลาความคุ้มครอง", v: "ถึงอายุ 80 ปี" },
                    { t: "ระยะเวลาชำระเบี้ย", v: "6 ปี" },
                    { t: "ครบกำหนดสัญญา (อายุ 80 ปี)", v: "รับเงินก้อน 200%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-surface-container hover:bg-surface-container-low transition-colors">
                      <td className="p-4 pl-10 text-sm font-medium text-on-surface/70 w-1/2">{row.t}</td>
                      <td className="p-4 pr-10 text-sm font-bold text-primary text-right">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-primary">ทำไม iSmart 80/6 ถึงเป็นตัวเลือกที่ชาญฉลาด?</h2>
              <ul className="space-y-6">
                {[
                  "จ่ายเบี้ยประกันสั้นเพียง 6 ปี แต่ได้รับความคุ้มครองชีวิตยาวถึงอายุ 80 ปี",
                  "มีเงินสดคืนกลับมาใช้จ่ายในทุกๆ ปี ตั้งแต่สิ้นปีแรก",
                  "ความคุ้มครองชีวิตสูงถึง 200% ของทุนประกัน ให้คนข้างหลังอุ่นใจ",
                  "เงินคืนจะเพิ่มขึ้นตามระยะเวลาที่ถือกรมธรรม์ (สูงสุด 12% ต่อปี)",
                  "เบี้ยประกันสามารถนำไปลดหย่อนภาษีได้สูงสุด 100,000 บาท"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-on-surface/80 leading-relaxed font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary/5 rounded-xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-primary/10">
            <div className="md:w-1/3 flex justify-center">
               <Users size={80} className="text-primary opacity-20" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-black text-primary mb-6">iSmart 80/6 เหมาะสำหรับใคร?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                 {["คนที่อยากออมเงินระยะสั้นแต่คุ้มครองยาว", "คนที่อยากมีกระแสเงินสดคืนกลับมาทุกปี", "หัวหน้าครอบครัวที่ต้องการความคุ้มครองสูง", "วัยทำงานที่มองหาการลดหย่อนภาษีที่มีประสิทธิภาพ"].map((txt, i)=>(
                   <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-primary/5 shadow-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="font-bold text-on-surface/80 text-sm">{txt}</span>
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
              "วางแผนวันนี้ เพื่อความมั่นคงที่ยั่งยืน"
            </h2>
            <div className="w-24 h-1.5 bg-white mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
              iSmart 80/6 คือสะพานเชื่อมระหว่างการออมในปัจจุบันและความสุขในอนาคต ช่วยให้คุณมีเงินใช้ในทุกช่วงวัยของชีวิตอย่างไม่สะดุด
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผน iSmart 80/6" />
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="iSmart 80/6" 
      />
    </div>
  );
}
