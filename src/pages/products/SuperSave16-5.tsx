import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Coins, 
  Target,
  Clock,
  Heart,
  TrendingUp,
  Info
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';
import { useState } from 'react';

export default function LifeSuperSave14_5() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unifiedFeatures = [
    {
      title: "ออมสั้นเพียง 5 ปี คุ้มครองยาว 14 ปี",
      desc: "บริหารเงินได้คล่องตัว ชำระเบี้ยสั้นเพียง 5 ปี แต่ได้รับความคุ้มครองชีวิตสูงสุดถึง 525%* ของจำนวนเงินเอาประกันภัย และได้รับความคุ้มครองยาวนานถึง 14 ปี",
      icon: <Clock className="w-12 h-12 text-primary" />
    },
    {
      title: "ผลประโยชน์เงินคืนสูงสุด 608%**",
      desc: "รับเงินคืนระหว่างทางตั้งแตสิ้นปีแรก สูงสุดปีละ 10%** และรับเงินก้อนเมื่อครบสัญญาอีก 548%** รวมรับผลประโยชน์สูงสุด 608%**",
      icon: <Coins className="w-12 h-12 text-primary" />
    },
    {
      title: "สมัครง่าย ไม่ต้องตรวจสุขภาพ",
      desc: "ไม่ต้องตอบคำถามสุขภาพ และไม่ต้องตรวจสุขภาพ สมัครได้ตั้งแต่อายุ 1 เดือน - 70 ปี มั่นใจได้รับความคุ้มครองแน่นอน",
      icon: <CheckCircle2 className="w-12 h-12 text-primary" />
    },
    {
      title: "สิทธิประโยชน์ทางภาษีสูงสุด",
      desc: "เบี้ยประกันภัยสามารถนำไปใช้สิทธิหักลดหย่อนภาษีเงินได้บุคคลธรรมดาได้สูงสุด 100,000 บาทต่อปี ตามเงื่อนไขของกรมสรรพากร",
      icon: <ShieldCheck className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center justify-center md:justify-start gap-2 text-xs font-medium text-on-surface/50 mb-6">
              <a href="/" className="hover:text-primary">หน้าหลัก</a>
              <span>/</span>
              <a href="/savings-insurance" className="hover:text-primary">ประกันสะสมทรัพย์</a>
              <span>/</span>
              <span className="text-primary uppercase tracking-wider">Life Super Save 14/5</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              Life Super Save 14/5<br/>
              <span className="text-on-surface">วางแผนการเงินอย่างง่าย ให้คุณใช้ชีวิตที่ดีกว่าเดิม</span>
            </h1>
            <p className="text-lg text-on-surface/70 mb-8 leading-relaxed">
              แบบประกันสะสมทรัพย์ที่ออกแบบมาให้คุณออมสั้น คุ้มครองยาว 
              รับเงินคืนสม่ำเสมอตั้งแตปีกรมธรรม์แรก พร้อมความคุ้มครองชีวิตที่มั่นคง
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="https://line.me/ti/p/@proudlifeinsurance"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all inline-block text-center"
              >
                เช็กเบี้ยประกันแผนนี้
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <img 
              src="/LifeSuperSave.webp" 
              alt="Life Super Save 14/5" 
              className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-[90%] h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-surface-container hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-on-surface/50 font-bold uppercase">ผลประโยชน์รวมสูงสุด</p>
                  <p className="text-2xl font-black text-primary">608%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unified Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-6 leading-tight">ทำไม Life Super Save 14/5 ถึงเป็นตัวเลือกที่ใช่?</h2>
            <div className="w-24 h-2 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {unifiedFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-low rounded-[2.5rem] p-8 border border-surface-container text-center flex flex-col group hover:bg-surface-container-high transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="mb-8 mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{feature.title}</h3>
                <p className="text-on-surface/60 leading-relaxed text-sm font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Benefits & Detailed Coverage Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold mb-6 text-primary tracking-tight">
                รายละเอียดผลประโยชน์และความคุ้มครอง
              </h2>
              <p className="text-on-surface/60 max-w-3xl mx-auto font-bold text-lg lg:text-xl leading-relaxed">
                ออมสั้น 5 ปี คุ้มครองยาว 14 ปี พร้อมรับเงินคืนต่อเนื่อง และความคุ้มครองชีวิตที่มั่นคงตามแผนที่คุณเลือกค่ะ
              </p>
            </motion.div>
            
            {/* Quick Summary Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
               <div className="px-6 py-3 bg-white rounded-2xl border border-surface-container shadow-sm flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-black text-primary">ระยะเวลาคุ้มครอง 14 ปี</span>
               </div>
               <div className="px-6 py-3 bg-white rounded-2xl border border-surface-container shadow-sm flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-black text-primary">ชำระเบี้ยประกันภัย 5 ปี</span>
               </div>
               <div className="px-6 py-3 bg-primary text-white rounded-2xl shadow-lg flex items-center gap-3">
                  <ShieldCheck size={18} className="text-green-300" />
                  <span className="text-sm font-black italic">ลดหย่อนภาษีได้สูงสุด 100,000.-/ปี*</span>
               </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Guaranteed Benefits Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-surface-container relative overflow-hidden flex flex-col group hover:border-primary/20 transition-colors"
            >
              <div className="p-10 border-b border-surface-container bg-primary/[0.02]">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-3xl flex items-center justify-center font-black text-3xl shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <Coins size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">ผลประโยชน์เงินคืน</h3>
                    <p className="text-sm font-bold text-on-surface/40 uppercase tracking-widest mt-1 italic">Guaranteed Cash Back</p>
                  </div>
                </div>
                <p className="text-on-surface/70 font-bold leading-relaxed text-lg">
                  รับเงินคืนแน่นอนทุกสิ้นปี ตลอดอายุสัญญา พร้อมรับเงินก้อนใหญ่เมื่อครบกำหนดค่ะ
                </p>
              </div>

              <div className="p-10 space-y-10 flex-grow bg-gradient-to-b from-transparent to-surface-container-lowest/30">
                {/* Timeline Visualization */}
                <div className="relative pl-12 space-y-12 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-high before:dashed">
                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-primary z-10 shadow-sm"></div>
                    <div>
                      <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">สิ้นปีที่ 1 - 5</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-primary tracking-tighter">2%</span>
                        <span className="text-on-surface/60 font-bold text-sm">ต่อปี</span>
                      </div>
                      <p className="text-sm text-on-surface/50 mt-2 font-bold leading-relaxed">รับเงินคืนตั้งแต่ปีแรกที่เริ่มออม ช่วยเพิ่มสภาพคล่องให้คุณค่ะ</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-primary z-10 shadow-sm"></div>
                    <div>
                      <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">สิ้นปีที่ 6 - 10</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-primary tracking-tighter">4%</span>
                        <span className="text-on-surface/60 font-bold text-sm">ต่อปี</span>
                      </div>
                      <p className="text-sm text-on-surface/50 mt-2 font-bold leading-relaxed">รับเงินจ่ายคืนเพิ่มขึ้นเป็น 2 เท่า ให้เงินออมเติบโตขึ้นไปอีกระดับ</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-primary z-10 shadow-sm"></div>
                    <div>
                      <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">สิ้นปีที่ 11 - 13</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-primary tracking-tighter">10%</span>
                        <span className="text-on-surface/60 font-bold text-sm">ต่อปี</span>
                      </div>
                      <p className="text-sm text-on-surface/50 mt-2 font-bold leading-relaxed">รับเงินจ่ายคืนสูงสุดถึงปีละ 10% ช่วงปลายสัญญา</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-green-500 z-10 shadow-sm"></div>
                    <div className="p-8 bg-green-50 rounded-[2.5rem] border border-green-100 relative overflow-hidden group/inner">
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-200/20 rounded-full blur-2xl transition-transform duration-1000 group-hover/inner:scale-150"></div>
                      <p className="text-xs font-black text-green-600/60 uppercase tracking-[0.2em] mb-2">ครบกำหนดสัญญา ณ สิ้นปีที่ 14</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-6xl font-black text-green-600 tracking-tighter">548%</span>
                      </div>
                      <p className="text-sm text-green-600/70 font-bold italic">รับเงินก้อนใหญ่ปิดท้ายสัญญาอย่างสวยงามค่ะ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-10 pb-10">
                <div className="p-8 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group/cta">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover/cta:bg-white/20 transition-colors"></div>
                  <p className="text-xs font-black text-white/50 uppercase tracking-[0.3em] mb-3">รวมผลประโยชน์รับรองตลอดสัญญา</p>
                  <div className="flex items-baseline gap-4">
                    <span className="text-7xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform duration-700 block">608%</span>
                    <span className="text-green-300 font-bold text-xl italic">*</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Life Coverage Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-surface-container relative overflow-hidden flex flex-col group hover:border-secondary/20 transition-colors"
            >
              <div className="p-10 border-b border-surface-container bg-secondary/[0.02]">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center font-black text-3xl shadow-xl shadow-secondary/20 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">ความคุ้มครองชีวิต</h3>
                    <p className="text-sm font-bold text-on-surface/40 uppercase tracking-widest mt-1 italic">Life Protection</p>
                  </div>
                </div>
                <p className="text-on-surface/70 font-bold leading-relaxed text-lg">
                  อุ่นใจด้วยความคุ้มครองที่เพิ่มพูนขึ้นในทุกปี เพื่อเป็นหลักประกันมห้คนที่คุณรักค่ะ
                </p>
              </div>

              <div className="p-10 space-y-12 flex-grow bg-gradient-to-b from-transparent to-surface-container-lowest/30">
                <div className="relative pl-12 space-y-12 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-high before:dashed">
                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-secondary z-10 shadow-sm"></div>
                    <div className="flex items-center gap-12">
                      <div>
                        <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">ปีกรมธรรม์ที่ 1</p>
                        <p className="text-3xl font-black text-primary tracking-tighter">101%</p>
                      </div>
                      <div className="w-px h-10 bg-surface-container"></div>
                      <div>
                        <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">ปีกรมธรรม์ที่ 2</p>
                        <p className="text-3xl font-black text-primary tracking-tighter">202%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-secondary z-10 shadow-sm"></div>
                    <div className="flex items-center gap-12">
                      <div>
                        <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">ปีกรมธรรม์ที่ 3</p>
                        <p className="text-3xl font-black text-primary tracking-tighter">315%</p>
                      </div>
                      <div className="w-px h-10 bg-surface-container"></div>
                      <div>
                        <p className="text-xs font-black text-on-surface/30 uppercase tracking-[0.2em] mb-2">ปีกรมธรรม์ที่ 4</p>
                        <p className="text-3xl font-black text-primary tracking-tighter">420%</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-white border-[6px] border-secondary z-10 shadow-sm"></div>
                    <div className="p-8 bg-secondary/5 rounded-[2.5rem] border border-secondary/10 relative overflow-hidden group/cover">
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover/cover:scale-125 transition-transform duration-700"></div>
                      <p className="text-xs font-black text-secondary-dark uppercase tracking-[0.3em] mb-3">ปีที่ 5 - 14 เป็นต้นไป</p>
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-6xl font-black text-secondary tracking-tighter">525%</span>
                        <span className="text-secondary/40 font-bold tracking-widest uppercase text-[10px]">สูงสุดตลอดสัญญา</span>
                      </div>
                      <p className="text-sm text-secondary/70 font-bold leading-relaxed">
                        รับความคุ้มครองสูงสุดต่อเนื่องจนครบกำหนดสัญญา เพื่อพิทักษ์ความมั่งคั่งของคุณค่ะ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-10 pb-10 mt-auto">
                <div className="p-8 bg-white rounded-[2.5rem] border-2 border-dashed border-surface-container flex items-center gap-6">
                   <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Target size={28} />
                   </div>
                   <div>
                      <p className="text-xs font-black text-on-surface/30 uppercase tracking-widest mb-1">เป้าหมายเพื่อใคร?</p>
                      <p className="text-sm text-on-surface/60 font-bold leading-tight">สร้างมรดก หรือทุนการศึกษาที่แน่นอน</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Product Characteristics Table Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-4">ลักษณะแบบประกันภัย Life Super Save 14/5</h2>
            <p className="text-on-surface/60 font-medium tracking-wide">สรูปเงื่อนไขการรับประกันและสิทธิประโยชน์สำคัญ</p>
          </div>

          <div className="overflow-hidden rounded-[3rem] border border-surface-container bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-8 font-black text-lg">หัวข้อรายละเอียด</th>
                  <th className="p-8 font-black text-lg">ข้อมูลโดยสรุป</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {[
                  { label: "ระยะเวลาคุ้มครอง", value: "14 ปี" },
                  { label: "ระยะเวลาชำระเบี้ยประกันภัย", value: "5 ปี" },
                  { label: "อายุรับประกันภัย", value: "1 เดือน - 70 ปี" },
                  { label: "จำนวนเงินเอาประกันภัยขั้นต่ำ", value: "50,000 บาท" },
                  { label: "เบี้ยประกันภัยรายปี", value: "1,000 บาท ต่อจำนวนเงินเอาประกันภัย 1,000 บาท (เท่ากันทุกอายุทุกเพศ)" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-8 font-bold text-primary">{row.label}</td>
                    <td className="p-8 font-medium text-on-surface/70">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-surface-container-low rounded-[2.5rem] border border-surface-container">
            <h4 className="font-black text-primary mb-4 flex items-center gap-3">
              <Info size={20} /> หมายเหตุเพิ่มเติม:
            </h4>
            <ul className="space-y-3 text-xs text-on-surface/60 font-medium leading-relaxed list-disc pl-5">
              <li>* ของจำนวนเงินเอาประกันภัยหรือมูลค่าเงินคืนกรมธรรม์ แล้วแต่จำนวนใดจะมากกว่า</li>
              <li>** ของจำนวนเงินเอาประกันภัย</li>
              <li>ผู้ขอเอาประกันภัยมีหน้าที่แถลงข้อความจริงในการขอเอาประกันภัย การปกปิดข้อความจริงหรือแถลงข้อความที่เป้นเท็จ อาจเป็นเหตุให้บริษัทผู้รับประกันภัยบอกล้างสัญญาประกันภัย และปฏิเสธไม่จ่ายค่าสินไหมทดแทนได้</li>
              <li>รับประกันชีวิตโดย บมจ. กรุงไทย-แอกซ่า ประกันชีวิต</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Summary CTA */}
      <section className="py-24 bg-white overflow-hidden relative text-center">
        <div className="max-w-7xl mx-auto px-6">
           <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-primary mb-12 leading-tight">
              ทำไม Life Super Save 14/5<br/>คือคำตอบของการออม?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
               <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -z-10 scale-110"></div>
              <div className="p-6">
                <p className="text-5xl font-black text-primary mb-2">5</p>
                <p className="font-black text-on-surface uppercase tracking-widest text-xs">ปีชำระเบี้ย</p>
                <p className="text-sm mt-3 text-on-surface/60 font-bold whitespace-nowrap">ออมสั้น คล่องตัวสูง</p>
              </div>
              <div className="p-6 md:border-l border-surface-container/50">
                <p className="text-5xl font-black text-primary mb-2">14</p>
                <p className="font-black text-on-surface uppercase tracking-widest text-xs">ปีคุ้มครอง</p>
                <p className="text-sm mt-3 text-on-surface/60 font-bold whitespace-nowrap">ให้คุณเบาใจได้ยาวๆ</p>
              </div>
            </div>
            <p className="text-xl text-primary font-black mb-12">
              "เริ่มวางแผนอนาคตอย่างง่าย รับเงินคืนไว พร้อมความคุ้มครองที่มั่นใจได้"
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-12 py-5 rounded-full font-black shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg"
            >
              รับข้อเสนอพิเศษในวันนี้
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-extrabold mb-8 leading-tight italic text-green-300">
              "วางแผนการเงินอย่างง่าย เพื่อชีวิตที่ดีกว่าเดิม"
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Life Super Save 14/5 ออกแบบมาให้คุณเก็บออมอย่างเป็นระบบ โดยเห็นผลตอบแทนที่แน่นอน 
              ไม่ว่าสภาวะตลาดจะเป็นอย่างไร มั่นใจได้ว่าเงินออมของคุณยังคงเติบโตอย่างมั่นคง
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection defaultPlan="สนใจแผน Life Super Save 14/5" />
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Life Super Save 14/5" 
      />
    </div>
  );
}
