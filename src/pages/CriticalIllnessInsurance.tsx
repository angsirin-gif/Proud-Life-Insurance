import { useState } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  Phone,
  MessageCircle,
  HeartPulse,
  Users,
  ShieldAlert,
  CalendarClock,
  Globe,
  MousePointerClick,
  Laptop,
  FileText,
  Check,
  AlertCircle,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
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
          <span className="text-primary">ประกันโรคร้ายแรง</span>
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
            Critical Illness Insurance
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
            ประกันโรคร้ายแรง <br/>
            <span className="text-primary text-4xl md:text-5xl mt-2 block">เลือกให้เหมาะตามงบ</span>
          </h1>
          <p className="text-lg text-on-surface/70 leading-relaxed mb-10 max-w-lg">
            เปรียบเทียบ 3 แผนโรคร้ายแรง ให้เข้าใจง่ายว่าแผนไหนเหมาะกับคุณ เตรียมพร้อมรับมือกับโรคร้ายแรงที่ไม่คาดคิด ด้วยเงินก้อนโตที่ช่วยให้คุณเข้าถึงการรักษาที่ดีที่สุด
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#comparison-table" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center">
              เปรียบเทียบทั้ง 3 แผน
            </a>
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
          <div className="max-w-[580px] w-full p-4 bg-white rounded-[2rem] shadow-2xl transform rotate-3 border border-surface-container">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden">
              <img 
                src="/Cancer.webp" 
                alt="Health care and support"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 right-0 md:-left-6 bg-white p-5 rounded-lg shadow-xl max-w-[180px] transform -rotate-3 border-l-4 border-secondary z-20"
          >
            <p className="text-xs font-bold text-secondary mb-1">Health First</p>
            <p className="text-sm font-medium text-on-surface">คุ้มครองสูงสุดทุกระยะ</p>
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold text-primary leading-tight">ใครที่ควรทำประกัน<br/>กลุ่มนี้?</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl text-on-surface/70 leading-relaxed">
              ประกันโรคร้ายแรงเหมาะสำหรับทุกคนที่ต้องการความมั่นใจว่าหากเกิดเหตุไม่คาดฝัน จะมีเงินก้อนดูแลค่ารักษาและค่าใช้จ่ายอื่นๆ
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2 text-sm">วัยทำงาน</h3>
                <p className="text-xs text-on-surface/70">ปกป้องรายได้และเงินออม ไม่ให้หมดไปกับค่ารักษาพยาบาลก้อนโต</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <ShieldAlert className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2 text-sm">ผู้ที่มีประวัติครอบครัว</h3>
                <p className="text-xs text-on-surface/70">เตรียมพร้อมรับมือกับความเสี่ยงทางพันธุกรรมที่อาจเกิดขึ้น</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <HeartPulse className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2 text-sm">คนที่มีภาระครอบครัว</h3>
                <p className="text-xs text-on-surface/70">โรคร้ายแรงกระทบทั้งค่ารักษาและรายได้ระหว่างพักฟื้น</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <Laptop className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2 text-sm">คนที่อยากเริ่มง่าย</h3>
                <p className="text-xs text-on-surface/70">มองหาแผนออนไลน์ที่สมัครได้ทันที ไม่ซับซ้อน</p>
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
      name: "iShield",
      tag: "คุ้มครองครบ 70 โรคร้าย",
      href: "/critical-illness-insurance/ishield",
      features: [
        "คุ้มครองชีวิตและโรคร้ายแรงถึงอายุ 85 ปี", 
        "เคลมระยะเริ่มต้นได้หลายครั้ง", 
        "เลือกระยะเวลาชำระเบี้ยได้หลากหลาย", 
        "เบี้ยประกันคงที่ตลอดสัญญา"
      ]
    },
    {
      name: "CI123",
      tag: "คุ้มครองสูงสุด 123 โรค",
      href: "/critical-illness-insurance/ci123",
      features: [
        "คุ้มครองกว้าง 123 โรค ทุกระยะ", 
        "ตรวจพบความเสี่ยงก็เคลมได้", 
        "คุ้มครองถึงอายุ 99 ปี", 
        "คุ้มครองหัตถการการแพทย์ขั้นสูง"
      ]
    },
    {
      name: "โรคร้ายเบาใจ",
      tag: "คุ้มครอง 9 กลุ่มโรคยอดฮิต",
      href: "/critical-illness-insurance/critical-illness-care",
      features: [
        "สมัครออนไลน์ง่าย ไม่ต้องตรวจสุขภาพ", 
        "รับเงินก้อนสูงสุด 1 ล้านบาท", 
        "เหมาะกับคนเริ่มต้นทำประกัน"
      ]
    },
    {
      name: "โรคร้ายโซชิลด์",
      tag: "Comprehensive CI",
      href: "/critical-illness-insurance/so-shield",
      features: [
        "คุ้มครอง 70 โรคร้ายแรงทุกระยะ", 
        "รับเงินก้อน 100% ทันที", 
        "เบี้ยประกันราคาย่อมเยา"
      ]
    }
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">เลือกแผนโรคร้ายแรงที่ใช่</h2>
          <p className="text-on-surface/70">รับเงินก้อนทันทีเมื่อตรวจพบ เพื่อการรักษาที่ทันท่วงที</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-md border-t-4 border-secondary flex flex-col h-full transition-all hover:shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-1">{plan.name}</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-wider">{plan.tag}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-on-surface/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={plan.href} className="w-full py-3 rounded-full font-bold transition-all bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md active:scale-95 text-center">
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
    { 
      name: "iShield", 
      point: "เบี้ยคงที่ วางแผนค่าใช้จ่ายง่าย", 
      coverage: "85 ปี", 
      online: "ไม่ได้",
      healthCheck: "อาจต้องตรวจตามเกณฑ์บริษัท",
      premiumType: "คงที่ตลอดสัญญา",
      target: "คนที่อยากควบคุมงบเบี้ยระยะยาว" 
    },
    { 
      name: "CI123", 
      point: "ประกันโรคร้ายแรงหลายระยะ", 
      coverage: "99 ปี", 
      online: "ไม่ได้",
      healthCheck: "อาจต้องตรวจตามเกณฑ์บริษัท",
      premiumType: "ปรับตามอายุ",
      target: "คนที่เน้นความคุ้มครองกว้าง" 
    },
    { 
      name: "โรคร้ายเบาใจ", 
      point: "สมัครสะดวก เริ่มต้นง่าย", 
      coverage: "ปีต่อปี (ถึง 85 ปี)", 
      online: "ได้",
      healthCheck: "ไม่ต้องตรวจในบางกรณี*",
      premiumType: "ปรับตามอายุ",
      target: "คนที่อยากเริ่มต้นคุ้มครองได้ง่าย" 
    }
  ];

  return (
    <section id="comparison-table" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-12 text-center">ตารางเปรียบเทียบแผนประกัน</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-surface-container-low text-left">
                <th className="p-6 font-bold text-primary">ชื่อแผน</th>
                <th className="p-6 font-bold text-primary">จุดเด่น</th>
                <th className="p-6 font-bold text-primary">คุ้มครองถึงอายุ</th>
                <th className="p-6 font-bold text-primary">สมัครออนไลน์</th>
                <th className="p-6 font-bold text-primary">ต้องตรวจสุขภาพไหม</th>
                <th className="p-6 font-bold text-primary">ลักษณะเบี้ย</th>
                <th className="p-6 font-bold text-primary">เหมาะกับใคร</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-highest">
              {data.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-surface-container-lowest' : ''}>
                  <td className="p-6 font-bold">{row.name}</td>
                  <td className="p-6 text-sm">{row.point}</td>
                  <td className="p-6 text-sm">{row.coverage}</td>
                  <td className="p-6 text-sm">{row.online}</td>
                  <td className="p-6 text-sm">{row.healthCheck}</td>
                  <td className="p-6 text-sm">{row.premiumType}</td>
                  <td className="p-6 text-sm">{row.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { 
      q: "ประกันโรคร้ายแรงต่างจากประกันสุขภาพอย่างไร?", 
      a: "ประกันโรคร้ายแรงโดยทั่วไปจ่ายเป็นเงินก้อนเมื่อเข้าเกณฑ์การวินิจฉัยตามกรมธรรม์ ส่วนประกันสุขภาพมักคุ้มครองค่ารักษาพยาบาลตามจริงภายใต้วงเงินและเงื่อนไขของแผนค่ะ" 
    },
    { 
      q: "ถ้ามีสวัสดิการบริษัทอยู่แล้ว ยังจำเป็นต้องมีประกันโรคร้ายแรงไหม?", 
      a: "สวัสดิการบริษัทมักช่วยค่ารักษา แต่ประกันโรคร้ายแรงมีบทบาทเรื่องเงินก้อนสำหรับพักงาน ฟื้นตัว หรือค่าใช้จ่ายอื่นนอกโรงพยาบาลที่สวัสดิการอาจไม่ครอบคลุมค่ะ" 
    },
    { 
      q: "ถ้าตรวจเจอโรคร้ายแรงแล้วค่อยทำประกัน จะคุ้มครองไหม?", 
      a: "โดยทั่วไป โรคหรือความผิดปกติที่เกิดขึ้นก่อนวันเริ่มคุ้มครองมักเป็นเรื่องที่ต้องพิจารณาตามเงื่อนไขกรมธรรม์และการรับประกันภัย ควรเปิดเผยข้อมูลสุขภาพตามจริงทุกครั้งค่ะ" 
    },
    { 
      q: "ทั้ง 3 แผนนี้จ่ายเงินก้อนเหมือนกันไหม?", 
      a: "ไม่เหมือนกันทั้งหมด เพราะแต่ละแบบมีโครงสร้างความคุ้มครอง จำนวนโรค ระยะของโรค และเงื่อนไขการจ่ายต่างกัน ควรดูรายละเอียดรายแผนประกอบการตัดสินใจนะคะ" 
    },
    { 
      q: "แผนไหนเหมาะกับคนเริ่มต้นทำประกันโรคร้ายแรง?", 
      a: "ถ้าต้องการเริ่มต้นแบบง่าย ซื้อออนไลน์ และไม่ต้องตรวจสุขภาพ โรคร้ายเบาใจจะเข้าใจง่ายที่สุดใน 3 ตัวนี้ค่ะ" 
    },
    { 
      q: "แผนไหนเหมาะกับคนที่อยากได้ความคุ้มครองกว้างที่สุด?", 
      a: "CI123 เด่นเรื่องความคุ้มครองกว้างถึง 123 โรค และครอบคลุมหลายระยะของโรคร้ายแรงค่ะ" 
    },
    { 
      q: "แผนไหนเหมาะกับคนที่อยากให้เบี้ยไม่ไล่ขึ้นตามอายุ?", 
      a: "iShield เป็นแผนที่เบี้ยปีกรมธรรม์ถัดไปคงที่ ไม่ปรับเพิ่มตามอายุ ช่วยให้วางแผนการเงินระยะยาวได้แม่นยำค่ะ" 
    },
    { 
      q: "ต้องตรวจสุขภาพไหม?", 
      a: "iShield: บริษัทอาจพิจารณาให้ตรวจสุขภาพตามเกณฑ์รับประกันภัย | โรคร้ายเบาใจ: ไม่ต้องตรวจสุขภาพ เพียงตอบคำถามสุขภาพ 5 ข้อ | CI123: เป็นไปตามเกณฑ์การพิจารณารับประกันภัยของบริษัทค่ะ" 
    },
    { 
      q: "ซื้อออนไลน์ได้ทุกตัวไหม?", 
      a: "เฉพาะ 'โรคร้ายเบาใจ' ที่สามารถซื้อออนไลน์ได้ทันทีค่ะ ส่วน iShield และ CI123 สามารถปรึกษาที่ปรึกษาเพื่อรับคำแนะนำและดำเนินการสมัครค่ะ" 
    },
    { 
      q: "ใช้ลดหย่อนภาษีได้ไหม?", 
      a: "iShield: สูงสุด 100,000 บาท | CI123: สูงสุด 25,000 บาท | โรคร้ายเบาใจ: สูงสุด 100,000 บาท (หมายเหตุ: ควรตรวจสอบตามหลักเกณฑ์ล่าสุดของกรมสรรพากรค่ะ)" 
    },
    { 
      q: "ถ้ามีประกันสุขภาพอยู่แล้ว ควรทำประกันโรคร้ายแรงเพิ่มหรือไม่?", 
      a: "ควรค่ะ เพราะประกันสุขภาพจ่ายค่ารักษา แต่ประกันโรคร้ายแรงจ่ายเงินก้อนให้เราไว้ใช้จ่ายส่วนตัวหรือเป็นเงินสำรองในช่วงที่ทำงานไม่ได้ค่ะ" 
    },
    { 
      q: "ประกันโรคร้ายแรงจ่ายเมื่อ “ตรวจเจอ” เลยหรือไม่?", 
      a: "จ่ายเมื่อผลการวินิจฉัยทางการแพทย์ตรงตามเงื่อนไขที่ระบุในกรมธรรม์ค่ะ ซึ่งแต่ละโรคอาจมีเกณฑ์การวินิจฉัยที่ต่างกันไป" 
    },
    { 
      q: "โรคระยะเริ่มต้นกับระยะรุนแรง ต่างกันอย่างไร?", 
      a: "ระยะเริ่มต้นคือระยะที่ยังไม่ลุกลามมาก ส่วนระยะรุนแรงคือระยะที่ส่งผลกระทบต่ออวัยวะหรือร่างกายอย่างมาก ซึ่งสัดส่วนการจ่ายเงินก้อนจะต่างกันตามแผนที่เลือกค่ะ" 
    },
    { 
      q: "ถ้าเคยมีประวัติสุขภาพ จะสมัครได้ไหม?", 
      a: "สามารถยื่นใบสมัครเพื่อความพิจารณาได้ค่ะ บริษัทจะดูจากประวัติความรุนแรงและสถานะปัจจุบันของโรคนั้นๆ ค่ะ" 
    },
    { 
      q: "ถ้าเคลมแล้ว สัญญาจะสิ้นสุดเลยไหม?", 
      a: "ขึ้นอยู่กับแผนและระยะที่เคลมค่ะ เช่น หากเคลมระยะรุนแรงเต็มวงเงิน สัญญามักจะสิ้นสุด แต่ถ้าเคลมระยะเริ่มต้น สัญญามักจะยังดำเนินต่อเพื่อคุ้มครองส่วนที่เหลือค่ะ" 
    }
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

export default function CriticalIllnessInsurance() {
  const { openConsultation } = useConsultation();
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhoIsItFor />
        <ProductCards />
        <ComparisonTable />
        <FAQ />
        <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
      </main>
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full flex items-center justify-around p-4">
          <a href="tel:+66896965397" className="flex flex-col items-center gap-1 text-primary"><Phone className="w-6 h-6" /><span className="text-[10px] font-bold">โทรหาเรา</span></a>
          <a href="https://line.me/ti/p/@proudlifeinsurance" className="flex flex-col items-center gap-1 text-secondary"><MessageCircle className="w-6 h-6 fill-current" /><span className="text-[10px] font-bold">LINE Chat</span></a>
          <button 
            onClick={() => openConsultation('appointment')}
            className="bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/20"
          ><CalendarClock className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
}
