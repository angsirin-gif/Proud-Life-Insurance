import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Activity, 
  Heart, 
  CheckCircle2,
  Zap,
  Smile,
  LayoutGrid,
  Globe,
  Percent,
  Briefcase,
  AlertCircle,
  Target,
  PiggyBank,
  Info,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  FileText,
  Clock,
  Gem,
  Stethoscope,
  Baby,
  Dna,
  ShieldAlert
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function HealthUltra() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    { 
      name: "Smart", 
      benefit: "3 ล้านบาท", 
      roomRate: "1,500 บาท",
      opd: "ยังไม่ครอบคลุม OPD พบแพทย์ทั่วไป",
      highlight: "แผนเริ่มต้น เหมาะกับคนที่ต้องการมีประกันสุขภาพเหมาจ่ายไว้รองรับค่ารักษาผู้ป่วยในเป็นหลัก",
      color: "bg-blue-50 text-blue-600 border-blue-100" 
    },
    { 
      name: "Bronze", 
      benefit: "10 ล้านบาท", 
      roomRate: "3,000 บาท",
      opd: "ยังไม่ครอบคลุม OPD พบแพทย์ทั่วไป",
      highlight: "วงเงินสูงขึ้นจาก Smart เหมาะกับคนที่ต้องการเพิ่มวงเงิน IPD แต่ยังเน้นควบคุมงบ",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100" 
    },
    { 
      name: "Silver", 
      benefit: "15 ล้านบาท", 
      roomRate: "5,500 บาท",
      opd: "6,000 บาท/ปี",
      highlight: "เริ่มมี OPD เหมาะกับคนที่อยากได้ทั้งผู้ป่วยในและผู้ป่วยนอกในระดับเริ่มต้น",
      color: "bg-amber-50 text-amber-600 border-amber-100" 
    },
    { 
      name: "Gold", 
      benefit: "25 ล้านบาท", 
      roomRate: "9,000 บาท",
      opd: "12,000 บาท/ปี",
      highlight: "วงเงินและค่าห้องสูงขึ้น เหมาะกับคนที่ใช้โรงพยาบาลเอกชนระดับกลาง–สูง และอยากได้ OPD มากขึ้น",
      color: "bg-purple-50 text-purple-600 border-purple-100" 
    },
    { 
      name: "Diamond", 
      benefit: "70 ล้านบาท", 
      roomRate: "15,000 บาท",
      opd: "60,000 บาท/ปี",
      highlight: "แผนระดับสูง มีผลประโยชน์เสริม เช่น แพทย์ทางเลือก ทันตกรรม และการดูแลด้านจิตเวช ตามวงเงินที่กำหนด",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100" 
    },
    { 
      name: "Platinum", 
      benefit: "100 ล้านบาท", 
      roomRate: "21,000 บาท",
      opd: "เหมาจ่ายตามจริง ภายใต้วงเงินรวมของแผน",
      highlight: "แผนสูงสุด ครอบคลุมมากที่สุด มีผลประโยชน์เสริมหลายด้าน เช่น ค่าคลอดบุตร ตรวจสุขภาพ วัคซีน และการดูแลสายตา",
      color: "bg-rose-50 text-rose-600 border-rose-100" 
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#F5F7FA] via-white to-[#E4E7EB]/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest self-start">
                  <ShieldCheck size={14} />
                  Ultimate Health Protection
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                  iHealthy Ultra <br />
                  <span className="text-on-surface">มาตรฐานความอุ่นใจ เรื่องสุขภาพ</span>
                </h1>
                <p className="text-primary/60 font-bold tracking-tight uppercase text-xs">สัญญาเพิ่มเติมค่ารักษาพยาบาล ไอเฮลท์ตี้ อัลตร้า</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl font-medium">
                  ค่ารักษาพยาบาลเป็นเรื่องที่คาดเดาได้ยาก แต่เราสามารถวางแผนรับมือได้ค่ะ ประกันสุขภาพแบบเหมาจ่ายที่ช่วยดูแลค่ารักษาทั้ง IPD และ OPD ครอบคลุมสูงสุด 100 ล้านบาทต่อปี
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://line.me/ti/p/@proudlifeinsurance"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  เช็กเบี้ยประกันแผนนี้
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-secondary"
                >
                  <FileText size={20} />
                  เปรียบเทียบแผนประกัน
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[16px] border-white relative group mx-auto w-[85%]">
                <img 
                  src="/iHealthy.webp" 
                  alt="iHealthy Ultra Insurance" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -left-12 top-1/4 bg-white p-5 rounded-[2rem] shadow-xl border border-primary/5 hidden md:flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-600">
                  <Gem size={24} />
                </div>
                <div>
                  <p className="text-xs text-on-surface/50 font-bold uppercase tracking-widest">Maximum Limit</p>
                  <p className="text-sm font-black text-primary">สูงสุด 100 ล้านบาท/ปี</p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[2rem] shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600">
                    <Heart size={30} fill="currentColor" className="fill-blue-600/20" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 font-bold uppercase tracking-widest">Protection</p>
                    <p className="text-xl font-black text-primary">ดูแลถึงอายุ 99 ปี</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Key Highlights</h2>
            <h2 className="text-3xl font-extrabold text-primary leading-tight">
              จุดเด่นที่ช่วยให้<span className="text-secondary underline decoration-secondary/30 underline-offset-8">วางแผนสุขภาพ</span>ได้มั่นใจขึ้น
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "วงเงินความคุ้มครองสูง",
                desc: "เลือกได้ 6 ระดับ ตั้งแต่ 3 ล้าน ถึง 100 ล้านบาทต่อรอบปีกรมธรรม์ ตามแผนที่เลือก",
                icon: <ShieldCheck className="w-6 h-6" />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "ดูแลถึงอายุ 99 ปี",
                desc: "รับประกันตั้งแต่อายุ 6-80 ปี (ตามแผน) และต่ออายุได้ยาวถึงอายุ 98 ปี คุ้มครองถึงอายุ 99 ปี",
                icon: <Clock className="w-6 h-6" />,
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                title: "ดูแลทั้ง IPD และ OPD",
                desc: "คุ้มครองเหมาจ่ายตามจริงทั้งผู้ป่วยในและผู้ป่วยนอก (OPD เริ่มมีในแผน Silver ขึ้นไป)",
                icon: <Activity className="w-6 h-6" />,
                color: "bg-amber-50 text-amber-600"
              },
              {
                title: "ครอบคลุมการรักษาระดับสูง",
                desc: "ครอบคลุมค่าผ่าตัด ล้างไต เคมีบำบัด และการรักษามะเร็งแบบมุ่งเป้า (Targeted Therapy)",
                icon: <Dna className="w-6 h-6" />,
                color: "bg-purple-50 text-purple-600"
              },
              {
                title: "บริหารเบี้ยตามงบได้",
                desc: "เลือกความคุ้มครองแบบเหมาจ่าย หรือเลือกแผนที่มีความรับผิดส่วนแรก (Deductible) เพื่อลดเบี้ยได้",
                icon: <PiggyBank className="w-6 h-6" />,
                color: "bg-rose-50 text-rose-600"
              },
              {
                title: "คุ้มครองฉุกเฉินทั่วโลก",
                desc: "เจ็บป่วยหรือบาดเจ็บฉุกเฉินในต่างประเทศ คุ้มครองสูงสุด 90 วัน นับจากวันเดินทาง",
                icon: <Globe className="w-6 h-6" />,
                color: "bg-sky-50 text-sky-600"
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-8 bg-surface-container-lowest border border-surface-container rounded-[2rem] shadow-sm hover:border-primary transition-all group">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${feat.color} group-hover:scale-110 transition-transform`}>
                  {feat.icon}
                </div>
                <h5 className="text-xl font-black text-primary mb-3 leading-tight">{feat.title}</h5>
                <p className="text-sm font-medium text-on-surface/60 leading-relaxed font-sans">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Comparison Section */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Plan Comparison</h2>
            <h2 className="text-3xl font-extrabold text-primary leading-tight">เลือกแผนให้เหมาะกับงบและความต้องการ</h2>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto rounded-[2rem] border border-surface-container shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 font-black uppercase tracking-widest text-sm">แผน</th>
                  <th className="p-6 font-black uppercase tracking-widest text-sm text-center">วงเงินรวมสูงสุดต่อปี</th>
                  <th className="p-6 font-black uppercase tracking-widest text-sm text-center">ค่าห้อง/อาหาร ต่อวัน</th>
                  <th className="p-6 font-black uppercase tracking-widest text-sm text-center">OPD พบแพทย์ทั่วไป</th>
                  <th className="p-6 font-black uppercase tracking-widest text-sm">จุดเด่นที่เห็นได้ชัด</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-sans">
                {plans.map((plan, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors group">
                    <td className="p-6">
                      <div className={`inline-block px-4 py-1.5 rounded-full font-black text-sm whitespace-nowrap ${plan.color.split(' ').slice(1).join(' ')} ${plan.color.split(' ')[0]}`}>
                        {plan.name}
                      </div>
                    </td>
                    <td className="p-6 text-center font-black text-primary text-lg whitespace-nowrap">{plan.benefit}</td>
                    <td className="p-6 text-center font-bold text-on-surface/70 whitespace-nowrap">{plan.roomRate}</td>
                    <td className="p-6 text-center font-bold text-on-surface/70 text-sm">{plan.opd}</td>
                    <td className="p-6 text-xs font-medium text-on-surface/50 leading-relaxed max-w-xs">{plan.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-6">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-[2rem] border-2 ${plan.color} bg-white shadow-sm space-y-4`}
              >
                <div className="flex justify-between items-center border-b border-surface-container pb-4">
                  <div className="font-black text-2xl">{plan.name}</div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest leading-none">วงเงินสูงสุด</div>
                    <div className="text-xl font-black">{plan.benefit}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">ค่าห้อง/อาหาร (ต่อวัน)</div>
                    <div className="text-sm font-bold text-primary">{plan.roomRate}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">OPD พบแพทย์ทั่วไป</div>
                    <div className="text-sm font-bold text-primary leading-tight">{plan.opd}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-surface-container">
                  <p className="text-[11px] font-medium text-on-surface/60 font-sans leading-relaxed">{plan.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[11px] text-on-surface/40 mt-8 font-medium max-w-2xl mx-auto">
            * ข้อมูลวงเงินข้างต้นเป็นข้อมูลโดยสรุปจากหน้าผลิตภัณฑ์ทางการของกรุงไทย-แอกซ่า <br /> ควรตรวจสอบตารางผลประโยชน์และเอกสารเสนอขายล่าสุดก่อนตัดสินใจค่ะ
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Ideal For</h2>
                <h2 className="text-3xl font-extrabold text-primary leading-tight">iHealthy Ultra <br />เหมาะกับใคร?</h2>
              </div>
              
              <div className="space-y-6">
              {[
                { title: "คนที่ต้องการวงเงินสุขภาพสูง", desc: "กังวลเรื่องค่ารักษาก้อนใหญ่ รองรับค่ารักษาที่อาจเพิ่มขึ้นในอนาคต", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "พนักงานประจำ / ข้าราชการ", desc: "ที่มีสวัสดิการเดิมอยู่แล้ว แต่อยากเพิ่มความคุ้มครองในส่วนที่อาจไม่เพียงพอ", icon: <Briefcase className="w-5 h-5" /> },
                { title: "เจ้าของธุรกิจ / ฟรีแลนซ์", desc: "กลุ่มที่ไม่มีสวัสดิการบริษัท ช่วยลดความกังวลเรื่องค่าใช้จ่ายเมื่อเจ็บป่วย", icon: <Target className="w-5 h-5" /> },
                { title: "คนที่ต้องการดูแลสุขภาพระยะยาว", desc: "ต่ออายุได้ยาวถึงอายุ 98 ปี วางแผนสุขภาพครอบคลุมถึงวัยเกษียณ", icon: <Heart className="w-5 h-5" /> },
                { title: "คนที่ต้องการ IPD และ OPD ครบ", desc: "ต้องการความคุ้มครองผู้ป่วยนอกด้วย (แนะนำแผน Silver ขึ้นไป)", icon: <Stethoscope className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-8 rounded-[2rem] border border-surface-container bg-surface-container-lowest hover:border-primary transition-all shadow-sm hover:shadow-xl group">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-primary leading-tight text-lg">{item.title}</h4>
                    <p className="text-sm text-on-surface/50 font-bold font-sans mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[16px] border-white relative z-10 mx-auto w-[85%]">
                <img 
                  src="/iHealthy.webp" 
                  alt="Healthy Lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Summary Table Section */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] shadow-xl border border-surface-container overflow-hidden"
          >
            <div className="bg-primary p-8 text-white text-center">
              <h3 className="text-2xl font-black text-white">รายละเอียดผลิตภัณฑ์โดยสรุป</h3>
              <p className="text-white/60 text-xs font-medium uppercase tracking-widest mt-2 font-mono">Product Summary & Specifications</p>
            </div>
            <div className="divide-y divide-surface-container">
              {[
                { label: "ประเภท", value: "สัญญาเพิ่มเติมค่ารักษาพยาบาล" },
                { label: "ลักษณะเด่น", value: "ประกันสุขภาพแบบเหมาจ่าย" },
                { label: "จำนวนแผน", value: "6 แผน (Smart, Bronze, Silver, Gold, Diamond, Platinum)" },
                { label: "วงเงินคุ้มครอง", value: "3–100 ล้านบาทต่อรอบปีกรมธรรม์" },
                { label: "อายุรับประกันภัย", value: "6–80 ปี (สำหรับ Smart/Bronze) | 11–80 ปี (สำหรับแผนอื่นๆ)" },
                { label: "ระยะเวลาคุ้มครอง", value: "ต่ออายุได้ถึง 98 ปี คุ้มครองถึง 99 ปี" },
                { label: "อาณาเขต", value: "เฉพาะประเทศไทย (ยกเว้นฉุกเฉินในต่างประเทศตามเงื่อนไข)" },
                { label: "การพิจารณา", value: "Full Underwriting (จำกัด 1 สัญญาเหมาจ่ายต่อท่าน)" }
              ].map((row, i) => (
                <div key={i} className="grid sm:grid-cols-3 p-6 items-center gap-2 group hover:bg-surface-container-lowest transition-colors">
                  <div className="text-xs font-black text-primary/40 uppercase tracking-widest font-mono">{row.label}</div>
                  <div className="sm:col-span-2 font-bold text-primary">{row.value}</div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-surface-container-lowest border-t border-surface-container text-center text-[11px] text-on-surface/40 font-medium font-sans">
              * รายละเอียดนี้เป็นข้อมูลสรุปเบื้องต้น และอาจมีเงื่อนไขเพิ่มเติมตามเอกสารกรมธรรม์
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest">
                <Info size={14} /> Knowledge Center
              </div>
            <h2 className="text-3xl font-extrabold text-primary leading-tight">ก่อนเลือก iHealthy Ultra ควรเช็กอะไรบ้าง?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "เลือกแผนตามโรงพยาบาล", desc: "ควรดูค่าห้องและค่ารักษาเฉลี่ยของโรงพยาบาลที่ใช้บ่อย เพื่อเลือกแผนที่พอดีจริง" },
              { title: "เช็กความต้องการ OPD", desc: "หากต้องการรักษาผู้ป่วยนอกโดยไม่ต้องนอนโรงพยาบาล ควรเลือกแผน Silver ขึ้นไป" },
              { title: "วางแผนเบี้ยระยะยาว", desc: "เบี้ยจะปรับเพิ่มตามอายุ ควรวางแผนงบประมาณทั้งปีแรกและปีต่ออายุด้วย" },
              { title: "ระยะเวลารอคอย", desc: "ทั่วไป 30 วัน และบางกลุ่มโรค 120 วัน หรือ 12 เดือนสำหรับบางผลประโยชน์" },
              { title: "เข้าใจข้อยกเว้น", desc: "ศึกษาเงื่อนไข โรคทางพันธุกรรม โรคติดต่อทางเพศสัมพันธ์ หรือเงื่อนไขที่ระบุในกรมธรรม์" },
              { title: "ปรึกษาตัวแทนที่วางใจ", desc: "เพื่อให้ได้ข้อมูลที่ชัดเจนและครบถ้วนที่สุดก่อนตัดสินใจลงมือเซ็นสัญญา" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-surface-container bg-surface-container-lowest hover:border-secondary transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-black text-6xl text-on-surface/5 -mt-4 -mr-2">0{i+1}</div>
                <h4 className="text-lg font-black text-primary mb-3 relative z-10">{item.title}</h4>
                <p className="text-sm font-medium text-on-surface/50 font-sans relative z-10 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Invitation Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h4 className="text-4xl font-extrabold leading-[1.05] tracking-tighter italic">
                  อยากรู้ว่า iHealthy Ultra <br />
                  <span className="text-emerald-400">แผนไหนเหมาะกับคุณ?</span>
                </h4>
                <p className="text-white/80 font-medium leading-relaxed text-lg">
                  พี่ฝ้ายช่วยดูเบื้องต้นให้ได้ค่ะ โดยพิจารณาจากอายุ งบประมาณ โรงพยาบาลที่ใช้ประจำ สวัสดิการเดิม และความต้องการเรื่อง IPD / OPD เพื่อช่วยเลือกแผนที่เหมาะกับความจำเป็นจริง ไม่เกินงบ และไม่ซ้ำซ้อนกับสิทธิที่มีอยู่
                </p>
                <div className="flex items-center gap-3 py-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
                    <Smile size={24} />
                  </div>
                  <p className="font-bold text-emerald-400 tracking-wide text-sm">
                    ปรึกษาแบบเข้าใจง่าย ไม่กดดัน และช่วยวางแผนตามความต้องการของคุณ
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a 
                  href="https://line.me/ti/p/@proudlifeinsurance"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary !bg-white inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  เช็กเบี้ยประกันแผนนี้
                </a>
                <a 
                  href="https://line.me/ti/p/@proudlifeinsurance"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary !bg-transparent !text-white !border-white/20 inline-flex items-center justify-center gap-2"
                >
                  <Zap size={20} />
                  เช็กเบี้ยประกันแผนนี้
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary">คำถามที่พบบ่อย (FAQ)</h2>
            <p className="text-on-surface/50 font-bold mt-2">ถาม-ตอบ ทุกข้อสงสัยเกี่ยวกับแผน iHealthy Ultra ค่ะ</p>
          </div>
          <div className="space-y-4">
            {[
              { 
                q: "iHealthy Ultra เป็นประกันสุขภาพแบบไหน?", 
                a: "เป็นสัญญาเพิ่มเติมค่ารักษาพยาบาลแบบเหมาจ่าย ที่มีวงเงินให้เลือกหลายระดับ ตั้งแต่ 3–100 ล้านบาทต่อรอบปีกรมธรรม์ตามแผนที่เลือกค่ะ" 
              },
              { 
                q: "มีทั้งหมดกี่แผน?", 
                a: "มีทั้งหมด 6 แผน ได้แก่ Smart, Bronze, Silver, Gold, Diamond และ Platinum" 
              },
              { 
                q: "สมัครได้ตั้งแต่อายุเท่าไร?", 
                a: "แผน Smart และ Bronze รับประกันภัยอายุ 6–80 ปี ส่วนแผน Silver, Gold, Diamond และ Platinum รับประกันภัยอายุ 11–80 ปี ตามเงื่อนไขบริษัท" 
              },
              { 
                q: "คุ้มครอง OPD ไหม?", 
                a: "มีความคุ้มครองผู้ป่วยนอก (OPD) ในแผน Silver, Gold, Diamond และ Platinum ค่ะ" 
              },
              { 
                q: "ไปต่างประเทศแล้วเจ็บป่วยฉุกเฉินคุ้มครองไหม?", 
                a: "คุ้มครองกรณีบาดเจ็บหรือเจ็บป่วยฉุกเฉินในต่างประเทศ สูงสุดไม่เกิน 90 วันนับตั้งแต่วันเดินทาง (ตามเงื่อนไขกรมธรรม์)" 
              },
              { 
                q: "มีส่วนลดเบี้ยไหม?", 
                a: "หากจ่ายเบี้ยและไม่มีการเคลมต่อเนื่อง 3 รอบปี อาจได้รับส่วนลดเบี้ยประกันภัย 10% ในปีต่ออายุถัดไป ตามเงื่อนไขบริษัท" 
              },
              { 
                q: "เบี้ยประกันสุขภาพลดหย่อนภาษีได้ไหม?", 
                a: "เบี้ยสุขภาพสามารถนำไปใช้สิทธิลดหย่อนภาษีได้ตามเงื่อนไขของกรมสรรพากรค่ะ" 
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-surface-container-lowest rounded-[1rem] border border-surface-container overflow-hidden transition-all hover:border-primary/30"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors group"
                >
                  <span className={`font-black tracking-tight transition-colors ${openFaq === i ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
                  <ChevronDown className={`text-primary transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 text-on-surface/60 text-base font-bold leading-relaxed border-t border-surface-container/50 pt-4 mx-6">
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

      <ContactSection defaultPlan="สนใจแผน iHealthy Ultra (เหมาจ่าย 3 - 100 ล้านบาท)" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="iHealthy Ultra" 
      />
    </div>
  );
}

