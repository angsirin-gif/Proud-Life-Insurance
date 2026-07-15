import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Smile, 
  ShieldCheck, 
  Activity, 
  HelpCircle, 
  ChevronDown,
  Heart,
  Award,
  PlusCircle,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSection } from '../../components/ContactSection';
import { useConsultation } from '../../context/ConsultationContext';

export default function Kids6_10Insurance() {
  const { openConsultation } = useConsultation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPlanType, setSelectedPlanType] = useState<'expense' | 'lumpSum'>('expense');

  const highlights = [
    {
      title: "เบี้ยประกันปรับตัวลดลง คุ้มค่าที่สุด",
      desc: "สถิติระบุว่าเด็กวัย 6 ปีขึ้นไปมีภูมิต้านทานดีขึ้นอย่างรวดเร็ว ส่งผลให้เบี้ยประกันสุขภาพถูกลงอย่างมากเมื่อเทียบกับเด็กเล็กแรกเกิด"
    },
    {
      title: "เน้นความคุ้มครองอุบัติเหตุจากการเล่นซน",
      desc: "ดูแลค่ารักษาพยาบาลจากอุบัติเหตุ วิ่งซน ลื่นล้ม บาดเจ็บจากการเล่นกีฬา หรือกิจกรรมนอกห้องเรียนตลอด 24 ชั่วโมง"
    },
    {
      title: "คุ้มครองโรคระบาดฮิตในโรงเรียนครบ",
      desc: "คุ้มครองการรักษาโรคติดเชื้อยอดฮิตในวัยประถม เช่น ไข้หวัดใหญ่สายพันธุ์ A & B, อาหารเป็นพิษ, ตาแดง, ตลอดจนไข้เลือดออก"
    }
  ];

  const expensePackages = [
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
      desc: "จัดเต็มระดับพรีเมียม วงเงินคุ้มครองและค่ารักษาพยาบาลดีที่สุดของกลุ่มประกันแยกค่าใช้จ่าย",
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

  const lumpSumPackages = [
    {
      name: "iHealthy Ultra แผน Smart",
      tag: "แผนเริ่มต้นสุดคุ้ม",
      desc: "ผลประโยชน์สูงสุด 3 ล้านบาทต่อปี ค่าห้อง 1,500 บาทต่อวัน คุ้มครองผู้ป่วยในและผู้ป่วยนอกครบถ้วน",
      limit: "3,000,000 บาท",
      mainInsure: "50,000 บาท",
      features: [
        { label: "ผลประโยชน์รวมสูงสุดต่อรอบปีกรมธรรม์", value: "3 ล้านบาท" },
        { label: "ค่าห้อง ค่าอาหาร ค่าบริการโรงพยาบาล", value: "1,500 บาทต่อวัน" },
        { label: "ค่าบริการทางการแพทย์", value: "เหมาจ่าย" },
        { label: "ค่าแพทย์", value: "เหมาจ่าย" },
        { label: "ค่าผ่าตัด และหัตถการ", value: "เหมาจ่าย" },
        { label: "Day Surgery", value: "เหมาจ่าย" },
        { label: "ค่าบริการทางการแพทย์ ก่อน-หลังการเข้ารักษาเป็นผู้ป่วยใน 30 วัน", value: "เหมาจ่าย" },
        { label: "OPD หลังเป็นผู้ป่วยใน 2 ครั้ง ใน 30 วัน", value: "เหมาจ่าย" },
        { label: "OPD อุบัติเหตุ ภายใน 24 ชั่วโมง", value: "เหมาจ่าย" }
      ],
      color: "border-slate-200 bg-white hover:border-slate-300"
    },
    {
      name: "iHealthy Ultra แผน Bronze",
      tag: "แผนพรีเมียมเหมาสิบล้าน",
      desc: "ยกระดับการรักษาอย่างสมบูรณ์แบบด้วยผลประโยชน์สูงสุด 10 ล้านบาทต่อปี และสิทธิค่าห้อง 3,000 บาทต่อวัน",
      limit: "10,000,000 บาท",
      mainInsure: "50,000 บาท",
      features: [
        { label: "ผลประโยชน์รวมสูงสุดต่อรอบปีกรมธรรม์", value: "10 ล้านบาท" },
        { label: "ค่าห้อง ค่าอาหาร ค่าบริการโรงพยาบาล", value: "3,000 บาทต่อวัน" },
        { label: "ค่าบริการทางการแพทย์", value: "เหมาจ่าย" },
        { label: "ค่าแพทย์", value: "เหมาจ่าย" },
        { label: "ค่าผ่าตัด และหัตถการ", value: "เหมาจ่าย" },
        { label: "Day Surgery", value: "เหมาจ่าย" },
        { label: "ค่าบริการทางการแพทย์ ก่อน-หลังการเข้ารักษาเป็นผู้ป่วยใน 30 วัน", value: "เหมาจ่าย" },
        { label: "OPD หลังเป็นผู้ป่วยใน 2 ครั้ง ใน 30 วัน", value: "เหมาจ่าย" },
        { label: "OPD อุบัติเหตุ ภายใน 24 ชั่วโมง", value: "เหมาจ่าย" }
      ],
      color: "border-slate-200 bg-white hover:border-slate-300"
    }
  ];

  const faqs = [
    {
      q: "เด็กวัย 6 - 10 ปี ส่วนใหญ่นิยมเน้นความคุ้มครองด้านใด?",
      a: "จะเน้นความคุ้มครอง 2 ส่วนหลักคือ: 1. โรคติดต่อที่มักติดจากเพื่อนที่โรงเรียน เช่น ไข้หวัดใหญ่ ท้องร่วงจากอาหารเป็นพิษ และ 2. อุบัติเหตุจากการเล่นซน ปั่นจักรยาน เล่นกีฬา ซึ่งแผนประกันของกรุงไทย-แอกซ่ามีครอบคลุมทั้ง 2 ส่วนนี้ไว้อย่างลงตัวค่ะ"
    },
    {
      q: "เบี้ยประกันวัยนี้ ถูกกว่าช่วง 0 - 5 ปีจริงไหม?",
      a: "จริงค่ะ เบี้ยประกันสุขภาพสำหรับเด็กวัย 6-10 ปี จะถูกลงกว่าช่วงอายุ 0-5 ปีค่อนข้างมาก (ในบางกรณีประหยัดลงไปเกือบครึ่งหนึ่ง) เนื่องจากอัตราการเจ็บป่วยจนต้องนอนโรงพยาบาลน้อยลงตามอายุและภูมิต้านทานร่างกายที่แข็งแรงขึ้น"
    },
    {
      q: "หากน้องมีสิทธิ์ประกันสุขภาพของโรงเรียนอยู่แล้ว ควรทำเพิ่มไหม?",
      a: "แนะนำเป็นอย่างยิ่งให้ทำเพิ่มค่ะ เพราะประกันของโรงเรียนมักมีวงเงินจำกัดมาก (เช่น ค่าห้อง 1,000-1,500 บาท หรือค่ารักษา 10,000-15,000 บาทต่อครั้ง) ซึ่งไม่เพียงพอต่อค่ารักษาของโรงพยาบาลเอกชนในปัจจุบัน การทำแผนเสริมจะช่วยอุดรอยรั่วค่าใช้จ่ายส่วนต่างได้อย่างสบายใจ"
    },
    {
      q: "สามารถใช้เบี้ยประกันสุขภาพลูกไปลดหย่อนภาษีได้ไหม?",
      a: "เบี้ยประกันสุขภาพของลูกไม่สามารถนำไปลดหย่อนภาษีเงินได้บุคคลธรรมดาของคุณพ่อคุณแม่โดยตรงได้ ยกเว้นเบี้ยประกันสุขภาพของบิดามารดาตนเองเท่านั้นค่ะ"
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
          <span className="text-primary font-bold">ประกันสุขภาพเด็กโต 6 - 10 ปี</span>
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
              <Smile size={14} /> Kids Health Plan (6-10 Years)
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
              ประกันสุขภาพเด็กโต <br/>
              <span className="text-primary">วัยเรียน 6 - 10 ปี</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface/70 leading-relaxed max-w-lg">
              วัยประถมเป็นช่วงเวลาแห่งการเรียนรู้ พบปะเพื่อนฝูง และทำกิจกรรมที่โรงเรียน 
              เพื่อให้น้องๆ สนุกกับทุกกิจกรรมได้อย่างเต็มที่ ประกันสุขภาพเด็กโตจะเข้ามาปกป้องคุณพ่อคุณแม่จากค่าใช้จ่ายส่วนเกิน 
              ทั้งจากอุบัติเหตุการซุกซนและโรคระบาดในโรงเรียน ด้วยเบี้ยประกันที่คุ้มค่าและประหยัดกว่าเดิม
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => openConsultation('appointment')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary/95 hover:shadow-primary/20 transition-all cursor-pointer"
              >
                เช็กเบี้ยประกันเด็กโตฟรี
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
                  alt="ครอบครัวอบอุ่น ประกันสุขภาพเด็กโต" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 right-4 bg-white p-5 rounded-2xl shadow-lg border-l-4 border-emerald-500 max-w-[200px] z-10">
              <p className="text-xs font-black text-emerald-600 mb-1">🚴 เล่นซนหายห่วง</p>
              <p className="text-xs font-medium text-on-surface">คุ้มครองครอบคลุมทั้งค่ารักษาพยาบาลการเจ็บป่วยและอุบัติเหตุจากการทำกิจกรรม</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">
              ความท้าทายสุขภาพ <span className="text-primary">ในวัยเรียน 6-10 ปี</span>
            </h2>
            <p className="text-on-surface/60 font-medium">
              โรงเรียนคือศูนย์รวมการเล่นและกิจกรรมกลุ่ม การมีเกราะป้องกันทางสุขภาพที่แน่นหนาจะช่วยรักษาความต่อเนื่องในการเรียนรู้ของลูกรัก
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-on-surface">อุบัติเหตุการเล่นและการกีฬา</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                การวิ่งเล่นล้ม พลัดตกหกล้มขณะเรียนพละ เล่นกีฬา คุ้มครองการรักษาพยาบาลฉุกเฉินและต่อเนื่อง ช่วยคุณพ่อคุณแม่ประหยัดค่าใช้จ่ายฉับพลัน
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-on-surface">โรคระบาดในกลุ่มเพื่อน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                ไข้หวัดใหญ่สายพันธุ์ต่างๆ ที่ติดต่อผ่านไอจาม, อาหารเป็นพิษที่มักระบาดในช่วงฤดูร้อน, โรคตาแดง และไข้เลือดออกที่อาจเป็นอันตรายรุนแรง
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-on-surface">สิทธิ์เบิกที่จำกัดของโรงเรียน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                หลายโรงเรียนมีสิทธิ์ประกันกลุ่มให้นักเรียน แต่อัตราคุ้มครองมักน้อยเกินกว่าจะครอบคลุมโรงพยาบาลเอกชนชั้นนำ ประกันชีวิตเสริมช่วยอุดรอยรั่วให้สบายใจขึ้น
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
              <h2 className="text-3xl font-extrabold text-on-surface">ทำไมแผนประกันเด็กโตวัย 6 - 10 ปีจึง <span className="text-primary">คุ้มค่าที่สุด?</span></h2>
              <p className="text-on-surface/60 font-medium">
                คุ้มครองจัดเต็มด้วยเบี้ยประกันสุขภาพที่ลดลงอย่างเห็นได้ชัดเมื่อน้องพ้นช่วงวัยเตาะแตะ
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
                    <Heart size={12} className="fill-primary" /> Premium Service by Fai
                  </span>
                  <h3 className="text-2xl font-black text-on-surface leading-snug">
                    ดูแลแบบตัวแทนส่วนบุคคล
                  </h3>
                </div>
                <p className="text-on-surface/80 leading-relaxed text-sm font-medium">
                  พี่ฝ้ายพร้อมให้บริการคุณแม่ในทุกขั้นตอน ช่วยตั้งแต่วันเลือกออกแบบแผนประกันสุขภาพที่คุ้มค่าเบี้ยที่สุด ไปจนถึงอำนวยความสะดวกในการประสานงานเคลมค่ารักษาและตรวจดูแลความพร้อมตอนแอดมิท ไม่ต้องปวดหัวกับเอกสารประกันภัยใดๆ เลยค่ะ
                </p>
                
                {/* Visual quote or service promise items */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>ประสานงานรวดเร็ว อำนวยความสะดวก 24 ชม.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>สรุปความคุ้มครองเข้าใจง่าย ตรงไปตรงมา</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>คอยเคียงข้างคุณแม่และน้องในทุกๆ แอดมิท</span>
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
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">แผนประกันแนะนำสำหรับ <span className="text-primary">เด็กโต 6 - 10 ปี</span></h2>
            <p className="text-on-surface/60 font-medium text-sm">
              คุณพ่อคุณแม่สามารถเลือกรูปแบบแผนประกันสุขภาพที่ตอบโจทย์ความต้องการของลูกรักได้ 2 รูปแบบหลักๆ ดังนี้ค่ะ
            </p>
          </div>

          {/* Plan Choice Info Box */}
          <div className="bg-primary/5 rounded-[2rem] border border-primary/10 p-6 md:p-8 max-w-4xl mx-auto mb-12 space-y-6">
            <h3 className="text-lg md:text-xl font-extrabold text-on-surface">สำหรับเด็กโตวัยเรียน 6 - 10 ปี สามารถเลือกซื้อได้ 2 แผน ตามความต้องการ ดังนี้</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full mb-2">แบบที่ 1</span>
                  <h4 className="font-bold text-on-surface text-base mb-2">แผนแยกค่าใช้จ่าย (MEA Extra)</h4>
                  <p className="text-xs text-on-surface/60 leading-relaxed mb-4">
                    เน้นความคุ้มครองพื้นฐาน ราคาสบายกระเป๋า แบ่งวงเงินจ่ายตามรายการค่าห้อง ค่าแพทย์ และค่ารักษาพยาบาล มี 3 แผนยอดนิยม: แผน 1,200 | แผน 2,200 | แผน 3,200
                  </p>
                  <p className="text-xs text-primary/80 font-semibold mb-4 bg-primary/5 p-2.5 rounded-xl border border-primary/5">
                    *รายละเอียดตารางความคุ้มครองทั้ง 3 แผนจะเหมือนกับ แผนประกันสุขภาพเด็กเล็ก 0 - 5 ปี ทุกประการค่ะ
                  </p>
                </div>
                <Link 
                  to="/needs/kids-0-5" 
                  className="inline-flex items-center gap-1 text-xs font-black text-primary hover:text-primary-dark hover:underline transition-colors mt-4"
                >
                  คลิกดูรายละเอียดของแผนแยกค่าใช้จ่ายอย่างละเอียด ➜
                </Link>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2">แบบที่ 2</span>
                  <h4 className="font-bold text-on-surface text-base mb-2">แผนเหมาจ่าย (iHealthy Ultra)</h4>
                  <p className="text-xs text-on-surface/60 leading-relaxed mb-4">
                    วงเงินเหมาจ่ายหลักล้าน ครอบคลุมค่ารักษาพยาบาลจริงตามใบเสร็จโรงพยาบาลเอกชนชั้นนำอย่างครอบคลุมสูงสุด มี 2 แผนยอดนิยม: แผน Smart (3 ล้าน) และ แผน Bronze (10 ล้าน)
                  </p>
                  <p className="text-xs text-primary/80 font-semibold mb-4 bg-primary/5 p-2.5 rounded-xl border border-primary/5">
                    *ทุนประกันชีวิตสัญญาหลัก 50,000 บาท คุ้มครองผู้ป่วยในและอุบัติเหตุเหมาจ่าย
                  </p>
                </div>
                <Link 
                  to="/health-insurance/health-ultra" 
                  className="inline-flex items-center gap-1 text-xs font-black text-primary hover:text-primary-dark hover:underline transition-colors mt-4"
                >
                  คลิกดูรายละเอียดเชิงลึกของผลิตภัณฑ์ iHealthy Ultra ➜
                </Link>
              </div>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedPlanType('expense')}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm border cursor-pointer ${
                selectedPlanType === 'expense'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10'
                  : 'bg-white text-on-surface/75 border-slate-200 hover:bg-slate-50'
              }`}
            >
              ดูรายละเอียด แผนแยกค่าใช้จ่าย (MEA Extra)
            </button>
            <button
              onClick={() => setSelectedPlanType('lumpSum')}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm border cursor-pointer ${
                selectedPlanType === 'lumpSum'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10'
                  : 'bg-white text-on-surface/75 border-slate-200 hover:bg-slate-50'
              }`}
            >
              ดูรายละเอียด แผนเหมาจ่าย (iHealthy Ultra)
            </button>
          </div>

          {selectedPlanType === 'expense' ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {expensePackages.map((pkg, idx) => (
                <div key={idx} className="p-6 rounded-[2.5rem] border-2 border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
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

                    {/* Extras */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">ความคุ้มครองเพิ่มเติม</p>
                      <ul className="space-y-2">
                        {pkg.extras.map((extra, exIdx) => (
                          <li key={exIdx} className="flex gap-2 items-start text-xs text-on-surface/75 font-medium">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button 
                      onClick={() => openConsultation('appointment')}
                      className="w-full bg-primary text-white py-3 rounded-full font-bold text-sm hover:bg-primary/90 shadow-md transition-all cursor-pointer"
                    >
                      ขอรายละเอียดและใบเสนอราคาแผนนี้
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {lumpSumPackages.map((pkg, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] border-2 border-slate-200 bg-white hover:border-slate-300 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full bg-primary text-white">
                      {pkg.tag}
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-on-surface">{pkg.name}</h3>
                      <p className="text-[10px] text-primary font-bold tracking-wider uppercase mt-1">KRUNGTHAI-AXA iHEALTHY ULTRA</p>
                      <p className="text-xs text-on-surface/60 mt-1 leading-relaxed">{pkg.desc}</p>
                    </div>

                    {/* Main Life Insurance Sum Banner */}
                    <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">ทุนประกันภัยสัญญาหลัก (ชีวิต)</p>
                        <p className="text-xl font-black text-blue-600">{pkg.mainInsure}</p>
                      </div>
                      <Award className="text-blue-500 w-8 h-8 shrink-0" />
                    </div>

                    {/* Limit Banner */}
                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">ผลประโยชน์สูงสุดต่อรอบปีกรมธรรม์</p>
                        <p className="text-xl font-black text-emerald-600">{pkg.limit}</p>
                      </div>
                      <ShieldCheck className="text-emerald-500 w-8 h-8 shrink-0" />
                    </div>

                    {/* Features Section */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider">
                        <Activity size={14} /> รายละเอียดความคุ้มครองเหมาจ่าย
                      </p>
                      <div className="bg-slate-50/50 rounded-2xl p-4 space-y-2.5 border border-slate-100">
                        {pkg.features.map((item, fIdx) => (
                          <div key={fIdx} className="flex justify-between items-start text-xs py-1 border-b border-dashed border-slate-200/60 last:border-0">
                            <span className="text-on-surface/75 font-medium">{item.label}</span>
                            <span className="text-on-surface font-extrabold text-right shrink-0 pl-2 text-emerald-600">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-100">
                    <button 
                      onClick={() => openConsultation('appointment')}
                      className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 shadow-md transition-all cursor-pointer"
                    >
                      ขอรายละเอียดและใบเสนอราคาแผนนี้
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-on-surface">คำถามที่พบบ่อย (FAQ) ประกันเด็กโต 6-10 ปี</h2>
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
