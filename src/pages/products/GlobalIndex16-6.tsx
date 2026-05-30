import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  Target, 
  Info, 
  CheckCircle2, 
  ChevronDown,
  ArrowRight,
  Heart,
  Globe2,
  PieChart,
  HelpCircle,
  FileText,
  Award,
  Users,
  Search,
  CheckCircle,
  MessageCircle,
  Shield,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../../components/ContactSection';
import { PremiumCalculatorModal } from '../../components/PremiumCalculatorModal';

// Brand Colors Based on Request
// #1C7890 primary
// #0B6F82 dark teal
// #07963E green
// #C8E9D2 mint
// #DDEEF5 light blue
// #F7F8F8 off-white
// #EDEFEF grey
// #2F3437 dark grey

export default function GlobalIndex16_6() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const painPoints = [
    {
      title: "เงินนอนนิ่ง ผลตอบแทนต่ำ",
      desc: "เงินในบัญชีออมทรัพย์อาจดูปลอดภัย แต่ดอกเบี้ยที่ได้รับอาจโตไม่ทันค่าครองชีพที่สูงขึ้นทุกปีค่ะ",
      icon: <Coins className="w-8 h-8 text-[#1C7890]" />
    },
    {
      title: "อยากออมเพื่อเกษียณ แต่กังวลความเสี่ยง",
      desc: "อยากให้เงินทำงานหนักขึ้น แต่ก็ไม่อยากเอาเงินต้นไปเสี่ยงกับความผันผวนของตลาดหุ้นโดยตรง",
      icon: <Clock className="w-8 h-8 text-[#1C7890]" />
    },
    {
      title: "อยากได้ครบทั้ง 'ออม-คุ้มครอง-เติบโต'",
      desc: "มองหาแผนที่ให้เงินคืนสม่ำเสมอ มีความคุ้มครองชีวิต และมีโอกาสรับผลตอบแทนเพิ่มจากดัชนีระดับโลก",
      icon: <TrendingUp className="w-8 h-8 text-[#1C7890]" />
    }
  ];

  const productFeatures = [
    { title: "ชำระเบี้ย 6 ปี", desc: "สั้นและคล่องตัว ไม่เป็นภาระระยะยาว" },
    { title: "คุ้มครอง 16 ปี", desc: "ดูแลความมั่นคงให้คุณและครอบครัวยาวนาน" },
    { title: "รับเงินคืนแน่นอน", desc: "ระหว่างสัญญา + เงินก้อนครบกำหนด รวม 624%*" },
    { title: "โอกาสรับเงินปันผล", desc: "อ้างอิงดัชนีระดับโลก Citi Grandmaster RC 5 Index" }
  ];

  const indexAssets = [
    { title: "Equity / หุ้น", desc: "คัดเลือกหุ้นจากตลาดที่พัฒนาแล้วทั่วโลก", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Government Bond / พันธบัตรรัฐบาล", desc: "เพื่อความมั่นคงและรักษาสมดุลของพอร์ต", icon: <Shield className="w-6 h-6" /> },
    { title: "Corporate Credit / ตราสารหนี้เอกชน", desc: "เพิ่มโอกาสรับผลตอบแทนจากบริษัทชั้นนำ", icon: <FileText className="w-6 h-6" /> },
    { title: "Commodity / สินค้าโภคภัณฑ์", desc: "กระจายความเสี่ยงในทองคำและน้ำมัน", icon: <PieChart className="w-6 h-6" /> }
  ];

  const targets = [
    { title: "คนที่มีเงินฝากระยะยาว", desc: "และอยากเพิ่มโอกาสให้เงินเติบโตมากกว่าดอกเบี้ยธนาคาร" },
    { title: "คนที่ต้องการวางแผนเกษียณ", desc: "และมองหาแหล่งเงินออมที่มีความมั่นคงสูง" },
    { title: "คนที่ต้องการรับเงินคืนระหว่างทาง", desc: "เพื่อเป็นสภาพคล่องหรือรางวัลชีวิตเล็กๆ น้อยๆ" },
    { title: "คนที่ต้องการความคุ้มครองชีวิต", desc: "ควบคู่การออมเงินที่โปร่งใสและตรวจสอบได้" },
    { title: "คนที่ต้องการลดหย่อนภาษี", desc: "ได้สูงสุด 100,000 บาท ตามเงื่อนไขกรมสรรพากร" }
  ];

  const faqs = [
    { q: "Global Index 16/6 ต้องจ่ายเบี้ยกี่ปี?", a: "ชำระเบี้ยเพียง 6 ปี และมีระยะเวลาคุ้มครองยาวนานถึง 16 ปีค่ะ" },
    { q: "เงินปันผลการันตีไหม?", a: "เงินปันผลเป็นผลประโยชน์ที่ไม่รับรองการจ่ายนะคะ โดยจะขึ้นอยู่กับระดับดัชนีอ้างอิง อัตราแลกเปลี่ยน และเงื่อนไขการบริหารจัดการของบริษัทค่ะ พี่ฝ้ายแนะนำให้ศึกษาข้อมูลในเอกสารเสนอขายเพิ่มเติมนะคะ" },
    { q: "ครบกำหนดสัญญาได้รับอะไร?", a: "เมื่อครบสัญญาในปีที่ 16 จะได้รับเงินก้อนใหญ่ 590% ของจำนวนเงินเอาประกันภัย และอาจมีโอกาสรับเงินปันผลเพิ่มเติมหากดัชนีทำผลงานได้ตามเงื่อนไขค่ะ" },
    { q: "มีเงินคืนระหว่างทางไหม?", a: "มีค่ะ แผนนี้มีเงินจ่ายคืนให้ในปีกรมธรรม์ที่ 2, 4, 6, 8, 10, 12 และ 14 รวมเงินคืนระหว่างทาง 34% ค่ะ" },
    { q: "ต้องตรวจสุขภาพไหม?", a: "โดยเบื้องต้น แผนนี้รับประกันแบบไม่ต้องตรวจสุขภาพและไม่ต้องตอบคำถามสุขภาพค่ะ แต่ทั้งนี้จะเป็นไปตามเงื่อนไขและหลักเกณฑ์ที่บริษัทกำหนดนะคะ" },
    { q: "เหมาะกับใคร?", a: "เหมาะมากๆ สำหรับคนที่มีเงินออมนิ่งๆ และอยากให้เงินมีโอกาสทำงานมากขึ้น หรือคนที่กำลังมองหาแผนสะสมทรัพย์ระยะกลางที่ให้ทั้งความคุ้มครองและสิทธิลดหย่อนภาษีค่ะ" }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F8] font-sans selection:bg-[#C8E9D2] selection:text-[#1C7890]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#DDEEF5] via-white to-[#C8E9D2]/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#1C7890]/20 text-[#1C7890] text-sm font-bold mb-8">
              <Heart size={16} className="text-[#07963E]" />
              <span>Proud Life Insurance - เข้าใจง่าย จริงใจ อุ่นใจ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1C7890] mb-6 leading-tight">
              Global Index 16/6<br/>
              <span className="text-on-surface">เปลี่ยนเงินฝากนิ่ง ๆ ให้มีโอกาสเติบโต</span>
            </h1>
            <p className="text-lg text-[#2F3437]/60 mb-10 leading-relaxed max-w-xl font-medium">
              แผนประกันชีวิตแบบสะสมทรัพย์ ชำระเบี้ย 6 ปี คุ้มครอง 16 ปี รับเงินคืนแน่นอน และมีโอกาสรับเงินปันผลจากดัชนีระดับโลก
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#1C7890] text-white rounded-2xl font-black shadow-lg shadow-[#1C7890]/20 hover:bg-[#0B6F82] transition-all hover:scale-105 active:scale-95 text-lg"
              >
                ปรึกษาพี่ฝ้ายแบบเข้าใจง่าย
              </button>
              <a 
                href="#benefits"
                className="px-8 py-4 bg-white text-[#1C7890] border-2 border-[#1C7890] rounded-2xl font-black hover:bg-[#1C7890]/5 transition-all text-lg"
              >
                ดูสรุปแผนประกัน
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <img 
              src="/GlobalIndex.webp" 
              alt="พี่ฝ้าย ที่ปรึกษา Proud Life Insurance" 
              className="mx-auto rounded-[2rem] shadow-2xl border-[16px] border-white w-[90%] h-auto hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-[#EDEFEF] z-20 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C8E9D2] rounded-2xl flex items-center justify-center">
                  <TrendingUp className="text-[#07963E]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#2F3437]/50 font-bold uppercase tracking-widest">Opportunity</p>
                  <p className="text-xl font-bold text-[#1C7890]">เป้าหมายเติบโต ~5%*</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#2F3437] mb-6 leading-tight">เงินฝากนิ่ง ๆ อาจปลอดภัย…แต่โตช้ากว่าที่คิด</h2>
            <p className="text-lg text-[#2F3437]/50 max-w-2xl mx-auto">
              การเก็บเงินในที่ที่มีดอกเบี้ยต่ำเพียงอย่างเดียว อาจทำให้คุณพลาดโอกาสสร้างการเติบโตให้เงินออมของคุณนะคะ พี่ฝ้ายยินดีช่วยคุณวางแผนค่ะ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-[#F7F8F8] border border-[#EDEFEF] hover:shadow-xl hover:shadow-[#1C7890]/5 transition-all duration-500 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C7890] mb-4">{point.title}</h3>
                <p className="text-[#2F3437]/60 leading-relaxed text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Summary Section */}
      <section className="py-24 bg-[#DDEEF5]/30 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#2F3437] mb-6">Global Index 16/6 คืออะไร?</h2>
            <div className="w-20 h-1.5 bg-[#07963E] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productFeatures.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#EDEFEF] shadow-sm hover:shadow-lg transition-all text-center">
                <h3 className="text-2xl font-bold text-[#1C7890] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#2F3437]/50 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Timeline Section */}
      <section id="benefits" className="py-24 bg-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#2F3437] mb-6 leading-tight">เส้นทางผลประโยชน์ตลอด 16 ปี</h2>
            <p className="text-lg text-[#1C7890] font-bold italic mb-2">"รวมผลประโยชน์ 624%* พร้อมโอกาสรับเงินปันผล"</p>
          </div>

          <div className="relative max-w-5xl mx-auto pb-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#EDEFEF] -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-3 gap-12 relative z-10 text-center lg:text-left">
              <div className="bg-[#F7F8F8] p-8 rounded-[2.5rem] border border-[#EDEFEF] shadow-sm">
                <div className="w-28 h-16 bg-[#1C7890] text-white rounded-2xl flex items-center justify-center font-black mx-auto lg:mx-0 mb-6 border-4 border-white shadow-lg text-lg">ปีที่ 1-6</div>
                <h4 className="font-bold text-[#1C7890] mb-3">ช่วงชำระเบี้ย</h4>
                <p className="text-sm text-[#2F3437]/60 leading-relaxed font-medium capitalize">
                  ชำระเบี้ยประกันต่อเนื่อง 6 ปี และรับความคุ้มครองชีวิตที่เพิ่มพูนขึ้นทุกปี
                </p>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-[#EDEFEF] shadow-xl ring-2 ring-[#07963E]/10">
                <div className="w-28 h-16 bg-[#07963E] text-white rounded-2xl flex items-center justify-center font-black mx-auto lg:mx-0 mb-6 border-4 border-white shadow-lg text-lg">ทุก 2 ปี</div>
                <h4 className="font-bold text-[#07963E] mb-3">รับเงินคืนระหว่างทาง</h4>
                <p className="text-sm text-[#2F3437]/60 leading-relaxed font-medium">
                  ปีที่ 2, 4 รับ 2%<br/>
                  ปีที่ 6, 8, 10, 12, 14 รับ 6%
                </p>
              </div>

              <div className="bg-[#DDEEF5] p-8 rounded-[2.5rem] border border-[#1C7890]/10 shadow-sm">
                <div className="w-28 h-16 bg-[#1C7890] text-white rounded-2xl flex items-center justify-center font-black mx-auto lg:mx-0 mb-6 border-4 border-white shadow-lg text-lg">ปีที่ 16</div>
                <h4 className="font-bold text-[#1C7890] mb-3">วันครบสัญญา</h4>
                <p className="text-sm text-[#2F3437]/60 leading-relaxed font-medium">
                  รับเงินก้อนใหญ่ 590%* และโอกาสรับเงินปันผลจากผลตอบแทนดัชนี
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-[#EDEFEF]/30 rounded-[2.5rem] text-center max-w-4xl mx-auto border border-[#EDEFEF]">
            <p className="text-sm text-[#2F3437]/50 font-medium italic">
              * % ของจำนวนเงินเอาประกันภัย โดยยังไม่รวมโอกาสรับเงินปันผลที่ไม่รองการจ่ายค่ะ
            </p>
          </div>
        </div>
      </section>

      {/* Index Explanation Section */}
      <section className="py-24 bg-[#1C7890] text-white px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <Globe2 size={16} className="text-[#C8E9D2]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8E9D2]">Global Investment Opportunity</span>
              </div>
              <h2 className="text-3xl font-extrabold mb-8 leading-tight text-white">เงินปันผลอ้างอิงกับ<br/><span className="text-[#C8E9D2] italic font-black">ดัชนีระดับโลกอย่างไรร?</span></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12 font-medium">
                ดัชนี Citi Grandmaster RC 5 Index จะกระจายการลงทุนในหลายสินทรัพย์ทั่วโลก โดยมีระบบอัจฉริยะคอยปรับสัดส่วนในทุกๆ วัน และมีกลไกควบคุมความผันผวน เพื่อรักษาสมดุลของพอร์ตการลงทุนค่ะ
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {indexAssets.map((asset, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-all group">
                    <div className="w-10 h-10 bg-[#C8E9D2]/20 rounded-xl flex items-center justify-center shrink-0 text-[#C8E9D2] group-hover:scale-110 transition-transform">
                      {asset.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#C8E9D2] mb-1">{asset.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{asset.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-[10px] text-white/40 italic font-medium">
                *ผลการดำเนินงานในอดีต (Jan 2005 – Dec 2024): Historical Return 4.11%, Historical Volatility 4.09%, Sharpe Ratio 1.01
              </p>
            </div>
            
            <div className="relative">
              <div className="p-10 bg-white rounded-[3rem] shadow-2xl text-[#2F3437]">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-[#DDEEF5] rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-8 h-8 text-[#1C7890]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C7890]">กลไกบริหารความเสี่ยง</h3>
                  <p className="text-sm text-[#2F3437]/50 font-medium mt-3 leading-relaxed">
                    มากกว่าแค่การลงทุน แต่มีระบบที่คอยปกป้องและสร้างโอกาสให้เงินของคุณค่ะ
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Daily Rebalancing", desc: "ปรับสัดส่วนการลงทุนทุกวันตามความเหมาะสม" },
                    { title: "Volatility Control", desc: "ควบคุมความผันผวนให้คงที่ที่ระดับ 5%" },
                    { title: "Professional Managed", desc: "บริหารจัดการโดยผู้เชี่ยวชาญจาก Citi Group" }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[#F7F8F8] border border-[#EDEFEF] flex gap-4">
                      <div className="w-6 h-6 bg-[#C8E9D2] rounded-full flex items-center justify-center shrink-0 text-[#07963E]">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[#2F3437] mb-1">{item.title}</h5>
                        <p className="text-[11px] text-[#2F3437]/50 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 rounded-2xl bg-[#1C7890]/5 border border-[#1C7890]/10 text-center">
                  <p className="text-xs text-[#1C7890] font-bold italic leading-relaxed">
                    "คุณจึงมั่นใจได้ว่าเงินออมจะเติบโตอย่างมั่นคง"
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Plan For Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#2F3437] mb-6">แผนนี้เหมาะกับใคร?</h2>
            <div className="w-20 h-1.5 bg-[#1C7890] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targets.map((target, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-[#F7F8F8] border border-[#EDEFEF] flex items-start gap-6 hover:translate-y-[-5px] transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[#07963E]">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C7890] mb-2">{target.title}</h4>
                  <p className="text-sm text-[#2F3437]/50 leading-relaxed font-medium">{target.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-24 bg-[#EDEFEF]/40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#2F3437] mb-6">ตัวอย่างผลประโยชน์เบื้องต้น</h2>
            <p className="text-2xl text-[#2F3437]/60 font-bold">ตัวอย่างทุนประกัน 1 แสนบาท</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#EDEFEF]">
            <div className="bg-[#1C7890] px-10 py-12 text-white">
              <h4 className="text-2xl font-bold mb-4 italic">ทุนประกัน 100,000 บาท</h4>
              <div className="grid md:grid-cols-2 gap-8 text-white/80 font-medium">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="text-xs uppercase tracking-widest mb-1">เบี้ยประกันภัยรายปี (ตัวอย่าง)</p>
                  <p className="text-3xl font-black text-[#C8E9D2]">99,500 <span className="text-sm">บาท</span></p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <p className="text-xs uppercase tracking-widest mb-1">ชำระ 6 ปี รวม</p>
                  <p className="text-3xl font-black text-[#C8E9D2]">597,000 <span className="text-sm">บาท</span></p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                 <p className="text-xl font-bold">เงินจ่ายคืนตลอดสัญญารับรอง</p>
                 <p className="text-4xl font-black text-[#C8E9D2]">624,000 <span className="text-sm">บาท</span></p>
              </div>
            </div>
            
            <div className="p-10 bg-[#F7F8F8]">
              <p className="font-bold text-[#1C7890] mb-8 flex items-center gap-2 underline underline-offset-8 decoration-[#07963E]/20">
                <TrendingUp size={20} className="text-[#07963E]" />
                โอกาสรับเงินปันผลเมื่อดัชนีเฉลี่ย (ตัวอย่าง)
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#EDEFEF] text-center">
                  <p className="text-[10px] font-bold text-[#2F3437]/40 mb-3 tracking-widest uppercase">เฉลี่ย -1% ต่อปี</p>
                  <p className="text-2xl font-black text-[#1C7890] mb-2">0 <span className="text-xs">บาท</span></p>
                  <p className="text-[10px] text-[#2F3437]/50 font-bold">รับรวม 624,000 บาท</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-xl border border-[#07963E]/20 text-center ring-2 ring-[#07963E]/5">
                  <p className="text-[10px] font-bold text-[#2F3437]/40 mb-3 tracking-widest uppercase">เฉลี่ย 3% ต่อปี</p>
                  <p className="text-2xl font-black text-[#07963E] mb-2">+288,808 <span className="text-xs">บาท</span></p>
                  <p className="text-[10px] text-[#2F3437]/50 font-bold text-[#07963E]">รับรวม 912,808 บาท</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#EDEFEF] text-center">
                  <p className="text-[10px] font-bold text-[#2F3437]/40 mb-3 tracking-widest uppercase">เฉลี่ย 5% ต่อปี</p>
                  <p className="text-2xl font-black text-[#07963E] mb-2">+564,941 <span className="text-xs">บาท</span></p>
                  <p className="text-[10px] text-[#2F3437]/50 font-bold">รับรวม 1,188,941 บาท</p>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#EDEFEF]">
                <Info size={20} className="text-[#1C7890] shrink-0 mt-1" />
                <p className="text-[10px] text-[#2F3437]/50 leading-relaxed font-medium italic">
                  *ข้อมูลนี้เป็นเพียงการจำลองเพื่อความเข้าใจนะคะ เงินปันผลเป็นพผลประโยชน์ที่ไม่การันตีการจ่าย และผลตอบแทนในอดีตมิได้เป็นตัวยืนยันถึงผลตอบแทนในอนาคตค่ะ ทั้งนี้เป็นไปตามเงื่อนไขที่ระบุในสัญญาประกันภัยนะคะ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-[3rem] bg-gradient-to-r from-[#1C7890] to-emerald-700 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 w-24 h-24 bg-white/20 rounded-[2rem] flex items-center justify-center shrink-0 backdrop-blur-md group-hover:rotate-12 transition-transform">
              <FileText size={48} className="text-[#C8E9D2]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-[#C8E9D2]">ลดหย่อนภาษีได้ตามเงื่อนไข</h3>
              <p className="text-white/80 leading-relaxed font-medium">
                เบี้ยประกันชีวิตสามารถนำไปใช้สิทธิลดหย่อนภาษีได้สูงสุด <span className="text-white font-bold">100,000 บาทต่อปี</span> ตามเงื่อนไขของกรมสรรพากรนะคะ ช่วยให้เงินออมของคุณมีค่าเพิ่มขึ้นทันทีตั้งแต่ปีแรกที่เริ่มออมค่ะ
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-[40px]"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-2">คำถามที่พบบ่อย (FAQ)</h2>
            <p className="text-on-surface/50 font-bold mt-2 font-sans">ตอบทุกข้อสงสัยเรื่องประกันภัยกับพี่ฝ้ายค่ะ</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-[1rem] border border-surface-container overflow-hidden transition-all hover:border-primary/30">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors group"
                >
                  <span className={`font-black tracking-tight transition-colors ${activeFaq === i ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-primary" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
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

      <ContactSection defaultPlan="ประกันสะสมทรัพย์" />

      {/* Calculator Modal */}
      <PremiumCalculatorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Global Index 16/6"
      />
    </div>
  );
}
