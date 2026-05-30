import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Coins, 
  Target,
  Clock,
  TrendingUp,
  LineChart,
  Target as TargetIcon
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function UltimateGrowth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "การเติบโตของเงินออม",
      desc: "แผนออมเงินที่เน้นการเพิ่มพูนมูลค่าในระยะยาวอย่างมั่นคง"
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "รับเงินคืนรายปี",
      desc: "รับผลประโยชน์เงินคืนรายปีเพิ่มขึ้นภายใต้เงื่อนไขที่บริษัทกำหนด"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "ทางเลือกที่หลากหลาย",
      desc: "เลือกแผนคุ้มครองและออมได้ตามเป้าหมาย (20/10, 25/15 หรือ 25/25)"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "บริหารภาษีอย่างชาญฉลาด",
      desc: "ใช้สิทธิลดหย่อนภาษีได้ตลอดอายุสัญญาการชำระเบี้ยสูงสุด 100,000 บาท"
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
              <a href="/savings-insurance" className="hover:text-primary">ประกันสะสมทรัพย์</a>
              <span>/</span>
              <span className="text-primary">Ultimate Growth</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              Ultimate Growth (อัลติเมท โกรท)<br/>
              <span className="text-on-surface">สร้างรากฐานที่มั่งคั่ง เพื่อความฝันที่ยั่งยืน</span>
            </h1>
            <p className="text-lg text-on-surface/70 mb-8 leading-relaxed">
              ตอบโจทย์การออมเงินระยะยาวเพื่อเป้าหมายใหญ่ในชีวิต ไม่ว่าจะเป็นการศึกษาบุตร หรือทุนสำรองในยามเกษียณ พร้อมความอุ่นใจด้วยความคุ้มครองชีวิต
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
          <div className="relative flex justify-center">
            <img 
              src="/UltimateGrowth.webp" 
              alt="Ultimate Growth Insurance" 
              className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-[90%] h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
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

      <section className="py-12 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ultimate Growth 20/10", desc: "ชำระเบี้ย 10 ปี คุ้มครอง 20 ปี สำหรับเป้าหมายระยะกลางที่ต้องการความมั่นคง" },
              { title: "Ultimate Growth 25/15", desc: "ชำระเบี้ย 15 ปี คุ้มครอง 25 ปี เน้นการสะสมทรัพย์ที่ต่อเนื่องและยาวนานขึ้น" },
              { title: "Ultimate Growth 25/25", desc: "ชำระเบี้ย 25 ปี คุ้มครอง 25 ปี ทยอยจ่ายเบี้ยไม่หนัก พร้อมรับความคุ้มครองชีวิตเต็มที่" }
            ].map((plan, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-surface-container-high shadow-sm hover:scale-105 transition-transform">
                <TargetIcon className="text-secondary mb-4" />
                <h4 className="font-bold text-primary mb-3 text-xl">{plan.title}</h4>
                <p className="text-sm text-on-surface/70 leading-relaxed">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผน Ultimate Growth" />
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Ultimate Growth" 
      />
    </div>
  );
}
