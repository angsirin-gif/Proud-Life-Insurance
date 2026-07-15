import { useState } from 'react';
import { 
  CheckCircle2, 
  Baby, 
  ShieldCheck, 
  Activity, 
  PlusCircle, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  Heart,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSection } from '../../components/ContactSection';
import { useConsultation } from '../../context/ConsultationContext';

export default function Kids0_6Insurance() {
  const { openConsultation } = useConsultation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const highlights = [
    {
      title: "คุ้มครองโรคฮิตวัยเด็กเล็กครบครัน",
      desc: "ดูแลครอบคลุมทั้ง RSV, มือ เท้า ปาก, โรตาไวรัส, ไข้หวัดใหญ่, ไข้เลือดออก และปอดอักเสบ ซึ่งพบบ่อยมากในวัย 0 - 5 ปี"
    },
    {
      title: "ทางเลือกค่าห้องระดับพรีเมียม",
      desc: "รองรับค่าห้องเดี่ยวมาตรฐานของโรงพยาบาลเอกชนชั้นนำ ไม่ต้องกังวลส่วนต่างค่าห้องพยาบาลที่สูงลิ่วในปัจจุบัน"
    },
    {
      title: "หมดกังวลเรื่องค่าใช้จ่ายบานปลาย",
      desc: "ด้วยวงเงินเหมาจ่ายค่ารักษาพยาบาลต่อปีที่สูง ให้คุณพ่อคุณแม่เลือกการรักษาที่ดีที่สุดให้ลูกรักได้ทันที"
    }
  ];

  const packages = [
    {
      name: "MEA Extra แผน 1,200",
      tag: "แผนเริ่มต้นประหยัด",
      desc: "เหมาะสำหรับคุณพ่อคุณแม่ที่ต้องการความคุ้มครองพื้นฐานสำหรับลูกรักในราคาเบาๆ สบายกระเป๋า",
      limit: "320,000 บาท",
      ipd: [
        { label: "ค่าห้อง ค่าอาหาร ค่าบริการ", value: "1,200 บาท/วัน" },
        { label: "ค่าห้อง ICU (สูงสุด 15 วัน)", value: "2,400 บาท/วัน" },
        { label: "ค่าบริการทั่วไป/ยา/เวชภัณฑ์ (อายุ 1 ด. - 10 ปี)", value: "12,000 บาท" },
        { label: "ค่าแพทย์ตรวจเยี่ยม", value: "650 บาท/วัน" },
        { label: "ค่าห้องผ่าตัดและหัตถการ", value: "14,500 บาท" },
        { label: "ค่าแพทย์ผ่าตัด", value: "45,000 บาท" },
        { label: "ค่าวิสัญญีแพทย์ (ดมยา)", value: "7,300 บาท" }
      ],
      opd: [
        { label: "ค่ารักษาก่อน-หลัง IPD (ภายใน 30 วัน)", value: "4,400 บาท" },
        { label: "อุบัติเหตุฉุกเฉิน (ภายใน 24 ชม.)", value: "4,000 บาท" },
        { label: "ค่ารถพยาบาลฉุกเฉิน", value: "1,200 บาท" },
        { label: "ค่าผ่าตัดเล็ก (ไม่ต้องนอน รพ.)", value: "4,500 บาท" }
      ],
      deductible: "3,000 บาท /ครั้ง",
      extras: [
        "ค่าแพทย์เฉพาะทาง 1,000 บาท/ครั้ง (สูงสุด 20 ครั้ง)",
        "ส่วนเกินค่าแพทย์ผ่าตัด IPD ประกันช่วยจ่ายอีก 70%",
        "ส่วนเกินค่าบริการทางการแพทย์/เวชภัณฑ์ IPD ประกันช่วยจ่ายอีก 70%"
      ],
      color: "border-slate-200 bg-white hover:border-slate-300"
    },
    {
      name: "MEA Extra แผน 2,200",
      tag: "แผนยอดฮิตแนะนำ",
      desc: "เพิ่มความอุ่นใจด้วยวงเงินค่าห้องที่สูงขึ้น รองรับค่าบริการโรงพยาบาลเอกชนชั้นนำได้คล่องตัวยิ่งขึ้น",
      limit: "480,000 บาท",
      ipd: [
        { label: "ค่าห้อง ค่าอาหาร ค่าบริการ", value: "2,200 บาท/วัน" },
        { label: "ค่าห้อง ICU (สูงสุด 15 วัน)", value: "4,400 บาท/วัน" },
        { label: "ค่าบริการทั่วไป/ยา/เวชภัณฑ์ (อายุ 1 ด. - 10 ปี)", value: "15,000 บาท" },
        { label: "ค่าแพทย์ตรวจเยี่ยม", value: "800 บาท/วัน" },
        { label: "ค่าห้องผ่าตัดและหัตถการ", value: "19,500 บาท" },
        { label: "ค่าแพทย์ผ่าตัด", value: "65,000 บาท" },
        { label: "ค่าวิสัญญีแพทย์ (ดมยา)", value: "9,750 บาท" }
      ],
      opd: [
        { label: "ค่ารักษาก่อน-หลัง IPD (ภายใน 30 วัน)", value: "6,000 บาท" },
        { label: "อุบัติเหตุฉุกเฉิน (ภายใน 24 ชม.)", value: "6,000 บาท" },
        { label: "ค่ารถพยาบาลฉุกเฉิน", value: "2,200 บาท" },
        { label: "ค่าผ่าตัดเล็ก (ไม่ต้องนอน รพ.)", value: "6,500 บาท" }
      ],
      deductible: "5,000 บาท /ครั้ง",
      extras: [
        "ค่าแพทย์เฉพาะทาง 1,200 บาท/ครั้ง (สูงสุด 20 ครั้ง)",
        "ส่วนเกินค่าแพทย์ผ่าตัด IPD ประกันช่วยจ่ายอีก 70%",
        "ส่วนเกินค่าบริการทางการแพทย์/เวชภัณฑ์ IPD ประกันช่วยจ่ายอีก 70%"
      ],
      color: "border-slate-200 bg-white hover:border-slate-300"
    },
    {
      name: "MEA Extra แผน 3,200",
      tag: "คุ้มครองสูงสุดเด่น",
      desc: "จัดเต็มระดับพรีเมียม วงเงินคุ้มครองและค่ารักษาพยาบาลดีที่สุดของกลุ่มประกันเด็กเล็ก",
      limit: "652,000 บาท",
      ipd: [
        { label: "ค่าห้อง ค่าอาหาร ค่าบริการ", value: "3,200 บาท/วัน" },
        { label: "ค่าห้อง ICU (สูงสุด 15 วัน)", value: "6,400 บาท/วัน" },
        { label: "ค่าบริการทั่วไป/ยา/เวชภัณฑ์ (อายุ 1 ด. - 10 ปี)", value: "22,500 บาท" },
        { label: "ค่าแพทย์ตรวจเยี่ยม", value: "900 บาท/วัน" },
        { label: "ค่าห้องผ่าตัดและหัตถการ", value: "27,000 บาท" },
        { label: "ค่าแพทย์ผ่าตัด", value: "85,000 บาท" },
        { label: "ค่าวิสัญญีแพทย์ (ดมยา)", value: "13,500 บาท" }
      ],
      opd: [
        { label: "ค่ารักษาก่อน-หลัง IPD (ภายใน 30 วัน)", value: "8,000 บาท" },
        { label: "อุบัติเหตุฉุกเฉิน (ภายใน 24 ชม.)", value: "9,000 บาท" },
        { label: "ค่ารถพยาบาลฉุกเฉิน", value: "3,200 บาท" },
        { label: "ค่าผ่าตัดเล็ก (ไม่ต้องนอน รพ.)", value: "8,500 บาท" }
      ],
      deductible: "7,000 บาท /ครั้ง",
      extras: [
        "ค่าแพทย์เฉพาะทาง 1,300 บาท/ครั้ง (สูงสุด 20 ครั้ง)",
        "ส่วนเกินค่าแพทย์ผ่าตัด IPD ประกันช่วยจ่ายอีก 70%",
        "ส่วนเกินค่าบริการทางการแพทย์/เวชภัณฑ์ IPD ประกันช่วยจ่ายอีก 70%"
      ],
      color: "border-slate-200 bg-white hover:border-slate-300"
    }
  ];

  const faqs = [
    {
      q: "เด็กอายุตั้งแต่เท่าไหร่ที่สามารถเริ่มทำประกันสุขภาพได้?",
      a: "สามารถเริ่มทำประกันสุขภาพได้ตั้งแต่อายุ 1 เดือน 15 วันขึ้นไป โดยสุขภาพเด็กต้องสมบูรณ์แข็งแรง และไม่มีประวัติการเจ็บป่วยรุนแรงหรือคลอดก่อนกำหนดที่เป็นอุปสรรคต่อการรับประกัน"
    },
    {
      q: "ทำไมประกันสุขภาพเด็กเล็ก 0 - 5 ปี ถึงมีเบี้ยประกันค่อนข้างสูง?",
      a: "เนื่องจากเด็กเล็กในช่วงวัย 0 - 5 ปี เป็นช่วงที่ภูมิคุ้มกันยังพัฒนาไม่เต็มที่ มีอัตราการเจ็บป่วยและนอนโรงพยาบาล (IPD) สูงกว่าวัยอื่นๆ มาก เช่น โรค RSV, มือเท้าปาก หรือท้องเสียรุนแรง ส่งผลให้อัตราความเสี่ยงสูงขึ้นตามสถิติ อย่างไรก็ตาม สามารถปรึกษาพี่ฝ้ายเพื่อปรับเปลี่ยนแผนลดเบี้ยประกันให้คุ้มค่าที่สุดได้ค่ะ"
    },
    {
      q: "การเลือกแผนแบบมี 'ความรับผิดส่วนแรก (Deductible)' ช่วยลดเบี้ยได้อย่างไร?",
      a: "ช่วยลดเบี้ยประกันลงได้ถึง 30% - 50% เหมาะสำหรับคุณพ่อคุณแม่ที่มีสวัสดิการของบริษัทหรือมีประกันเดิมบางส่วนอยู่แล้ว โดยประกันใหม่จะเข้ามาช่วยจ่ายส่วนต่างหลังจากหักความรับผิดส่วนแรกออกไป"
    },
    {
      q: "หากเจ็บป่วยด้วยโรค RSV หรือ มือเท้าปาก ประกันคุ้มครองทันทีไหม?",
      a: "มีระยะเวลารอคอย (Waiting Period) มาตรฐาน 30 วันสำหรับโรคทั่วไปหลังจากกรมธรรม์อนุมัติ หากเจ็บป่วยหลังจากพ้น 30 วันแล้ว ประกันจะให้ความคุ้มครองเต็มรูปแบบตามวงเงินของแผนค่ะ"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32">
      {/* Breadcrumb & Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-on-surface/50">
          <a href="/" className="hover:text-primary transition-colors">หน้าหลัก</a>
          <span>/</span>
          <span className="text-on-surface/50">แผนประกันตามความต้องการ</span>
          <span>/</span>
          <span className="text-primary font-bold">ประกันสุขภาพเด็กเล็ก 0 - 5 ปี</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase bg-primary-container/30 rounded-full">
              <Baby size={14} /> Toddler Health Plan (0-5 Years)
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
              ประกันสุขภาพเด็กเล็ก <br/>
              <span className="text-primary">วัย 0 - 5 ปี</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface/70 leading-relaxed max-w-lg">
              เพราะวัยแรกเกิดถึง 5 ปี เป็นวัยแห่งการเรียนรู้ที่ภูมิคุ้มกันยังไม่แข็งแรงพอ 
              หมดห่วงเรื่องค่ารักษาพยาบาลด้วยแผนประกันที่ออกแบบมาคุ้มครองครอบคลุมโรคยอดฮิตของเด็กเล็กโดยเฉพาะ 
              ช่วยแบ่งเบาภาระค่าห้องพรีเมียมและค่ารักษานอนโรงพยาบาลที่สูงลิ่วในปัจจุบัน
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => openConsultation('appointment')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary/95 hover:shadow-primary/20 transition-all cursor-pointer"
              >
                เช็กเบี้ยประกันเด็กเล็กฟรี
              </button>
              <a 
                href="#packages" 
                className="bg-white border border-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center justify-center"
              >
                ดูแผนแนะนำ
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="max-w-[500px] w-full p-4 bg-white rounded-[2rem] shadow-xl border border-surface-container">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-primary/5 flex items-center justify-center relative">
                <img 
                  src="/Thai-Family.webp" 
                  alt="ครอบครัวอบอุ่น ประกันสุขภาพเด็กเล็ก" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white p-5 rounded-2xl shadow-lg border-l-4 border-emerald-500 max-w-[200px] z-10">
              <p className="text-xs font-black text-emerald-600 mb-1">👍 คุ้มครองไว</p>
              <p className="text-xs font-medium text-on-surface">คุ้มครองทั้งโรค RSV, มือเท้าปาก, หวัดใหญ่, ท้องเสียครบครัน</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">
              ทำไมคุณพ่อคุณแม่ต้องวางแผน <span className="text-primary">ประกันสุขภาพให้ลูกน้อย</span>?
            </h2>
            <p className="text-on-surface/60 font-medium">
              อัตราการนอนโรงพยาบาลในเด็กเล็กสูงกว่าผู้ใหญ่ถึง 3 เท่า และค่ารักษาพยาบาลสำหรับเด็กเล็กพุ่งสูงขึ้น 10-15% ทุกปี
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-on-surface">โรคร้ายในสถานรับเลี้ยงหรือโรงเรียน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                เด็กเล็กที่เข้าเตรียมอนุบาล หรือเนอสเซอรี่ มีโอกาสติดเชื้อไวรัส RSV, มือเท้าปาก, ท้องร่วงจากโรตาไวรัส และไข้หวัดใหญ่ ได้ง่ายจากการสัมผัสร่วมกัน
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-on-surface">ค่าห้องพยาบาลพุ่งสูงกว่าสิทธิ์พื้นฐาน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                โรงพยาบาลเอกชนยอดฮิตสำหรับครอบครัว มีค่าห้องเดี่ยวพรีเมียมเฉลี่ยคืนละ 5,000 - 12,000 บาท ซึ่งสิทธิพื้นฐานมักไม่เพียงพอ ประกันสุขภาพเด็กจึงเป็นคำตอบ
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-on-surface">การแอดมิทแต่ละครั้งใช้เงินหลักหมื่น/แสน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                โรคทางเดินหายใจเฉียบพลัน หรือการแอดมิทพ่นยาเพื่อรักษา RSV ในเด็กเล็ก ค่ารักษาเฉลี่ยต่อครั้งสูงถึง 30,000 - 100,000 บาท หากไม่มีประกันอาจกระทบเงินออมครอบครัว
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-on-surface">จุดเด่นแผนประกันเด็กเล็กกับ <span className="text-primary">พี่ฝ้าย</span></h2>
              <p className="text-on-surface/60 font-medium">
                คัดสรรแผนประกันที่ดีที่สุดของกรุงไทย-แอกซ่า เพื่อดูแลเจ้าตัวเล็กอย่างตรงจุดและคุ้มค่าเบี้ยประกันที่สุด
              </p>

              <div className="space-y-4 pt-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-on-surface">{item.title}</h4>
                      <p className="text-xs text-on-surface/60 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-150 shadow-md space-y-8 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary" />
              <div className="absolute right-0 bottom-0 opacity-5 translate-x-12 translate-y-12 text-primary">
                <Heart size={260} />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
                    <Heart size={12} className="fill-primary" /> Fai Service Advantage
                  </span>
                  <h3 className="text-2xl font-black text-on-surface leading-snug">
                    ตัวแทนดูแลแบบคนในครอบครัว
                  </h3>
                </div>
                <p className="text-on-surface/80 leading-relaxed text-sm font-medium">
                  การซื้อประกันเด็กเล็กไม่ใช่แค่เรื่องของแผนประกัน แต่เป็นเรื่องของ <span className="text-primary font-bold">"บริการหลังการขาย"</span> ตอนที่น้องเจ็บป่วยต้องเข้ารับการรักษาพยาบาล พี่ฝ้ายคอยสแตนด์บายประสานงาน ตรวจสอบสิทธิ์ เช็กเครือข่ายโรงพยาบาล และดูแลด้านการเคลมให้คุณแม่ประหยัดเวลาและลดความกังวลใจที่สุดค่ะ
                </p>
                
                {/* Visual quote or service promise items */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>ประสานงานโรงพยาบาล รวดเร็ว อบอุ่น</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>ช่วยตรวจสอบสิทธิ์และอำนวยความสะดวกเรื่องเคลม</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>ดูแลเคียงข้างคุณแม่และน้อง ตลอดระยะเวลากรมธรรม์</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 mt-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 shadow-sm">
                  <img src="/P_Fai_3.webp" alt="พี่ฝ้าย" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">พี่ฝ้าย - อังศิรินทร์</p>
                  <p className="text-xs text-on-surface/60 font-semibold">ที่ปรึกษาประกันชีวิต Krungthai-AXA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Packages */}
      <section id="packages" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">แผนประกันสุขภาพแนะนำสำหรับ <span className="text-primary">เด็กแรกเกิด - 5 ปี</span></h2>
            <p className="text-on-surface/60 font-medium text-sm">
              สำหรับช่วงวัย 0 - 5 ปี สมัครได้เฉพาะ แผนประกัน MEA Extra โดยมีให้เลือก 3 แผนยอดฮิตตามงบประมาณและความพึงพอใจของคุณพ่อคุณแม่ค่ะ
            </p>
          </div>

          {/* Quick Notice Banner */}
          <div className="max-w-7xl mx-auto mb-12 bg-emerald-100/50 border border-emerald-200/80 rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 translate-x-4 translate-y-4">
              <ShieldCheck size={180} className="text-emerald-600" />
            </div>
            <div className="flex gap-4 items-start relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <AlertCircle size={22} />
              </div>
              <div className="space-y-4 w-full">
                <h4 className="text-lg font-black text-on-surface">
                  ข้อมูลสำคัญที่ควรทราบก่อนเลือกแผนประกันสุขภาพเด็กเล็ก
                </h4>
                <div className="grid md:grid-cols-3 gap-6 pt-1">
                  <div className="bg-white/90 p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-1.5">
                    <p className="text-[10px] font-black text-primary uppercase tracking-wider">แบรนด์ประกันภัย</p>
                    <p className="text-base font-black text-on-surface">กรุงไทย-แอกซ่า (Krungthai-AXA)</p>
                    <p className="text-xs text-on-surface/70 font-medium leading-relaxed">มั่นใจด้วยแบรนด์ประกันภัยระดับโลก ดูแลเคลมง่าย ได้มาตรฐาน</p>
                  </div>
                  <div className="bg-white/90 p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-1.5">
                    <p className="text-[10px] font-black text-secondary uppercase tracking-wider">เกณฑ์อายุผู้สมัคร</p>
                    <p className="text-base font-black text-on-surface">อายุ 1 เดือนขึ้นไป</p>
                    <p className="text-xs text-on-surface/70 font-medium leading-relaxed">รับทำประกันสุขภาพสำหรับลูกน้อยได้ทันทีตั้งแต่อายุ 1 เดือนขึ้นไป</p>
                  </div>
                  <div className="bg-white/90 p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-1.5">
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-wider">ส่วนร่วมจ่าย (Deductible)</p>
                    <p className="text-base font-black text-on-surface">มีระบุในทุกแผนคุ้มครอง</p>
                    <p className="text-xs text-on-surface/70 font-medium leading-relaxed">ความรับผิดส่วนแรกเป็นข้อตกลงส่วนร่วมจ่ายของการรักษาพยาบาลในครั้งนั้นๆ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`p-6 rounded-[2.5rem] border-2 ${pkg.color} flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg`}>
                <div className="absolute top-6 right-6">
                  <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    idx === 1 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {pkg.tag}
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-on-surface">{pkg.name}</h3>
                    <p className="text-[10px] text-primary font-bold tracking-wider uppercase mt-1">KRUNGTHAI-AXA MEA EXTRA</p>
                    <p className="text-xs text-on-surface/60 mt-1 leading-relaxed">{pkg.desc}</p>
                  </div>

                  {/* Limit Banner */}
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">ผลประโยชน์รวมสูงสุด / ครั้ง</p>
                      <p className="text-xl font-black text-emerald-600">{pkg.limit}</p>
                    </div>
                    <ShieldCheck className="text-emerald-500 w-8 h-8 shrink-0" />
                  </div>

                  {/* IPD Section */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider">
                      <Activity size={14} /> ผลประโยชน์ IPD (ผู้ป่วยใน)
                    </p>
                    <div className="bg-slate-50/50 rounded-2xl p-3.5 space-y-2 border border-slate-100">
                      {pkg.ipd.map((item, iIdx) => (
                        <div key={iIdx} className="flex justify-between items-start text-xs py-1 border-b border-dashed border-slate-200/60 last:border-0">
                          <span className="text-on-surface/75 font-medium">{item.label}</span>
                          <span className="text-on-surface font-extrabold text-right shrink-0 pl-2">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* OPD Section */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-secondary flex items-center gap-1.5 uppercase tracking-wider">
                      <PlusCircle size={14} /> ผลประโยชน์ OPD (ผู้ป่วยนอก)
                    </p>
                    <div className="bg-slate-50/50 rounded-2xl p-3.5 space-y-2 border border-slate-100">
                      {pkg.opd.map((item, oIdx) => (
                        <div key={oIdx} className="flex justify-between items-start text-xs py-1 border-b border-dashed border-slate-200/60 last:border-0">
                          <span className="text-on-surface/75 font-medium">{item.label}</span>
                          <span className="text-on-surface font-extrabold text-right shrink-0 pl-2">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deductible Section */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-amber-700 flex items-center gap-1.5 uppercase tracking-wider">
                      <AlertCircle size={14} /> ส่วนร่วมจ่าย (Deductible)
                    </p>
                    <div className="bg-amber-50/40 border border-amber-100/70 rounded-2xl p-3.5 space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-900/80 font-semibold">ความรับผิดส่วนแรก</span>
                        <span className="text-amber-700 font-extrabold">{pkg.deductible}</span>
                      </div>
                      <p className="text-[10px] text-amber-800/85 font-medium leading-relaxed pt-1.5 border-t border-amber-150/50">
                        *มีส่วนร่วมจ่ายนี้ในทุกแผนประกันภัย เป็นความรับผิดชอบส่วนแรกต่อการเข้ารับการรักษาพยาบาลในครั้งนั้นๆ
                      </p>
                    </div>
                  </div>

                  {/* Special Extras */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold text-purple-700 flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles size={14} /> สัญญาเพิ่มเติมและสิทธิพิเศษ
                    </p>
                    <div className="space-y-2">
                      {pkg.extras.map((extra, eIdx) => (
                        <div key={eIdx} className="flex gap-2 items-start text-xs">
                          <CheckCircle2 size={14} className="text-purple-600 shrink-0 mt-0.5" />
                          <span className="text-on-surface/85 font-medium leading-relaxed">{extra}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button 
                    onClick={() => openConsultation('appointment')}
                    className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 shadow-md hover:shadow-primary/10 transition-all cursor-pointer animate-pulse-subtle"
                  >
                    ขอรายละเอียดและใบเสนอราคาแผนนี้
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-on-surface">คำถามที่พบบ่อย (FAQ) ประกันเด็กเล็ก</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none font-bold text-on-surface hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="text-base flex items-center gap-2">
                    <HelpCircle className="text-primary shrink-0" size={18} />
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-on-surface/50 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 text-sm leading-relaxed text-on-surface/70 font-medium pl-14">
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

      {/* Form Section */}
      <ContactSection />
    </div>
  );
}
