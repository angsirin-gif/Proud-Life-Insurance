import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Coins, 
  Target,
  Clock,
  Heart,
  Gem,
  Landmark,
  HandCoins,
  Medal,
  Users
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function LifeTreasure() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    {
      icon: <Gem className="w-6 h-6 text-primary" />,
      title: "วงเงินมรดกสูง",
      desc: "เริ่มต้นมรดกเงินสด 10 ล้านบาท เพื่อรากฐานที่มั่นคงที่สุด"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "คุ้มครองยาวนาน",
      desc: "ดูแลความมั่งคั่งและมรดกของคุณยาวนานจนถึงอายุ 99 ปี"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "บริหารภาษีมีประสิทธิภาพ",
      desc: "ลดภาระภาษีมรดก และลดหย่อนภาษีเงินได้ตามกฎหมาย"
    },
    {
      icon: <Coins className="w-6 h-6 text-primary" />,
      title: "สินทรัพย์ปลอดภาระ",
      desc: "มรดกเงินสดที่ส่งถึงมือทายาทโดยตรง ไม่ผ่านกระบวนการจัดการมรดกที่ซับซ้อน"
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
              <span className="text-primary">LifeTreasure</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              LifeTreasure (ไลฟ์ เทรเชอร์)<br/>
              <span className="text-on-surface opacity-100">มรดกล้ำค่า ส่งต่อความมั่งคั่งไม่รู้จบ</span>
            </h1>
            <p className="text-lg text-on-surface/70 mb-8 leading-relaxed">
              นิยามใหม่ของการส่งต่อความสำเร็จ ออกแบบมาเพื่อเป็นของขวัญชิ้นสุดท้ายที่ยิ่งใหญ่ที่สุดสำหรับคนที่คุณรัก ด้วยทุนประกันภัยระดับ 10 ล้านบาทขึ้นไป เพื่อการจัดทำกองมรดกที่มีประสิทธิภาพ
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
              src="/LifeTreasure_2.webp" 
              alt="LifeTreasure Elite Protection" 
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-primary">จุดเด่นของการสร้างมรดกด้วย LifeTreasure</h2>
              <ul className="space-y-6">
                {[
                  "ความคุ้มครองกรณีเสียชีวิต 100% ของทุนประกัน (ขั้นต่ำ 10 ล้านบาท)",
                  "สร้างกองมรดกเงินสดได้ทันที โดยไม่ต้องรอสะสมในรูปแบบสินทรัพย์อื่น",
                  "มรดกได้รับยกเว้นภาษี (ภายใต้เงื่อนไขกฎหมายปัจจุบัน)",
                  "รับเงินก้อน 100% ของทุนประกัน เมื่อมีชีวิตอยู่จนถึงอายุ 99 ปี",
                  "สามารถซื้อสัญญาเพิ่มเติมสุขภาพ หรือโรคร้ายแรงระดับสูงควบคู่ไปได้"
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
                <Clock className="text-secondary" /> เงื่อนไขการรับประกัน
              </h3>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { t: "อายุรับประกัน", v: "1 เดือน - 70 ปี" },
                    { t: "ระยะเวลาความคุ้มครอง", v: "ถึงอายุ 99 ปี" },
                    { t: "ระยะเวลาชำระเบี้ย", v: "6, 12, 18 ปี" },
                    { t: "งวดการชำระเบี้ย", v: "รายปี, ราย 6 เดือน, ราย 3 เดือน, รายเดือน" },
                    { t: "จำนวนเงินเอาประกันภัยขั้นต่ำ", v: "10,000,000 บาท" },
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary/5 rounded-xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-primary/10">
            <div className="md:w-1/3 flex justify-center">
               <Users size={80} className="text-primary opacity-20" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-black text-primary mb-6">ใครที่เหมาะกับแผนประกันนี้?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                 {["เจ้าของธุรกิจที่ต้องการสร้างกองมรดก", "ผู้ที่ต้องการลดภาระภาษีมรดกให้ทายาท", "นักลงทุนที่ต้องการกระจายสินทรัพย์ที่มีสภาพคล่องต่ำ", "ผู้ที่ต้องการความมั่นใจว่าครอบครัวจะมีเงินสดส่วนตัว"].map((txt, i)=>(
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
              "เพราะสินทรัพย์ที่ดีที่สุด คือความอุ่นใจของครอบครัว"
            </h2>
            <div className="w-24 h-1.5 bg-white mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto">
              LifeTreasure ไม่ใช่เพียงการทำประกันชีวิต แต่คือการออกแบบอนาคตและความมั่งคั่งให้คงอยู่ตลอดไป เพื่อส่งต่อความสำเร็จของคุณให้กับคนที่คุณรักที่สุดอย่างสมบูรณ์แบบ
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผน LifeTreasure" />
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="LifeTreasure" 
      />
    </div>
  );
}
