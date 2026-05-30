import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  CheckCircle2, 
  Users, 
  Landmark, 
  CalendarClock, 
  Phone,
  MessageCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { ContactSection } from '../components/ContactSection';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-container/20 to-surface">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-on-surface/50">
          <Link to="/" className="hover:text-primary transition-colors">หน้าหลัก</Link>
          <span>/</span>
          <Link to="/#products" className="hover:text-primary transition-colors">แผนประกันส่วนบุคคล</Link>
          <span>/</span>
          <span className="text-primary">ประกันชีวิตตลอดชีพ</span>
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
            Whole Life Insurance
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
            ประกันชีวิตตลอดชีพ <br/>
            <span className="text-primary text-4xl md:text-5xl mt-2 block">เน้นคุ้มครองชีวิต</span>
          </h1>
          <p className="text-lg text-on-surface/70 leading-relaxed mb-10 max-w-lg">
            เน้นความคุ้มครองชีวิตระยะยาว บางแผนมีเงินคืนระหว่างทาง แต่หัวใจหลักคือการดูแลครอบครัวและการส่งต่อความมั่นคงให้กับคนที่คุณรัก
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#comparison-table" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center">
              เปรียบเทียบทั้ง 4 แผน
            </a>
            <a href="#quiz" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-high transition-all active:scale-95 flex items-center justify-center">
              ดูว่าแผนไหนเหมาะกับคุณ
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="max-w-[620px] w-full p-4 bg-white rounded-[2rem] shadow-2xl transform rotate-2 border border-surface-container overflow-hidden">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden">
              <img 
                src="/Thai-Family.webp" 
                alt="Family protected by Krungthai-AXA life insurance"
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
            <p className="text-xs font-bold text-secondary mb-1">Growth & Stability</p>
            <p className="text-sm font-medium text-on-surface">คุ้มครองต่อเนื่องตลอดอายุขัย</p>
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
              แผนประกันชีวิตตลอดชีพถูกออกแบบมาเพื่อเป็นรากฐานความมั่นคงที่แท้จริง เหมาะสำหรับผู้ที่มองเห็นคุณค่าของการวางแผนระยะยาว
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">หัวหน้าครอบครัว</h3>
                <p className="text-sm text-on-surface/70">สร้างหลักประกันที่แน่นอนให้คนที่คุณรักในวันที่คุณไม่อยู่</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-lg">
                <Landmark className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">ผู้ที่ต้องการสร้างมรดก</h3>
                <p className="text-sm text-on-surface/70">ส่งต่อความมั่งคั่งให้ลูกหลานแบบปลอดภาษีมรดก</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-[2rem]">
                <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">คุ้มครองยาวถึงสูงวัย</h3>
                <p className="text-sm text-on-surface/70">มั่นใจกับความคุ้มครองที่ครอบคลุมยาวนานจนถึงอายุ 99 ปี</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-lg">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold mb-2">จ่ายเบี้ยสั้น จบเร็ว</h3>
                <p className="text-sm text-on-surface/70">เน้นการบริหารกระแสเงินสด ชำระเบี้ยเพียงไม่กี่ปีแต่คุ้มครองยาว</p>
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
      name: "LifeReady",
      tag: "ยืดหยุ่น คุ้มครองยาว",
      href: "/whole-life-insurance/lifeready",
      features: [
        "คุ้มครองยาวถึงอายุ 99 ปี", 
        "ชำระเบี้ย 6 ปี / 12 ปี / 18 ปี / ถึงอายุ 99 ปี",
        "ทุนประกันขั้นต่ำ 150,000 บาท",
        "เลือกภาระเบี้ยได้ยืดหยุ่น"
      ]
    },
    {
      name: "12PL",
      tag: "คุ้มครองพร้อมเงินคืน",
      href: "/whole-life-insurance/12pl",
      features: [
        "อายุรับประกัน 1 เดือน–60 ปี",
        "ทุนประกันขั้นต่ำ 100,000 บาท",
        "ชำระเบี้ย 12 ปี เพื่อสร้างหลักคุ้มครองให้ครอบครัว",
        "มีเงินคืนรายปี"
      ]
    },
    {
      name: "iSmart 80/6",
      tag: "เบี้ยสั้น ผลประโยชน์เร็ว",
      href: "/whole-life-insurance/ismart-80-6",
      features: [
        "จ่ายเบี้ย 6 ปี",
        "มีเงินคืนทุกปี",
        "ความคุ้มครองชีวิตสูงถึง 200%",
        "เหมาะกับคนที่อยากจ่ายสั้นและมีเงินคืนระหว่างทาง"
      ]
    },
    {
      name: "LifeTreasure",
      tag: "มรดกล้ำค่าเพื่อครอบครัว",
      href: "/whole-life-insurance/lifetreasure",
      features: [
        "คุ้มครองสูงถึงอายุ 99 ปี",
        "ทุนประกันขั้นต่ำ 10 ล้านบาท",
        "เหมาะกับการวางแผนมรดก / ส่งต่อทรัพย์สิน"
      ]
    }
  ];

  return (
    <section id="plans" className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">เลือกแผนที่ใช่สำหรับคุณ</h2>
          <p className="text-on-surface/70">ความคุ้มครองที่ครอบคลุม ตอบโจทย์ทุกช่วงชีวิต</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Link 
                to={plan.href}
                className="w-full py-3 rounded-full font-bold transition-all bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md active:scale-95 text-center flex items-center justify-center"
              >
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
      name: "LifeReady", 
      point: "เลือกชำระเบี้ยได้หลายแบบ คุ้มครองยาวถึง 99 ปี", 
      coverage: "ถึงอายุ 99 ปี", 
      payment: "6, 12, 18 ปี หรือถึงอายุ 99 ปี", 
      target: "คนที่ต้องการความคุ้มครองยาวนานในงบที่คุมได้",
      need: "อยากคุ้มครองยาว"
    },
    { 
      name: "12PL", 
      point: "ชำระเบี้ย 12 ปี คุ้มครองถึงอายุ 85 ปี", 
      coverage: "ถึงอายุ 85 ปี", 
      payment: "12 ปี", 
      target: "คนที่ต้องการการออมพร้อมความคุ้มครอง (อายุ 1 เดือน - 60 ปี)",
      need: "อยากมีเงินคืน"
    },
    { 
      name: "iSmart 80/6", 
      point: "จ่ายสั้น 6 ปี มีเงินคืนทุกปี", 
      coverage: "ถึงอายุ 80 ปี", 
      payment: "6 ปี", 
      target: "คนที่อยากจ่ายสั้นและมีเงินคืนระหว่างทาง",
      need: "อยากจ่ายสั้น"
    },
    { 
      name: "LifeTreasure", 
      point: "เหมาะกับการวางแผนส่งต่อทรัพย์สิน ทุนประกันขั้นต่ำ 10 ล้านบาท", 
      coverage: "ถึงอายุ 99 ปี", 
      payment: "6, 12, 18 ปี", 
      target: "การวางแผนมรดก / ส่งต่อทรัพย์สิน (ทุน 10 ล้านขึ้นไป)",
      need: "อยากวางแผนมรดก"
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
                <th className="p-6 font-bold text-primary">จุดเด่นหลัก</th>
                <th className="p-6 font-bold text-primary">เหมาะเมื่อคุณต้องการ...</th>
                <th className="p-6 font-bold text-primary">ระยะเวลาคุ้มครอง</th>
                <th className="p-6 font-bold text-primary">ระยะเวลาชำระเบี้ย</th>
                <th className="p-6 font-bold text-primary">เหมาะกับใคร</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-highest">
              {data.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-surface-container-lowest' : ''}>
                  <td className="p-6 font-bold">{row.name}</td>
                  <td className="p-6 text-sm">{row.point}</td>
                  <td className="p-6">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                      {row.need}
                    </span>
                  </td>
                  <td className="p-6 text-sm">{row.coverage}</td>
                  <td className="p-6 text-sm">{row.payment}</td>
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

const Recommendation = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      question: "คุณต้องการรูปแบบความคุ้มครองแบบไหน?",
      options: [
        { label: "คุ้มครองชีวิตล้วนๆ (เน้นทุนประกันสูง)", value: "pure" },
        { label: "คุ้มครองชีวิต + มีเงินคืนระหว่างทาง", value: "cashback" }
      ]
    },
    {
      id: 2,
      question: "คุณต้องการความยืดหยุ่นในการชำระเบี้ยอย่างไร?",
      options: [
        { label: "อยากจ่ายสั้น จบภาระไว", value: "short" },
        { label: "อยากเลือกภาระเบี้ยได้ยืดหยุ่น ปรับได้ตามงบ", value: "flexible" }
      ]
    },
    {
      id: 3,
      question: "เป้าหมายหลักของคุณคืออะไร?",
      options: [
        { label: "ดูแลครอบครัวทั่วไป / สร้างหลักประกัน", value: "family" },
        { label: "วางแผนมรดก / ส่งต่อทรัพย์สิน (ทุน 10 ล้าน+)", value: "estate" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [step]: value });
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4);
    }
  };

  const getRecommendation = () => {
    const { 1: q1, 2: q2, 3: q3 } = answers;
    if (q3 === "estate") return { 
      name: "LifeTreasure", 
      href: "/whole-life-insurance/lifetreasure",
      desc: "เหมาะที่สุดสำหรับการวางแผนมรดกขนาดใหญ่และการส่งต่อทรัพย์สินอย่างมั่นคง" 
    };
    if (q1 === "cashback") {
      if (q2 === "short") return { 
        name: "iSmart 80/6", 
        href: "/whole-life-insurance/ismart-80-6",
        desc: "ตอบโจทย์คนที่อยากจ่ายสั้นเพียง 6 ปี และมีเงินคืนระหว่างทางทุกปี" 
      };
      return { 
        name: "12PL", 
        href: "/whole-life-insurance/12pl",
        desc: "คุ้มครองครอบครัวพร้อมเงินคืนรายปี ชำระเบี้ยสบายๆ 12 ปี" 
      };
    }
    return { 
      name: "LifeReady", 
      href: "/whole-life-insurance/lifeready",
      desc: "แผนประกันที่ยืดหยุ่นและคุ้มครองยาวนาน เหมาะเป็นรากฐานให้ครอบครัว" 
    };
  };

  const reset = () => {
    setStep(1);
    setAnswers({});
  };

  return (
    <section id="quiz" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">เลือกแผนที่เหมาะกับคุณ</h2>
          <p className="opacity-80 text-lg">ตอบ 3 คำถามง่ายๆ เพื่อค้นหาแผนประกันที่ใช่ที่สุดสำหรับคุณ</p>
        </div>
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 text-on-surface min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step <= 3 ? (
              <motion.div
                key={step}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="w-full"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-2 flex-grow rounded-full transition-all ${s <= step ? 'bg-secondary' : 'bg-surface-container-high'}`}></div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-8 leading-tight">{questions[step - 1].question}</h3>
                <div className="space-y-4">
                  {questions[step - 1].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full p-5 text-left rounded-xl border-2 border-surface-container-high hover:border-secondary hover:bg-secondary/5 transition-all group flex justify-between items-center"
                    >
                      <span className="font-bold text-lg group-hover:text-secondary transition-colors">{option.label}</span>
                      <ArrowRight className="w-5 h-5 text-surface-container-highest group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <p className="text-secondary font-bold uppercase tracking-widest mb-2">แผนที่แนะนำสำหรับคุณคือ</p>
                <h3 className="text-5xl font-black text-primary mb-4">{getRecommendation().name}</h3>
                <p className="text-xl text-on-surface/70 mb-10 max-w-md mx-auto leading-relaxed">{getRecommendation().desc}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to={getRecommendation().href}
                    className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center"
                  >
                    ดูรายละเอียดแผนนี้
                  </Link>
                  <button onClick={reset} className="flex items-center justify-center gap-2 text-on-surface/60 hover:text-primary font-bold transition-colors"><RefreshCw className="w-4 h-4" />ทำแบบทดสอบใหม่</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "ประกันชีวิตตลอดชีพต่างจากประกันสะสมทรัพย์อย่างไร?", a: "ประกันชีวิตตลอดชีพเน้นที่ความคุ้มครองชีวิตที่ยาวนาน (มักจะถึงอายุ 99 ปี) เพื่อสร้างหลักประกันหรือมรดกให้ครอบครัว โดยเบี้ยประกันมักจะคงที่ตลอดสัญญา ในขณะที่ประกันสะสมทรัพย์เน้นการออมเงินเพื่อรับเงินก้อนเมื่อครบกำหนดสัญญา และมีระยะเวลาคุ้มครองที่สั้นกว่า (เช่น 10-25 ปี) ค่ะ" },
    { q: "4 แผนนี้ ต่างกันอย่างไร?", a: "LifeReady เน้นความยืดหยุ่น, 12PL เน้นคุ้มครองพร้อมเงินคืนรายปี, iSmart 80/6 เน้นจ่ายสั้นที่สุด 6 ปีและมีเงินคืนไว, ส่วน LifeTreasure เน้นการสร้างมรดกขนาดใหญ่ทุน 10 ล้านขึ้นไปค่ะ" },
    { q: "ถ้ามีประกันสุขภาพอยู่แล้ว ยังจำเป็นต้องมีประกันชีวิตไหม?", a: "จำเป็นอย่างยิ่งค่ะ เพราะประกันสุขภาพส่วนใหญ่เป็นสัญญาเพิ่มเติมที่ต้องซื้อแนบท้ายสัญญาหลัก (ประกันชีวิต) หากสัญญาหลักสิ้นสุดลง ประกันสุขภาพก็จะสิ้นสุดตามไปด้วยค่ะ" },
    { q: "เบี้ยประกันใช้ลดหย่อนภาษีได้หรือไม่?", a: "สามารถนำเบี้ยประกันภัยไปใช้สิทธิลดหย่อนภาษีเงินได้บุคคลธรรมดาได้สูงสุด 100,000 บาทต่อปี (ตามเงื่อนไขของกรมสรรพากร) ค่ะ" }
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

export default function WholeLifeInsurance() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhoIsItFor />
        <ProductCards />
        <ComparisonTable />
        <Recommendation />
        <FAQ />
        <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
      </main>
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full flex items-center justify-around p-4">
          <a href="tel:+66896965397" className="flex flex-col items-center gap-1 text-primary"><Phone className="w-6 h-6" /><span className="text-[10px] font-bold">โทรหาเรา</span></a>
          <a href="https://line.me/ti/p/@proudlifeinsurance" className="flex flex-col items-center gap-1 text-secondary"><MessageCircle className="w-6 h-6 fill-current" /><span className="text-[10px] font-bold">LINE Chat</span></a>
          <Link to="/contact" className="flex flex-col items-center gap-1 text-on-surface/60"><Landmark className="w-6 h-6" /><span className="text-[10px] font-bold">ที่ตั้ง</span></Link>
          <button className="bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/20"><CalendarClock className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
}
