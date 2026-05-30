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
  Activity,
  Stethoscope,
  Umbrella,
  Wallet,
  Coins,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../context/ConsultationContext';

export default function Agency() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { openConsultation } = useConsultation();

  const categories = [
    { 
      title: 'ประกันชีวิตตลอดชีพ / เน้นคุ้มครองชีวิต', 
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

            <div className="pt-8 flex flex-wrap gap-8 justify-center">
              {[
                { label: 'โทรปรึกษา', value: '089-696-5397', icon: <Phone size={18} />, color: 'text-primary bg-primary/10' },
                { label: 'Line ID', value: '@proudlifeinsurance', icon: <MessageCircle size={18} />, color: 'text-secondary bg-secondary/10' },
                { label: 'Facebook', value: 'Proud Life Insurance', icon: <Facebook size={18} />, color: 'text-primary bg-primary/10' }
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
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[24px] border-white bg-primary/5">
              <img 
                src="/P_Fai_8.webp" 
                alt="พี่ฝ้าย ที่ปรึกษาประกันภัย" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[3rem] shadow-xl border border-surface-container hidden sm:block">
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
      <section className="py-24 bg-surface-container-low">
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
                className="bg-white p-8 rounded-[3rem] shadow-sm border border-surface-container hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className={`w-16 h-16 rounded-[3rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${cat.color}`}>
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">ผลิตภัณฑ์ยอดนิยม</h2>
              <p className="text-on-surface-variant">แผนประกันที่ลูกค้าส่วนใหญ่ไว้วางใจเลือกใช้</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              ดูแผนทั้งหมด <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-[3rem] border border-surface-container bg-white shadow-sm hover:shadow-md transition-all group"
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

      {/* Testimonials */}
      <section className="py-24 bg-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">ความประทับใจจากลูกค้าตัวจริง</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm space-y-8 relative"
              >
                <div className="text-[#B3E5FC] font-serif text-6xl absolute top-6 left-6 opacity-80 leading-none select-none">
                  “
                </div>
                <p className="text-on-surface leading-relaxed italic relative z-10 pt-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#E1F5FE] shrink-0" />
                  <div>
                    <p className="font-bold text-on-surface">{t.author}</p>
                    <p className="text-xs text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-white">
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
                className="group bg-surface-container-lowest rounded-[3rem] overflow-hidden border border-surface-container hover:shadow-xl transition-all"
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">คำถามที่พบบ่อย (FAQ)</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F8F9FA] rounded-[3rem] overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-black/5 transition-colors"
                >
                  <span className="font-bold text-on-surface text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`text-on-surface-variant transition-transform shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 text-on-surface-variant text-sm md:text-base leading-relaxed">
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

      {/* Contact Section */}
      <section className="py-24 bg-surface border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#006064] leading-tight">
                  ปรึกษาแผนประกันที่ใช่ <br />
                  ให้พี่ฝ้ายดูแลคุณ
                </h2>
                <p className="text-[#006064] text-lg font-medium opacity-80 max-w-md">
                  ทิ้งข้อมูลไว้ให้พี่ฝ้ายติดต่อกลับ หรือทักไลน์เพื่อสอบถามข้อมูลเบื้องต้นได้ทันทีค่ะ
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: 'โทรศัพท์', value: '089-696-5397', icon: <Phone size={24} />, color: 'bg-white text-[#006064]' },
                  { label: 'LINE OFFICIAL', value: '@proudlifeinsurance', icon: <MessageCircle size={24} />, color: 'bg-white text-[#2E7D32]' },
                  { label: 'FACEBOOK', value: 'Proud Life Insurance', icon: <Facebook size={24} />, color: 'bg-white text-[#0277BD]' }
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-[3rem] flex items-center justify-center shadow-sm ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#006064] uppercase tracking-widest opacity-60">{item.label}</p>
                      <p className="text-xl font-bold text-[#006064]">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 text-[#006064] opacity-80 pt-4">
                  <MapPin size={20} />
                  <span className="font-medium">สาขา กรุงเทพฯ และปริมณฑล (ดูแลทั่วไทย)</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-white"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-[#006064]">ชื่อ-นามสกุล</label>
                    <input type="text" className="w-full bg-[#F5F5F5] border-none rounded-full px-6 py-4 focus:ring-2 ring-[#006064]/20 outline-none transition-all" placeholder="คุณสมชาย ใจดี" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-[#006064]">เบอร์โทรศัพท์</label>
                    <input type="tel" className="w-full bg-[#F5F5F5] border-none rounded-full px-6 py-4 focus:ring-2 ring-[#006064]/20 outline-none transition-all" placeholder="08x-xxx-xxxx" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-[#006064]">แผนประกันที่สนใจ</label>
                  <div className="relative">
                    <select className="w-full bg-[#F5F5F5] border-none rounded-full px-6 py-4 focus:ring-2 ring-[#006064]/20 outline-none transition-all appearance-none font-medium text-on-surface" defaultValue="โปรดเลือกแผนประกันที่สนใจ">
                      <option>โปรดเลือกแผนประกันที่สนใจ</option>
                      <option>ประกันสุขภาพเหมาจ่าย</option>
                      <option>ประกันชีวิตตลอดชีพ</option>
                      <option>ประกันโรคร้ายแรง</option>
                      <option>ประกันสะสมทรัพย์</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#006064] pointer-events-none" size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-[#006064]">รายละเอียดเพิ่มเติม (ถ้ามี)</label>
                  <textarea className="w-full bg-[#F5F5F5] border-none rounded-full px-6 py-4 focus:ring-2 ring-[#006064]/20 outline-none transition-all h-32 resize-none" placeholder="สอบถามข้อมูลเพิ่มเติม..." />
                </div>
                <button className="w-full bg-[#006064] text-white py-5 rounded-full font-bold shadow-xl shadow-[#006064]/20 hover:bg-[#004D40] transition-all flex items-center justify-center gap-2">
                  ส่งข้อมูลให้พี่ฝ้ายติดต่อกลับ
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
