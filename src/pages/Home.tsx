import { 
  Phone, 
  MessageCircle, 
  Facebook, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Headphones, 
  ArrowRight, 
  Check,
  Quote,
  ChevronDown,
  MapPin,
  Send,
  HeartPulse,
  Baby,
  Activity,
  Stethoscope,
  Umbrella,
  Wallet,
  Coins,
  TrendingUp,
  X,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ContactSection } from '../components/ContactSection';
import { useConsultation } from '../context/ConsultationContext';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { openConsultation } = useConsultation();

  const categories = [
    { 
      title: 'ประกันชีวิตตลอดชีพ เน้นคุ้มครองชีวิต', 
      desc: 'เหมาะกับคนที่อยากมีทุนประกันชีวิตเพื่อดูแลครอบครัวหรือวางแผนมรดกเป็นหลัก', 
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-primary/10 text-primary',
      href: '/whole-life-insurance'
    },
    { 
      title: 'ประกันอุบัติเหตุ', 
      desc: 'เหมาะกับคนที่อยากมีความคุ้มครองจากอุบัติเหตุโดยเฉพาะ', 
      icon: <Umbrella className="w-8 h-8" />,
      color: 'bg-secondary/10 text-secondary',
      href: '/accident-insurance'
    },
    { 
      title: 'ประกันโรคร้ายแรง', 
      desc: 'เหมาะกับคนที่อยากมีเงินก้อนเมื่อเจอโรคร้ายแรง หรืออยากเสริมความคุ้มครองด้านโรคหนัก', 
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'bg-primary-container/30 text-on-primary-container',
      href: '/critical-illness-insurance'
    },
    { 
      title: 'ประกันสุขภาพ ค่ารักษาพยาบาล', 
      desc: 'เหมาะกับคนที่อยากคุมความเสี่ยงเรื่องค่ารักษาเป็นหลัก', 
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-surface-container-highest text-on-surface-variant',
      href: '/health-insurance'
    },
    { 
      title: 'ประกันสะสมทรัพย์ ออมเงิน', 
      desc: 'เหมาะกับคนที่อยากมีทั้งความคุ้มครองและแผนออมเป็นก้อนตามระยะเวลา', 
      icon: <Wallet className="w-8 h-8" />,
      color: 'bg-primary/10 text-primary',
      href: '/savings-insurance'
    },
    { 
      title: 'ประกันบำนาญ วางแผนภาษี', 
      desc: 'เหมาะกับคนที่อยากเตรียมกระแสเงินสดหลังเกษียณ', 
      icon: <Coins className="w-8 h-8" />,
      color: 'bg-secondary/10 text-secondary',
      href: '/pension-insurance'
    },
  ];

  const products = [
    {
      name: 'iHealthy Ultra',
      desc: 'ประกันสุขภาพเหมาจ่าย ครอบคลุมสูงสุด 100 ล้านบาท',
      recommended: true,
      features: ['คุ้มครองทั้ง OPD และ IPD', 'เลือกโรงพยาบาลได้ทั่วประเทศ', 'ค่าห้องระดับพรีเมียม'],
      href: '/health-insurance/health-ultra'
    },
    {
      name: 'iShield',
      desc: 'ประกันโรคร้ายแรง เจอ จ่าย จบ ครบเครื่องเคียงข้างคุณ',
      recommended: false,
      features: ['คุ้มครอง 70 โรคร้ายแรง', 'มีเงินคืนเมื่อครบสัญญา', 'คุ้มครองชีวิตสูงสุด 100%'],
      href: '/critical-illness-insurance/ishield'
    },
    {
      name: 'Global Index 16/6',
      desc: 'ประกันสะสมทรัพย์ ลงทุนระดับโลก การันตีเงินคืน',
      recommended: false,
      features: ['ชำระเบี้ยสั้นเพียง 6 ปี', 'โอกาสรับผลตอบแทนจากดัชนีโลก', 'คุ้มครองชีวิต 110% ของเบี้ย'],
      href: '/savings-insurance/global-index-16-6'
    }
  ];

  const testimonials = [
    {
      quote: "ประทับใจพี่ฝ้ายมากค่ะ ตอนแรกกังวลเรื่องเคลมมากเพราะเคยมีประสบการณ์ไม่ดี แต่พี่ฝ้ายอธิบายชัดเจนและดูแลเดินเรื่องให้ทุกอย่าง จนตอนนี้ทั้งครอบครัวทำกับพี่ฝ้ายหมดเลยค่ะ",
      author: "คุณรินรดา",
      role: "เจ้าของธุรกิจส่วนตัว"
    },
    {
      quote: "พี่ฝ้ายแนะนำประกันสุขภาพที่ตรงจุดจริงๆ ไม่พยายามขายสิ่งที่ผมไม่ต้องใช้ ชอบความตรงไปธรรมดาและความรวดเร็วในการให้ข้อมูลครับ แนะนำเลยครับสำหรับใครที่มองหาคนดูแลดีๆ",
      author: "คุณธนพล",
      role: "วิศวกร"
    },
    {
      quote: "ตอนลูกเข้าโรงพยาบาล พี่ฝ้ายประสานงานไวมาก ไม่ต้องสำรองจ่ายเลยสักบาทเดียว ขอบคุณที่คอยดูแลและแนะนำแผน iHealthy ให้นะคะ คุ้มค่าและอุ่นใจจริงๆ ค่ะ",
      author: "คุณแม่น้องวิน",
      role: "ข้าราชการ"
    }
  ];

  const latestArticles = [
    {
      id: 1,
      title: "ทำประกันสุขภาพตอนไหนคุ้มที่สุด? สรุปสั้นๆ เข้าใจง่าย",
      category: "ความรู้ประกันสุขภาพ",
      date: "20 พ.ค. 2567",
      image: "/Content_1.webp"
    },
    {
      id: 2,
      title: "5 ข้อผิดพลาดที่คนส่วนใหญ่ทำ เมื่อเลือกซื้อประกันสะสมทรัพย์",
      category: "วางแผนการเงิน",
      date: "15 พ.ค. 2567",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "ประกันบำนาญ VS กองทุนสำรองเลี้ยงชีพ ต่างกันอย่างไร?",
      category: "วางแผนเกษียณ",
      date: "10 พ.ค. 2567",
      image: "/Content_3.webp"
    }
  ];

  const faqs = [
    {
      q: "ทำประกันกับพี่ฝ้าย แตกต่างจากที่อื่นอย่างไร?",
      a: "พี่ฝ้ายเน้น \"ความจริงใจ\" และ \"การบริการหลังการขาย\" เป็นสำคัญค่ะ พี่ฝ้ายไม่ได้แค่ขายแล้วจบไป แต่พี่ฝ้ายจะคอยเป็นที่ปรึกษาและช่วยประสานงานเรื่องการเคลมให้คุณตลอดอายุสัญญา เพื่อให้คุณได้รับสิทธิ์ประโยชน์สูงสุดตามเงื่อนไข"
    },
    {
      q: "ถ้าเคยมีโรคประจำตัว สามารถทำประกันได้ไหม?",
      a: "สามารถยื่นเรื่องพิจารณาได้ค่ะ พี่ฝ้ายจะช่วยดูรายละเอียดและประวัติสุขภาพเบื้องต้น เพื่อแนะนำแนวทางที่ดีที่สุด บางกรณีอาจจะมีการรับประกันแบบมีเงื่อนไข หรือเพิ่มเบี้ยเล็กน้อย ซึ่งเราจะแจ้งความจริงให้ทราบก่อนเริ่มทำค่ะ"
    },
    {
      q: "การเคลมยุ่งยากไหม ต้องสำรองจ่ายก่อนหรือเปล่า?",
      a: "แผนประกันสุขภาพส่วนใหญ่ของ Krungthai-AXA ที่พี่ฝ้ายแนะนำ จะมีระบบ Fax Claim กับโรงพยาบาลคู่สัญญาเกือบทุกแห่งทั่วประเทศ ทำให้ลูกค้าไม่ต้องสำรองจ่ายเงินสดค่ะ เพียงยื่นบัตรประกันคู่กับบัตรประชาชนเท่านั้น"
    },
    {
      q: "ต้องตรวจสุขภาพก่อนทำประกันไหม?",
      a: "สำหรับบางแผนประกันหากสุขภาพแข็งแรงและอายุไม่เกินเกณฑ์ที่กำหนด อาจจะไม่ต้องตรวจสุขภาพค่ะ เพียงแค่แถลงข้อมูลสุขภาพตามจริงในใบคำขอเอาประกันภัยเท่านั้นค่ะ"
    },
    {
      q: "เบี้ยประกันนำไปลดหย่อนภาษีได้เท่าไหร่?",
      a: "เบี้ยประกันสุขภาพสามารถนำไปลดหย่อนภาษีได้ตามจริงสูงสุด 25,000 บาท และหากรวมกับเบี้ยประกันชีวิตทั่วไปแล้ว สามารถลดหย่อนได้สูงสุดไม่เกิน 100,000 บาทต่อปีค่ะ"
    },
    {
      q: "ช่องทางการชำระเบี้ยประกันมีทางไหนบ้าง?",
      a: "สามารถชำระได้หลายช่องทางค่ะ ทั้งการสแกน QR Code ผ่าน Mobile Banking, บัตรเครดิต, เคาน์เตอร์เซอร์วิส หรือหักผ่านบัญชีธนาคารอัตโนมัติ เพื่อความสะดวกและรวดเร็วค่ะ"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary text-sm font-bold">
              <CheckCircle2 size={16} />
              พี่ฝ้าย เข้าใจประกัน
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight text-balance">
              เพราะชีวิต <br />
              <span className="text-primary italic">มีหลายความเสี่ยง</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
              สร้าง 4 เสาหลักให้มั่นคง เพื่อดูแลทั้งชีวิต สุขภาพ โรคร้ายแรง และอุบัติเหตุ ให้ทุกก้าวของอนาคต อุ่นใจได้มากขึ้นค่ะ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
              <button 
                onClick={() => openConsultation('appointment')}
                className="w-full sm:w-64 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Calendar size={20} />
                นัดหมายปรึกษาฟรี
              </button>
              <button 
                onClick={() => openConsultation('line_oa')}
                className="w-full sm:w-64 px-8 py-4 bg-white text-primary rounded-full font-bold border border-primary/10 shadow-sm hover:bg-primary/5 hover:scale-105 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageCircle size={20} />
                ทักแชทสอบถาม
              </button>
            </div>

            <div className="pt-4 flex flex-wrap gap-8 justify-center md:justify-start">
              {[
                { label: 'โทรปรึกษา', value: '089-696-5397', icon: <Phone size={18} />, color: 'text-primary bg-primary/10' },
                { label: 'Line ID', value: '@proudlifeinsurance', icon: <MessageCircle size={18} />, color: 'text-secondary bg-secondary/10' },
                { label: 'Facebook', value: 'proudlifeinsurance', icon: <Facebook size={18} />, color: 'text-primary bg-primary/10' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (idx * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant opacity-70">{item.label}</p>
                    <p className="text-sm font-bold text-on-surface">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[24px] border-white bg-primary/5">
              <img 
                src="/P_Fai_3.webp" 
                alt="พี่ฝ้าย ที่ปรึกษาประกันภัย" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-xl border border-surface-container hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">พร้อมดูแลด้วย</p>
                  <p className="text-xl font-bold text-on-surface">ความจริงใจ</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">แผนประกันที่ครอบคลุมทุกช่วงชีวิต</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">เลือกแผนที่ใช่ เพื่อความอุ่นใจที่มากกว่า</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-low p-8 rounded-[2rem] shadow-sm border border-surface-container hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">{cat.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{cat.desc}</p>
                <Link 
                  to={cat.href || '#'} 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  ดูรายละเอียด <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-24 bg-surface-container-low relative border-t border-surface-container-high/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">ผลิตภัณฑ์ยอดนิยม</h2>
              <p className="text-on-surface-variant">แผนประกันที่ลูกค้าส่วนใหญ่ไว้วางใจเลือกใช้</p>
            </div>
            <Link to="/all-plans" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              ดูแผนทั้งหมด <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-[2rem] border border-surface-container bg-white shadow-sm hover:shadow-md transition-all group"
              >
                {product.recommended && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-black rounded-full uppercase tracking-wider">
                    RECOMMEND
                  </div>
                )}
                <div className="space-y-6">
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-on-surface mb-2">{product.name}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{product.desc}</p>
                  </div>
                  <div className="space-y-4">
                    {product.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="text-[#4CAF50] shrink-0" size={18} />
                        <span className="text-sm font-medium text-on-surface">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={product.href} 
                    className="w-full py-4 rounded-full font-bold bg-[#B3E5FC] text-[#0277BD] hover:bg-[#81D4FA] transition-all mt-4 text-center block"
                  >
                    ดูรายละเอียด
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-surface-container">
        {/* Abstract background blobs */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left image column: 4 columns */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-[12px] border-white bg-primary/5">
                <img 
                  src="/P_Fai_4.webp" 
                  alt="พี่ฝ้าย ที่ปรึกษาประกัน Proud Life" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-[#006064] text-white p-5 rounded-[1.5rem] shadow-lg border-4 border-white max-w-xs">
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-[#80DEEA] mb-1">
                  Full-Time Agent
                </p>
                <p className="text-base font-black leading-tight text-white font-sans">
                  ที่ปรึกษา กรุงไทย-แอกซ่า แบบเต็มเวลา
                </p>
              </div>
            </motion.div>

            {/* Right content column: 8 columns */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary text-xs uppercase tracking-wider font-black">
                  <HeartPulse size={14} className="stroke-[3]" />
                  <span>รู้จักผู้ดูแลคุณ (About P' Fai)</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                  จากสายไอทีและการเงิน <br/>
                  <span className="text-secondary italic">สู่ที่ปรึกษาประกันที่อยากอธิบายเรื่องยากให้เข้าใจง่าย</span>
                </h2>
                <div className="h-1 bg-secondary w-20 rounded-full" />
              </div>

              <div className="space-y-6 text-on-surface/70 font-semibold leading-relaxed">
                <p>
                  ก่อนจะมาเป็นตัวแทนประกันแบบ Full-time พี่ฝ้ายเคยทำงานประจำในสาย <strong>IT และ Financial Solution</strong> มานานหลายปี โดยเริ่มต้นจากงานด้าน Web Programmer, System Analyst และ Business Analyst ดูแลงานวิเคราะห์ระบบ เก็บความต้องการของลูกค้า ประสานงานกับทีมต่างๆ รวมถึงทำโปรเจกต์ที่เกี่ยวข้องกับระบบการเงิน ธนาคาร และ Anti-Money Laundering หรือระบบป้องกันการฟอกเงินค่ะ
                </p>
                <p>
                  ประสบการณ์ช่วงนี้ทำให้พี่ฝ้ายคุ้นเคยกับ <strong>"ข้อมูลที่ซับซ้อน"</strong> และการแปลงเรื่องยากให้เป็นภาษาที่คนทั่วไปเข้าใจได้ง่ายขึ้น เพราะงาน Business Analyst ไม่ใช่แค่เข้าใจระบบ แต่ต้องเข้าใจคน เข้าใจปัญหา และช่วยหาทางออกที่เหมาะกับแต่ละฝ่ายอย่างลงตัวที่สุด
                </p>

                <p>
                  ต่อมาพี่ฝ้ายตัดสินใจลาออกจากงานประจำ เพื่อมาช่วยสามีดูแลธุรกิจครอบครัว ทั้งโรงคั่วกาแฟ และร้านกาแฟ 2 สาขา เป็นเวลากว่า 5 ปี ทำให้ได้เรียนรู้อีกมุมหนึ่งของชีวิตจริงในฐานะเจ้าของธุรกิจ ทั้งเรื่องรายได้ ค่าใช้จ่าย ต้นทุน ความเสี่ยง ความรับผิดชอบต่อครอบครัว ลูกค้า และทีมงาน
                </p>

                {/* Grid for two roles experience */}
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
                    <div className="text-primary font-black mb-1.5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      สายพนักงานประจำ
                    </div>
                    <p className="text-sm text-on-surface/80 leading-relaxed font-bold">
                      เข้าใจลึกซึ้งถึงความกังวลเรื่องภาระครอบครัว รายได้หลักทดแทน ค่ารักษาพยาบาล หรือเป้าหมายออมสำหรับแผนเกษียณในอนาคตค่ะ
                    </p>
                  </div>
                  <div className="p-6 bg-secondary/5 rounded-[2rem] border border-secondary/10">
                    <div className="text-secondary font-black mb-1.5 flex items-center gap-2">
                       <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      สายเจ้าของธุรกิจ
                    </div>
                    <p className="text-sm text-on-surface/80 leading-relaxed font-bold">
                      เข้าใจเรื่องความต่อเนื่องของรายได้ กระแสเงินสด ภาระหนี้สิน ทีมงาน และแผนสำรองหากวันหนึ่งเราไม่สามารถดูแลธุรกิจได้เหมือนเดิมค่ะ
                    </p>
                  </div>
                </div>

                <p>
                  การได้ผ่านทั้งบทบาท <strong>"พนักงานประจำ"</strong> และ <strong>"เจ้าของธุรกิจ"</strong> ทำให้พี่ฝ้ายเห็นชัดว่า แต่ละอาชีพมีมุมมอง ความเสี่ยง และความต้องการในการวางแผนชีวิตที่แตกต่างกันออกไป โดยเฉพาะเมื่อเราเริ่มมีครอบครัว มีธุรกิจ หรือมีคนที่ต้องดูแลปกป้องอยู่ข้างหลัง
                </p>

                <p>
                  วันนี้พี่ฝ้ายจึงตัดสินใจเริ่มงานตัวแทนประกันกรุงไทย-แอกซ่าแบบ Full-time ด้วยความตั้งใจที่จะเป็นที่ปรึกษาที่ช่วยอธิบายเรื่องประกันให้เข้าใจง่าย จริงใจ และไม่กดดัน เพื่อให้แต่ละคนสามารถเลือกแผนที่เหมาะกับชีวิตของตัวเองได้จริงค่ะ สำหรับพี่ฝ้าย ประกันไม่ใช่แค่การขายกรมธรรม์ แต่คือการช่วยสร้างแผนสำรองในวันที่ชีวิตไม่เป็นไปตามแผนการที่วาดไว้
                </p>
              </div>

              {/* Special invitation card at coffee shop */}
              <div className="p-6 md:p-8 bg-surface-container-low rounded-[2.5rem] border border-surface-container-high flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-primary text-lg md:text-xl flex items-center gap-2 leading-tight">
                    ☕️ นัดคุยแผนประกันสบายๆ พร้อมจิบกาแฟ
                  </h4>
                  <p className="text-sm text-on-surface/60 leading-relaxed font-bold max-w-lg">
                    หากใครต้องการทำความเข้าใจเรื่องประกันแผนต่างๆ ค่อยๆ วางแผนแบบไม่กดดัน นัดมาจิบรสชาติกาแฟพิเศษและพูดคุยกันได้ที่ <strong className="text-secondary">Proud Coffee Roaster สาขาบางบอน</strong> นะคะ พี่ฝ้ายพร้อมช่วยดูแลทุกรายละเอียดค่ะ!
                  </p>
                </div>
                <button 
                  onClick={openConsultation}
                  className="px-6 py-4 bg-primary text-white rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all text-xs whitespace-nowrap self-stretch md:self-auto text-center"
                >
                  นัดคุยเพื่อปรึกษา
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3x -z-10 -ml-48" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary">ความประทับใจจากลูกค้าตัวจริง</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm space-y-8 relative"
              >
                <div className="text-primary/10 font-serif text-6xl absolute top-6 left-6 opacity-80 leading-none select-none">
                  “
                </div>
                <p className="text-on-surface/80 leading-relaxed italic relative z-10 pt-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 shrink-0 flex items-center justify-center text-primary">
                    <Quote size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{t.author}</p>
                    <p className="text-xs text-on-surface/40 font-bold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">สาระประกันน่ารู้</h2>
              <p className="text-on-surface-variant text-lg">รวบรวมเทคนิคและข้อควรรู้ในการเลือกซื้อประกันให้คุ้มค่า</p>
            </div>
            <Link to="/articles" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              ดูบทความทั้งหมด <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article, idx) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-surface-container hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-[10px] font-black uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] text-on-surface/50 font-bold uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-6 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <Link 
                    to={`/articles/${article.id}`} 
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm"
                  >
                    อ่านต่อ <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary">คำถามที่พบบ่อย (FAQ)</h2>
            <p className="text-on-surface/50 font-bold mt-2 font-sans">ตอบทุกข้อสงสัยเรื่องประกันภัยกับพี่ฝ้ายค่ะ</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-[1rem] border border-surface-container overflow-hidden transition-all hover:border-primary/30">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors group"
                >
                  <span className={`font-black tracking-tight transition-colors ${activeFaq === idx ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
                  <ChevronDown className={`text-primary transition-transform shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 text-on-surface/60 text-base font-bold font-sans leading-relaxed border-t border-surface-container/50 pt-4 mx-6">
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

      <ContactSection defaultPlan="โปรดเลือกแผนประกันที่สนใจ" />
    </main>
  );
}
