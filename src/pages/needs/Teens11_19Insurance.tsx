import { useState } from 'react';
import { 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown,
  Heart,
  TrendingUp,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSection } from '../../components/ContactSection';
import { useConsultation } from '../../context/ConsultationContext';

export default function Teens11_19Insurance() {
  const { openConsultation } = useConsultation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const highlights = [
    {
      title: "อัตราเบี้ยประกันต่ำที่สุดในชีวิตการทำประกัน",
      desc: "เนื่องจากวัยรุ่นอายุ 11 - 19 ปี มีความแข็งแกร่งทางร่างกายสูงสุด อัตราการนอนโรงพยาบาลต่ำ ทำให้เบี้ยประกันสุขภาพถูกที่สุดเมื่อเทียบกับทุกช่วงวัย"
    },
    {
      title: "คุ้มครองสูงสุดจากการบาดเจ็บและอุบัติเหตุกีฬา",
      desc: "ไม่ว่าจะเป็นการเล่นบาสเกตบอล ฟุตบอล ปั่นจักรยาน หรืออุบัติเหตุระหว่างเดินทาง ท่องเที่ยว ไปค่ายสันทนาการ"
    },
    {
      title: "คุ้มครองปัญหาสุขภาพเฉพาะวัยรุ่น",
      desc: "ดูแลค่ารักษาอาการเจ็บป่วยที่พบบ่อยในวัยเรียน เช่น ไข้หวัดใหญ่, อาหารเป็นพิษเฉียบพลัน, โรคกระเพาะอักเสบ, กรดไหลย้อน หรือโรคไส้ติ่งอักเสบเฉียบพลัน"
    }
  ];

  const packages = [
    {
      name: "MEA Extra Teen (แผนคุ้มครองสุดคุ้ม)",
      tag: "เริ่มต้นราคาเบาหวิว",
      desc: "แผนประกันสุขภาพสำหรับวัยทีน คุ้มครองกรณีรักษาตัวเป็นผู้ป่วยใน (IPD) ด้วยเงื่อนไขการคุ้มครองพยาบาลที่สมบูรณ์แบบ แต่อัตราเบี้ยสบายกระเป๋าผู้ปกครอง",
      benefits: [
        "ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD) สูงสุด 500,000 บาท/ครั้ง",
        "คุ้มครองค่าห้องและอาหาร ค่าดูแลทางการแพทย์ครบถ้วน",
        "ฟรีความคุ้มครองอุบัติเหตุรักษาฉุกเฉิน OPD ภายใน 24 ชม.",
        "เบี้ยประกันรายปีเฉลี่ยตกวันละไม่กี่สิบบาทเท่านั้น",
        "ใช้สิทธิ์เคลมตรงแบบไม่ต้องสำรองจ่าย ณ โรงพยาบาลคู่สัญญามากกว่า 400 แห่ง"
      ],
      color: "border-primary bg-primary/5"
    },
    {
      name: "iHealthy Ultra Basic (แผนเหมาจ่ายระดับล้าน)",
      tag: "ดีที่สุด คุ้มครองครอบคลุม",
      desc: "สำหรับคุณพ่อคุณแม่ที่ต้องการแผนประกันเหมาจ่ายวงเงินหลักล้านเพื่อดูแลปัญหาสุขภาพอุบัติเหตุของวัยรุ่นอย่างอุ่นใจสูงสุด รักษาได้ทุกโรงพยาบาลชั้นนำ",
      benefits: [
        "วงเงินเหมาจ่ายค่ารักษาสูงสุด 3 ล้าน - 10 ล้านบาทต่อปี",
        "คุ้มครองเต็มพิกัด ทั้งอุบัติเหตุกีฬา กระดูกหัก บาดเจ็บเอ็นฉีกขาด",
        "คุ้มครองอาการป่วยรุนแรงที่ต้องทำกายภาพบำบัด หรือนอนไอซียู",
        "รับส่วนลดเพิ่มสำหรับค่าเบี้ย หากเลือกแบบคุ้มครองแบบมีความรับผิดส่วนแรก",
        "ครอบคลุมค่ารักษาโรคร้ายแรงและเนื้องอกทั่วไปตามจริง 100%"
      ],
      color: "border-secondary bg-secondary/5"
    }
  ];

  const faqs = [
    {
      q: "ทำไมวัยรุ่น 11 - 19 ปี ถึงควรมีประกันสุขภาพเป็นของตัวเอง?",
      a: "วัยรุ่นเป็นช่วงวัยที่เริ่มทำกิจกรรมนอกบ้าน ทำกิจกรรมกลุ่ม และเดินทางด้วยตัวเองมากขึ้น อัตราความเสี่ยงต่ออุบัติเหตุจึงสูงขึ้น นอกจากนี้ หากจำเป็นต้องได้รับการผ่าตัดเฉียบพลัน เช่น ไส้ติ่งอักเสบเฉียบพลัน หรือเกิดอาการอาหารเป็นพิษรุนแรง ประกันสุขภาพจะช่วยให้เข้าถึงโรงพยาบาลเอกชนชั้นนำได้อย่างรวดเร็วทันท่วงที"
    },
    {
      q: "เบี้ยประกันวัยนี้ ถูกที่สุดในตารางจริงไหม?",
      a: "จริงค่ะ ตามหลักคณิตศาสตร์ประกันภัย ช่วงอายุ 11-19 ปี จะเป็นช่วงที่เบี้ยประกันสุขภาพ 'ถูกที่สุด' ในบรรดาทุกช่วงอายุตั้งแต่แรกเกิดจนถึงวัยชรา เนื่องจากมีอัตราความเสี่ยงโรคทางกายน้อยที่สุด การทำประกันช่วงนี้จึงคุ้มค่าเบี้ยมากที่สุด"
    },
    {
      q: "หากบาดเจ็บจากการเล่นกีฬาโรงเรียนหรือกีฬากลางแจ้ง ประกันคุ้มครองไหม?",
      a: "คุ้มครองค่ะ ประกันอุบัติเหตุและประกันสุขภาพของกรุงไทย-แอกซ่า คุ้มครองค่ารักษาพยาบาลจากการบาดเจ็บทางร่างกายขณะเล่นกีฬา เล่นบอร์ด หรือกิจกรรมกลางแจ้งทั่วไป เว้นแต่กีฬาอันตรายระบายในเงื่อนไขข้อยกเว้นพิเศษ (เช่น แข่งรถระดับอาชีพ)"
    },
    {
      q: "มีประกันชีวิตพ่วงมาด้วยในแผนเลยหรือไม่?",
      a: "ใช่ค่ะ แผนประกันสุขภาพทุกแบบของกรุงไทย-แอกซ่า จะต้องส่งคู่กับ 'สัญญาหลัก' หรือกรมธรรม์ประกันชีวิตเริ่มต้น ซึ่งจะช่วยสร้างเงินออมหรือคุ้มครองชีวิตขั้นพื้นฐานควบคู่ไปกับความคุ้มครองสุขภาพเสมอค่ะ"
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
          <span className="text-primary font-bold">ประกันสุขภาพวัยรุ่น 11 - 19 ปี</span>
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
              <Flame size={14} /> Teen Health Plan (11-19 Years)
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
              ประกันสุขภาพวัยรุ่น <br/>
              <span className="text-primary">วัยทีน 11 - 19 ปี</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface/70 leading-relaxed max-w-lg">
              วัยรุ่นเป็นวัยที่เต็มไปด้วยพลังงาน ความฝัน และกิจกรรมท้าทาย 
              เพื่อให้น้องๆ ได้สนุกกับการเติบโตและทดลองสิ่งใหม่ๆ ได้อย่างมั่นใจ ประกันสุขภาพวัยรุ่นจะเข้ามาคอยดูแลเคียงข้าง 
              ไม่ว่าจะเจ็บไข้ได้ป่วยเฉียบพลันหรือปัญหากระดูก บาดเจ็บกล้ามเนื้อจากการเล่นกีฬา ด้วยอัตราเบี้ยประกันที่ถูกที่สุดในชีวิตการทำประกันภัย
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => openConsultation('appointment')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary/95 hover:shadow-primary/20 transition-all cursor-pointer"
              >
                เช็กเบี้ยประกันภัยวัยรุ่นฟรี
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
                  alt="ครอบครัวและวัยรุ่น ประกันสุขภาพอุ่นใจ" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white p-5 rounded-2xl shadow-lg border-l-4 border-primary max-w-[200px] z-10">
              <p className="text-xs font-black text-primary mb-1">⚡ แข็งแรง คุ้มครองคุ้ม</p>
              <p className="text-xs font-medium text-on-surface">เบี้ยประกันสุขภาพถูกที่สุด คุ้มครองครอบคลุมทั้งเล่นกีฬาและแอดเวนเจอร์</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Risk Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-on-surface">
              ปัญหาสุขภาพยอดฮิต <span className="text-primary">ในวัยรุ่น 11-19 ปี</span>
            </h2>
            <p className="text-on-surface/60 font-medium">
              แม้จะมีความแข็งแรงทางร่างกายสูงสุด แต่พฤติกรรมและการทำกิจกรรมที่หนักหน่วงก็นำพาความเสี่ยงสุขภาพเฉพาะวัยได้เสมอ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-on-surface">การบาดเจ็บจากการเล่นกีฬา</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                เส้นเอ็นฉีกขาด ข้อเท้าแพลง หรือกระดูกหักจากฟุตบอล บาสเกตบอล หรือสเก็ตบอร์ด ซึ่งต้องอาศัยการรักษาโดยแพทย์เฉพาะทางและการผ่าตัดที่ประณีต
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-on-surface">โรคเกี่ยวกับทางเดินอาหารและช่องท้อง</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                การทานอาหารไม่เป็นเวลา พฤติกรรมทานดึก หรือทานอาหารรสจัด ส่งผลให้วัยรุ่นป่วยเป็นโรคกระเพาะอาหารอักเสบ กรดไหลย้อน หรือไส้ติ่งอักเสบเฉียบพลันกันมาก
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-on-surface">โรคซึมเศร้าและภาวะทางจิตใจ</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">
                ความเครียดจากการเรียนและการปรับตัวเข้าสู่สังคมวัยรุ่น ปัจจุบันแผนประกันสุขภาพพรีเมียมรองรับค่าปรึกษาจิตแพทย์และค่ารักษาพยาบาลทางจิตเวชบางส่วนด้วย
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
              <h2 className="text-3xl font-extrabold text-on-surface">จุดเด่นแผนประกันวัยทีนกับ <span className="text-primary">พี่ฝ้าย</span></h2>
              <p className="text-on-surface/60 font-medium">
                เลือกสรรแผนสัญญาสุขภาพที่ครอบคลุมทุกไลฟ์สไตล์ มั่นใจได้ในทุกกิจกรรมท้าทาย
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
                    <Heart size={12} className="fill-primary" /> Fast & Friendly Support
                  </span>
                  <h3 className="text-2xl font-black text-on-surface leading-snug">
                    ดูแลใส่ใจอย่างรวดเร็ว
                  </h3>
                </div>
                <p className="text-on-surface/80 leading-relaxed text-sm font-medium">
                  ในฐานะตัวแทนดูแล ประกันภัยไม่ใช่แค่เอกสารสัญญา แต่คือการอยู่เคียงข้างเวลาครอบครัวของคุณต้องการการช่วยเหลือ พี่ฝ้ายคอยช่วยดูแลและตรวจสอบกรมธรรม์ รวมถึงแนะนำขั้นตอนการยื่นเคลมค่ารักษาพยาบาลอย่างเป็นขั้นตอนเพื่อประโยชน์สูงสุดของลูกค้าค่ะ
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
                    <span>คอยเคียงข้างครอบครัวคุณในทุกๆ การแอดมิท</span>
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
            <h2 className="text-3xl font-extrabold text-on-surface">แผนประกันภัยแนะนำสำหรับ <span className="text-primary">วัยทีน 11 - 19 ปี</span></h2>
            <p className="text-on-surface/60 font-medium text-sm">
              คุ้มครองจัดเต็มด้วยเบี้ยประกันสุขภาพระดับประหยัดที่สุด ตอบโจทย์ความพร้อมทุกกิจกรรมท้าทาย
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
            <h2 className="text-3xl font-extrabold text-on-surface">คำถามที่พบบ่อย (FAQ) ประกันสุขภาพวัยรุ่น</h2>
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
