import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Activity, 
  Heart, 
  CheckCircle2,
  Zap,
  Smile,
  Baby,
  LayoutGrid,
  PlusCircle,
  Globe,
  Percent,
  Briefcase,
  AlertCircle,
  PiggyBank,
  Info,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  FileText,
  Clock
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function MEAExtra() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#FFF3E0] via-white to-[#FFE0B2]/20 overflow-hidden">
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-600 text-xs font-black uppercase tracking-widest self-start">
                  <Baby size={14} />
                  Preferred Family Protection
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                  MEA Extra <br />
                  <span className="text-on-surface">คุ้มค่าทุกวัย เบาใจค่ารักษา</span>
                </h1>
                <p className="text-primary/60 font-bold tracking-tight">สัญญาเพิ่มเติมค่ารักษาพยาบาล เอ็กตร้า</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-xl font-medium">
                  เริ่มวางแผนรับมือค่าใช้จ่ายด้านสุขภาพให้ตัวเองและครอบครัว ด้วยสัญญาเพิ่มเติมค่ารักษาพยาบาลที่ช่วยดูแลค่ารักษาพยาบาลและค่าผ่าตัดผู้ป่วยใน ให้คุณอุ่นใจมากขึ้นเมื่อต้องเข้ารับการรักษาในโรงพยาบาล
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://line.me/ti/p/@proudlifeinsurance"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-primary text-white rounded-full font-black shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  เช็กเบี้ยประกันแผนนี้
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-black hover:bg-primary/5 transition-colors flex items-center gap-2"
                >
                  <FileText size={20} />
                  ขอข้อมูลแผนความคุ้มครอง
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
                  src="/MEAExtra.webp" 
                  alt="Family Insurance" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -left-12 top-1/4 bg-white p-5 rounded-2xl shadow-xl border border-primary/5 hidden md:flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-on-surface/50 font-bold uppercase tracking-widest">Coverage</p>
                  <p className="text-sm font-black text-primary">คุ้มครองตามจ่ายจริง</p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-primary/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-600">
                    <Heart size={30} fill="currentColor" className="fill-amber-600/20" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface/50 font-bold uppercase tracking-widest">Family Care</p>
                    <p className="text-xl font-black text-primary">รับตั้งแต่อายุ 1 เดือน</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections - Info Sheet Style */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-primary leading-tight"
            >
              เจาะลึก <span className="text-secondary underline decoration-secondary/30 underline-offset-8">MEA Extra</span>
            </motion.h2>
            <p className="text-on-surface/60 max-w-xl mx-auto font-medium leading-relaxed">
              MEA Extra มีแผนความคุ้มครองให้เลือกตามความต้องการ พร้อมค่าห้องตั้งแต่ 1,200 บาท สูงสุด 6,200 บาทต่อวัน และคุ้มครองค่ารักษาพยาบาลตามที่จ่ายจริง
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-surface-container-high"
            >
              <div className="bg-gradient-to-r from-primary via-primary/95 to-primary p-8 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-12 h-1 bg-secondary rounded-full mb-2"></div>
                   <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">รายละเอียดความคุ้มครองเบื้องต้น</h3>
                   <p className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">MEA Extra Plan Specifications</p>
                </div>
              </div>

              <div className="p-6 md:p-12 space-y-20 bg-surface-container-lowest">
                
                {/* Highlights Table In Grid */}
                <div className="space-y-8">
                   <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-sm shadow-sm">01</span>
                    <h4 className="text-xl font-extrabold text-primary">สรุปข้อมูลแผนประกัน</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { label: "ประเภท", value: "สัญญาเพิ่มเติมค่ารักษาพยาบาล", icon: <FileText className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
                      { label: "จำนวนแผน", value: "5 แผนความคุ้มครอง", icon: <LayoutGrid className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
                      { label: "ค่าห้องพัก", value: "1,200 - 6,200 บาท/วัน", icon: <PiggyBank className="w-5 h-5" />, color: "bg-amber-50 text-amber-600" },
                      { label: "อายุรับประกัน", value: "1 เดือน - 70 ปี", icon: <Baby className="w-5 h-5" />, color: "bg-purple-50 text-purple-600" },
                      { label: "ระยะเวลาคุ้มครอง", value: "ถึงอายุ 90 ปี", icon: <Clock className="w-5 h-5" />, color: "bg-rose-50 text-rose-600" },
                      { label: "อาณาเขต", value: "ไทย + ฉุกเฉินต่างประเทศ", icon: <Globe className="w-5 h-5" />, color: "bg-sky-50 text-sky-600" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-surface-container shadow-sm hover:shadow-md transition-shadow">
                        <div className={`p-4 rounded-xl ${item.color} mb-4 inline-block`}>{item.icon}</div>
                        <p className="text-xs font-black text-primary/60 uppercase mb-1 tracking-widest">{item.label}</p>
                        <p className="text-lg font-bold text-on-surface leading-tight">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-sm shadow-sm">02</span>
                    <h4 className="text-xl font-extrabold text-primary">จุดเด่นของ MEA Extra</h4>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { 
                        title: "เลือกแผนได้ตามงบประมาณ", 
                        desc: "มีระดับค่าห้องให้เลือกหลากหลาย สอดคล้องกับโรงพยาบาลที่ต้องการใช้บริการ", 
                        icon: <CheckCircle2 className="w-6 h-6" />, 
                        color: "bg-blue-50 text-blue-600" 
                      },
                      { 
                        title: "ดูแลค่ารักษาผู้ป่วยใน", 
                        desc: "คุ้มครองตามที่จ่ายจริง ภายใต้วงเงินและเงื่อนไขที่กำหนดในแต่ละแผน", 
                        icon: <Activity className="w-6 h-6" />, 
                        color: "bg-emerald-50 text-emerald-600" 
                      },
                      { 
                        title: "คุ้มครองส่วนเกินสิทธิ", 
                        desc: "มอบความคุ้มครองส่วนเกินสิทธิ สูงสุดอีก 70% ของค่ารักษาพยาบาลและผ่าตัด", 
                        icon: <PlusCircle className="w-6 h-6" />, 
                        color: "bg-amber-50 text-amber-600" 
                      },
                      { 
                        title: "ฉุกเฉินในต่างประเทศ", 
                        desc: "คุ้มครองค่ารักษาพยาบาลกรณีฉุกเฉินในต่างประเทศ สูงสุด 90 วัน นับตั้งแต่วันเดินทาง", 
                        icon: <Globe className="w-6 h-6" />, 
                        color: "bg-purple-50 text-purple-600" 
                      },
                      { 
                        title: "ลดหย่อนภาษีได้", 
                        desc: "สามารถนำไปหักลดหย่อนภาษีเงินได้บุคคลธรรมดาได้ตามเกณฑ์กรมสรรพากร", 
                        icon: <Percent className="w-6 h-6" />, 
                        color: "bg-rose-50 text-rose-600" 
                      },
                      { 
                        title: "ส่วนลดเบี้ยประวัติคุ้มครอง", 
                        desc: "อาจได้รับส่วนลดเบี้ยประกันภัย 10% เมื่อไม่มีการเคลมติดต่อกัน 3 ปี", 
                        icon: <Zap className="w-6 h-6" />, 
                        color: "bg-sky-50 text-sky-600" 
                      }
                    ].map((feat, idx) => (
                      <div key={idx} className="p-8 bg-white border border-surface-container rounded-2xl shadow-sm hover:border-primary transition-colors group">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feat.color} group-hover:scale-110 transition-transform`}>
                          {feat.icon}
                        </div>
                        <h5 className="text-xl font-bold text-primary mb-3 leading-tight">{feat.title}</h5>
                        <p className="text-sm font-medium text-on-surface/60 leading-relaxed font-sans">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Disclaimer */}
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                   <p className="text-xs text-center text-primary/70 leading-relaxed max-w-2xl mx-auto font-medium italic">
                    ข้อมูลนี้เป็นรายละเอียดโดยสรุปจากหน้าผลิตภัณฑ์ทางการของกรุงไทย-แอกซ่า ควรตรวจสอบเอกสารเสนอขาย ตารางผลประโยชน์ และเงื่อนไขล่าสุดก่อนตัดสินใจทุกครั้งนะคะ
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Redesigned */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Target Audience</h2>
            <h2 className="text-3xl font-extrabold text-primary">MEA Extra เหมาะกับใคร?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             {[
               { 
                 title: "พนักงานประจำ / ข้าราชการ", 
                 desc: "หากคุณมีสวัสดิการเดิมอยู่แล้ว MEA Extra จะช่วยเติมเต็มค่ารักษาพยาบาลที่อาจเกินจากสิทธิเดิม ให้คุณอุ่นใจมากขึ้นเมื่อต้องนอนโรงพยาบาล", 
                 icon: <Briefcase className="w-10 h-10" /> 
               },
               { 
                 title: "คุณพ่อคุณแม่แผนกจัดการสุขภาพ", 
                 desc: "แผนประกันที่ตอบโจทย์ลูกน้อย เริ่มต้นตั้งแต่อายุ 1 เดือน ช่วยแบ่งเบาภาระค่าใช้จ่ายยามเจ้าตัวเล็กเจ็บป่วย", 
                 icon: <Baby className="w-10 h-10" /> 
               },
               { 
                 title: "ผู้ที่กังวลเรื่องค่ารักษาพยาบาล", 
                 desc: "เหมาะสำหรับคนที่ต้องการตัวช่วยดูแลค่าใช้จ่ายเมื่อต้องนอนโรงพยาบาลหรือผ่าตัด ในระดับโรงพยาบาลที่คุณเลือกได้เอง", 
                 icon: <AlertCircle className="w-10 h-10" /> 
               },
               { 
                 title: "กลุ่มที่เน้นความคุ้มค่าและยืดหยุ่น", 
                 desc: "เพราะมีให้เลือกถึง 5 แผนความคุ้มครอง จึงสามารถปรับให้เข้ากับงบประมาณและความต้องการของแต่ละช่วงวัยได้", 
                 icon: <PiggyBank className="w-10 h-10" /> 
               }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -5 }}
                 className="flex gap-6 p-8 bg-white rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all"
               >
                 <div className="w-16 h-16 shrink-0 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                   {item.icon}
                 </div>
                 <div className="space-y-2">
                   <h4 className="text-xl font-black text-primary leading-tight">{item.title}</h4>
                   <p className="text-sm text-on-surface/60 font-medium leading-relaxed font-sans">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Checklist / Things to Know */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[16px] border-white relative z-10 mx-auto w-[85%]">
                   <img 
                    src="/MEAExtra.webp" 
                    alt="Health Check" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
             </div>
             <div className="lg:w-1/2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">Prep Work</h2>
                  <h2 className="text-3xl font-extrabold text-primary leading-tight">ก่อนเลือก MEA Extra <br/>ควรเช็กอะไรบ้าง?</h2>
               </div>

               <div className="space-y-2">
                 {[
                   { title: "แผนค่าห้องที่สอดคล้องกับโรงพยาบาล", desc: "ควรดูค่าห้องเฉลี่ยของโรงพยาบาลที่คุณใช้บริการประจำ" },
                   { title: "งบประมาณเบี้ยประกันภัย", desc: "วางแผนงบระยะยาวเนื่องจากเบี้ยอาจปรับตามอายุ" },
                   { title: "สวัสดิการเดิมเพื่อเติมเต็มส่วนขาด", desc: "ดูว่า MEA Extra จะช่วยเติมเต็มส่วนไหนที่สิทธิเดิมยังไม่ครอบคลุม" },
                   { title: "ระยะเวลารอคอย (Waiting Period)", desc: "ทั่วไป 30 วัน และโรคเฉพาะทางบางเครื่อง 120 วัน" },
                   { title: "ข้อยกเว้นและเงื่อนไขกรมธรรม์", desc: "ทำความเข้าใจเงื่อนไขและข้อยกเว้นทั่วไปเพื่อให้เข้าใจสิทธิที่แท้จริง" }
                 ].map((item, i) => (
                   <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors">
                     <span className="w-8 h-8 shrink-0 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-black text-xs">0{i+1}</span>
                     <div className="space-y-1">
                        <p className="font-bold text-primary leading-tight">{item.title}</p>
                        <p className="text-sm text-on-surface/50 font-medium font-sans">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Consultation Invitation Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h4 className="text-4xl font-extrabold leading-[1.05] tracking-tighter italic whitespace-nowrap">
                  อยากเริ่มวางแผน MEA Extra <br />
                  <span className="text-emerald-400">ให้เหมาะกับตัวเอง?</span>
                </h4>
                <p className="text-white/80 font-medium leading-relaxed text-lg">
                  พี่ฝ้ายช่วยดูเบื้องต้นให้ได้ค่ะ ว่าควรเริ่มจากแผนค่าห้องระดับไหน และควรพิจารณาอะไรเพิ่มเติม โดยดูจากอายุ งบประมาณ สวัสดิการเดิม โรงพยาบาลที่ใช้ประจำ และเป้าหมายความคุ้มครองของคุณ
                </p>
                <div className="flex items-center gap-3 py-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
                    <Smile size={24} />
                  </div>
                  <p className="font-bold text-emerald-400 tracking-wide text-sm">
                    ปรึกษาแบบไม่กดดัน เข้าใจง่าย และช่วยเลือกตามความจำเป็นจริง
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-primary rounded-2xl font-black shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  ทักแชทปรึกษาพี่ฝ้าย
                </button>
                <a 
                  href="https://line.me/ti/p/@proudlifeinsurance"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-black hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                >
                  <Activity size={20} />
                  เช็กเบี้ยประกันแผนนี้
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest">
                <HelpCircle size={14} /> Knowledge Base
              </div>
            <h2 className="text-3xl font-extrabold text-primary">คำถามที่พบบ่อย (FAQ)</h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "MEA Extra เป็นประกันสุขภาพแบบไหน?", 
                a: "เป็นสัญญาเพิ่มเติมค่ารักษาพยาบาล เน้นดูแลค่ารักษาพยาบาลและค่าผ่าตัดกรณีผู้ป่วยใน (IPD) โดยต้องเป็นไปตามเงื่อนไขและวงเงินของแต่ละแผน" 
              },
              { 
                q: "เด็กสามารถสมัครได้ไหม?", 
                a: "แผน 1,200 / 2,200 / 3,200 รับตั้งแต่อายุ 1 เดือน ส่วนแผน 4,200 / 6,200 รับตั้งแต่อายุ 11 ปีขึ้นไปค่ะ" 
              },
              { 
                q: "คุ้มครองถึงอายุเท่าไร?", 
                a: "สามารถต่ออายุได้จนถึงอายุ 89 ปี และมีความคุ้มครองต่อเนื่องจนถึงอายุ 90 ปี" 
              },
              { 
                q: "ถ้าเจ็บป่วยต่างประเทศคุ้มครองไหม?", 
                a: "มีความคุ้มครองกรณีฉุกเฉินในต่างประเทศสูงสุด 90 วัน นับตั้งแต่วันเดินทาง ตามเงื่อนไขที่บริษัทกำหนด" 
              },
              { 
                q: "เบี้ยประกันนำไปลดหย่อนภาษีได้ไหม?", 
                a: "เบี้ยประกันภัยสุขภาพสามารถใช้สิทธิหักลดหย่อนภาษีเงินได้บุคคลธรรมดาได้ ตามเกณฑ์ของกรมสรรพากรค่ะ" 
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="border border-primary/5 rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors group"
                >
                  <span className="font-black text-primary pr-8 leading-tight">{faq.q}</span>
                  <div className={`shrink-0 text-secondary transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: openFaq === i ? 'auto' : 0,
                    opacity: openFaq === i ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-on-surface/70 font-medium leading-relaxed font-sans bg-white border-t border-primary/5">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผน MEA Extra (ค่าห้องตั้งแต่ 1,200 - 6,200 บาท)" />
      
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="MEA Extra" 
      />
    </div>
  );
}
