import { useState } from 'react';
import { 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck, 
  Activity, 
  HelpCircle, 
  ChevronDown,
  Heart,
  TrendingUp,
  Percent
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSection } from '../../components/ContactSection';
import { useConsultation } from '../../context/ConsultationContext';

export default function WorkingHealthInsurance() {
  const { openConsultation } = useConsultation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const highlights = [
    {
      title: "สิทธิประโยชน์ลดหย่อนภาษีสูงสุด 25,000 บาท",
      desc: "เบี้ยประกันสุขภาพสำหรับตนเอง สามารถนำไปใช้หักลดหย่อนภาษีเงินได้บุคคลธรรมดาได้สูงสุดถึง 25,000 บาทต่อปี ตามข้อกำหนดของกรมสรรพากร"
    },
    {
      title: "คุ้มครองครอบคลุม 'ออฟฟิศซินโดรม' และโรคยอดฮิต",
      desc: "ดูแลค่ารักษาพยาบาลจากกลุ่มอาการออฟฟิศซินโดรมรุนแรง, หมอนรองกระดูกทับเส้นประสาท, กรดไหลย้อน, ตลอดจนภาวะเครียดสะสมปวดศีรษะเรื้อรัง"
    },
    {
      title: "ปกป้องเงินออมครอบครัว เพื่อความมั่นคงทางการเงิน",
      desc: "ไม่ยอมให้อาการเจ็บป่วยกะทันหันหรือโรคร้ายแรงมาทำลายเป้าหมายชีวิต หรือต้องนำเงินเก็บสะสมทั้งชีวิตมาจ่ายเป็นค่ารักษาพยาบาล"
    }
  ];

  const packages = [
    {
      name: "iHealthy Ultra (แผนเหมาจ่ายพรีเมียมอันดับ 1)",
      tag: "แนะนำยอดฮิตวัยทำงาน",
      desc: "ที่สุดแห่งการดูแลสุขภาพที่สมบูรณ์แบบ เหมาจ่ายสูงสุดหลักล้าน ครอบคลุมทั้งกรณีเจ็บป่วยต้องแอดมิท (IPD) และแบบหาหมอรับยากลับบ้านได้ทันที (OPD) ครบจบในแผนเดียว",
      benefits: [
        "วงเงินเหมาจ่ายค่ารักษาสูงสุด 3 ล้าน - 100 ล้านบาทต่อปี",
        "คุ้มครองผู้ป่วยนอก (OPD) หาหมอกลับบ้านได้ตามจริง (ตามวงเงินของแผนที่เลือก)",
        "ครอบคลุมค่ารักษาโรคร้ายแรง มะเร็ง ไตวาย ล้างไต และการทำคีโมบำบัด",
        "ค่าห้องเดี่ยวมาตรฐานของโรงพยาบาลเอกชนชั้นนำ จ่ายตามจริง 100%",
        "นำเบี้ยประกันไปลดหย่อนภาษีได้เต็มสิทธิสูงสุด 25,000 บาทต่อปี"
      ],
      color: "border-secondary bg-secondary/5"
    },
    {
      name: "MEA Extra + คุ้มครอง OPD (แผนประหยัดคุ้มค่า)",
      tag: "คุ้มค่าตอบโจทย์เริ่มต้น",
      desc: "สำหรับพนักงานออฟฟิศที่มีสวัสดิการบริษัทอยู่บ้างแล้ว แต่อยากทำประกันเสริมเพื่ออุดรอยรั่วค่าห้องและค่ารักษาส่วนต่างยามต้องแอดมิทฉุกเฉิน",
      benefits: [
        "ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD) สูงสุด 500,000 บาท/ครั้ง",
        "คุ้มครองค่าห้องและอาหาร สูงสุดถึง 4,000 - 8,000 บาทต่อวัน",
        "ช่วยเสริมทัพสวัสดิการกลุ่มที่มีอยู่ให้แข็งแกร่ง ไม่ต้องควักเงินส่วนตัว",
        "อัตราเบี้ยประกันสบายๆ จับต้องได้ เหมาะสำหรับเริ่มต้นสร้างเกราะป้องกัน",
        "รับส่วนลดเบี้ยสูงสุดถึง 30% เมื่อเลือกแผนแบบมีความรับผิดส่วนแรก"
      ],
      color: "border-primary bg-primary/5"
    }
  ];

  const faqs = [
    {
      q: "มีประกันสังคมหรือประกันกลุ่มของบริษัทอยู่แล้ว จำเป็นต้องทำประกันสุขภาพส่วนตัวเพิ่มไหม?",
      a: "จำเป็นและแนะนำเป็นอย่างยิ่งค่ะ เนื่องจากสิทธิ์ประกันสังคมหรือประกันกลุ่มบริษัทมักจะมีวงเงินจำกัดมาก เช่น วงเงินค่ารักษา 20,000-30,000 บาท หรือจำกัดสิทธิ์เฉพาะโรงพยาบาลตามสิทธิ์เท่านั้น การมีประกันสุขภาพส่วนตัวจะช่วยให้ท่านมีอิสระในการเลือกโรงพยาบาลเอกชนชั้นนำ ได้รับการรักษาที่รวดเร็ว และมีวงเงินครอบคลุมค่ารักษาส่วนต่างทั้งหมดโดยไม่ต้องกังวล"
    },
    {
      q: "เบี้ยประกันสุขภาพวัยทำงานลดหย่อนภาษีได้เท่าไหร่?",
      a: "เบี้ยประกันสุขภาพตนเองสามารถนำไปหักลดหย่อนภาษีเงินได้บุคคลธรรมดาได้สูงสุด 25,000 บาทต่อปี และเมื่อรวมกับเบี้ยประกันชีวิตประเภททั่วไปแล้ว ต้องไม่เกิน 100,000 บาทต่อปีค่ะ พี่ฝ้ายจะช่วยเลือกแผนที่ให้ประสิทธิภาพทางภาษีดีที่สุดให้ค่ะ"
    },
    {
      q: "โรคทางจิตเวช หรือความเครียดจากการทำงาน ประกันสุขภาพคุ้มครองไหม?",
      a: "ในแผนประกันระดับพรีเมียมอย่าง iHealthy Ultra (ตั้งแต่แผน Gold ขึ้นไป) จะมีผลประโยชน์เสริมที่ครอบคลุมค่ารักษาพยาบาลและการปรึกษาแพทย์ทางจิตเวช (ทั้ง IPD และ OPD) ซึ่งตอบโจทย์วิถีชีวิตคนทำงานในยุคปัจจุบันที่มีภาวะเครียดสูงมากค่ะ"
    },
    {
      q: "ขั้นตอนการสมัครและตรวจสุขภาพสำหรับวัยทำงานยุ่งยากไหม?",
      a: "ไม่ยุ่งยากเลยค่ะ หากท่านมีสุขภาพร่างกายแข็งแรง ไม่มีประวัติเจ็บป่วยร้ายแรงหรือโรคเรื้อรัง ส่วนใหญ่สามารถสมัครโดยแถลงสุขภาพในใบคำขอเอาประกันได้เลยโดยไม่ต้องไปตรวจสุขภาพที่โรงพยาบาล พี่ฝ้ายดูแลกรอกเอกสารและให้คำปรึกษาผ่านช่องทางออนไลน์ได้อย่างรวดเร็วค่ะ"
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
          <span className="text-primary font-bold">ประกันสุขภาพ วัยทำงาน</span>
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
              <Briefcase size={14} /> Working Class Health Plan
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
              ประกันสุขภาพ วัยทำงาน <br/>
              <span className="text-primary">ชีวิตเต็มที่ งานไม่มีสะดุด</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface/70 leading-relaxed max-w-lg">
              วัยทำงานเป็นเสาหลักสำคัญในการขับเคลื่อนทั้งหน้าที่การงานและครอบครัว 
              หมดกังวลเรื่องปัญหาสุขภาพเฉียบพลันหรือโรคร้ายแรงที่อาจเกิดขึ้นโดยไม่คาดฝัน 
              ปกป้องความมั่งคงทางการเงินของคุณ พร้อมสิทธิ์ประโยชน์ในการลดหย่อนภาษีประจำปีสูงสุด 25,000 บาท ด้วยแผนคุ้มครองรักษาสุขภาพที่ลงตัวที่สุด
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => openConsultation('appointment')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary/95 hover:shadow-primary/20 transition-all cursor-pointer"
              >
                เช็กเบี้ยประกันวัยทำงานฟรี
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
                  alt="ครอบครัววัยทำงานและคนรัก ประกันสุขภาพมั่นคง" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white p-5 rounded-2xl shadow-lg border-l-4 border-emerald-500 max-w-[200px] z-10">
              <p className="text-xs font-black text-emerald-600 mb-1">💼 ลดหย่อนภาษีได้</p>
              <p className="text-xs font-medium text-on-surface">นำเบี้ยประกันสุขภาพไปหักลดหย่อนภาษีได้สูงสุดถึง 25,000 บาท/ปี</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">
              ความเสี่ยงทางสุขภาพ <span className="text-primary">ที่คนทำงานมักมองข้าม</span>
            </h2>
            <p className="text-on-surface/60 font-medium">
              การทำงานหนักเพื่ออนาคตอาจทิ้งรอยแผลทางสุขภาพไว้โดยที่คุณไม่รู้ตัว การมีประกันสุขภาพไว้คือการโอนย้ายความเสี่ยงทางการเงินอย่างชาญฉลาด
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-on-surface">กลุ่มโรคออฟฟิศซินโดรมเรื้อรัง</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                การนั่งทำงานหน้าจอคอมพิวเตอร์เป็นเวลานานหลายชั่วโมงติดต่อกัน นำมาซึ่งปัญหากล้ามเนื้ออักเสบเรื้อรัง และโรคหมอนรองกระดูกทับเส้นประสาทซึ่งค่าใช้จ่ายผ่าตัดรักษาสูงลิ่ว
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-on-surface">โรคระบบทางเดินอาหารและกรดไหลย้อน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                การกินอาหารไม่ตรงเวลา ความรีบเร่งในชีวิตประจำวัน และความเครียดสะสมจากการทำงาน ก่อให้เกิดโรคกระเพาะอักเสบเฉียบพลัน และโรคกรดไหลย้อนที่ต้องการการดูแลต่อเนื่อง
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-on-surface">ความเสี่ยงโรคร้ายแรงในวัยทำงาน</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                โรคมะเร็ง, เส้นเลือดในสมองแตก/ตีบ, หัวใจขาดเลือด พบบ่อยขึ้นในกลุ่มวัยทำงานที่มีพฤติกรรมทำงานหนัก เครียดสะสม พักผ่อนน้อย และไม่มีเวลาออกกำลังกาย
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
              <h2 className="text-3xl font-extrabold text-on-surface">ทำไมวัยทำงานต้องวางแผนประกันสุขภาพกับ <span className="text-primary">พี่ฝ้าย</span></h2>
              <p className="text-on-surface/60 font-medium">
                คัดสรรและออกแบบแผนความคุ้มครองสุขภาพให้สอดรับกับรายได้ รายจ่าย และเป้าหมายการประหยัดภาษีประจำปีของคุณได้อย่างเหมาะสมที่สุด
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
                    <Heart size={12} className="fill-primary" /> Expert Financial & Tax Plan
                  </span>
                  <h3 className="text-2xl font-black text-on-surface leading-snug">
                    ออกแบบแผนภาษีควบคู่สุขภาพ
                  </h3>
                </div>
                <p className="text-on-surface/80 leading-relaxed text-sm font-medium">
                  เพราะวัยทำงานเป็นวัยที่มีภาระเรื่องการชำระภาษีเงินได้ พี่ฝ้ายจะคอยช่วยคำนวณและออกแบบเบี้ยประกันภัยสุขภาพรวมถึงสัญญาสะสมทรัพย์ เพื่อเพิ่มประสิทธิภาพในการหักลดหย่อนภาษีให้เกิดประโยชน์สุงสุดแก่ตัวท่าน พร้อมสร้างความมั่นคงด้านค่าใช้จ่ายยามเจ็บป่วยไปในตัวค่ะ
                </p>
                
                {/* Visual quote or service promise items */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>คำนวณภาษีและสิทธิลดหย่อนอย่างละเอียด</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>เลือกแผนประกันคุ้มค่า เบี้ยเหมาะกับรายได้</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-on-surface/75">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>ดูแลสิทธิ์ประโยชน์และการเคลม ตลอดอายุกรมธรรม์</span>
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
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">แผนประกันสุขภาพแนะนำสำหรับ <span className="text-primary">วัยทำงาน</span></h2>
            <p className="text-on-surface/60 font-medium text-sm">
              คุ้มค่า คุ้มครองครอบคลุม เพื่อความมั่นคงสูงสุดในการทำงานและการใช้ชีวิต
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`p-8 rounded-[2.5rem] border-2 ${pkg.color} flex flex-col justify-between shadow-sm relative overflow-hidden`}>
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full bg-primary text-white">
                    {pkg.tag}
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-on-surface">{pkg.name}</h3>
                    <p className="text-xs text-on-surface/60 mt-2 leading-relaxed">{pkg.desc}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <p className="text-xs font-bold text-on-surface/50 uppercase tracking-wider">สิทธิประโยชน์เด่น:</p>
                    {pkg.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-on-surface/80 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-on-surface">คำถามที่พบบ่อย (FAQ) ประกันสุขภาพคนทำงาน</h2>
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
