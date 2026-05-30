import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  TrendingUp, 
  Stethoscope, 
  Umbrella, 
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../context/ConsultationContext';

const products = [
  {
    category: "ประกันชีวิต (Whole Life)",
    icon: <Heart className="text-red-500" />,
    color: "from-red-50 to-red-100/50",
    items: [
      { 
        id: 'lifeready', 
        name: 'Life Ready', 
        tagline: 'ประกันชีวิตที่พร้อมสำหรับทุกก้าว', 
        desc: 'เตรียมความพร้อมให้คนข้างหลังด้วยทุนประกันที่กำหนดเองได้', 
        path: '/whole-life-insurance/lifeready'
      },
      { 
        id: 'twelve-pl', 
        name: '12PL', 
        tagline: 'คุ้มครองชีวิตยาวนาน จ่ายเบี้ยสั้น', 
        desc: 'แผนประกันชีวิตที่เน้นความคุ้มครองสูง พร้อมโอกาสรับเงินคืน', 
        path: '/whole-life-insurance/12pl'
      },
      { 
        id: 'ismart-80-6', 
        name: 'iSmart 80/6', 
        tagline: 'คุ้มครองถึงอายุ 80 จ่ายเบี้ยเพียง 6 ปี', 
        desc: 'สั้น มั่นคง ตรงจุด เพื่อความอุ่นใจในระยะยาว', 
        path: '/whole-life-insurance/ismart-80-6'
      },
      { 
        id: 'lifetreasure', 
        name: 'Life Treasure', 
        tagline: 'มรดกล้ำค่าเพื่อคนที่คุณรัก', 
        desc: 'สร้างกองมรดกที่มั่นคง พร้อมสวัสดิการคุ้มครองชีวิตที่ครบครัน', 
        path: '/whole-life-insurance/lifetreasure',
        highlight: 'ยอดนิยม'
      }
    ]
  },
  {
    category: "ประกันสุขภาพ (Health)",
    icon: <Stethoscope className="text-secondary" />,
    color: "from-blue-50 to-blue-100/50",
    items: [
      { 
        id: 'ihealthy-ultra', 
        name: 'iHealthy Ultra', 
        tagline: 'ที่สุดของประกันสุขภาพเหมาจ่าย', 
        desc: 'วงรักษาครอบคลุมสูงสุด 100 ล้านบาทต่อปี ครอบคลุมผู้ป่วยนอกและใน', 
        path: '/health-insurance/health-ultra',
        highlight: 'แนะนำ'
      },
      { 
        id: 'mea-extra', 
        name: 'MEA Extra', 
        tagline: 'คุ้มครองค่ารักษาพยาบาลส่วนเกิน', 
        desc: 'ช่วยจ่ายส่วนเกินจากสวัสดิการที่มีอยู่ เพื่อความอุ่นใจที่มากขึ้น', 
        path: '/health-insurance/mea-extra' 
      }
    ]
  },
  {
    category: "ประกันโรคร้ายแรง (Critical Illness)",
    icon: <ShieldCheck className="text-primary" />,
    color: "from-rose-50 to-rose-100/50",
    items: [
      { 
        id: 'ishield', 
        name: 'iShield', 
        tagline: 'คุ้มครองโรคร้ายแรงตลอดชีพ', 
        desc: 'จ่ายเบี้ยสั้น คุ้มครองยาวนาน ครอบคลุม 70 โรคร้ายแรงทุกระยะ', 
        path: '/critical-illness-insurance/ishield',
        highlight: 'คุ้มค่า'
      },
      { 
        id: 'ci123', 
        name: 'CI123', 
        tagline: 'คุ้มครอง 123 อาการโรคร้าย', 
        desc: 'ครอบคลุมทุกกลุ่มโรคที่พบบ่อยในคนไทย พร้อมเงินก้อนช่วยรักษา', 
        path: '/critical-illness-insurance/ci123' 
      },
      { 
        id: 'critical-illness-care', 
        name: 'โรคร้ายเบาใจ', 
        tagline: 'เบี้ยประกันราคาเบาๆ แต่คุ้มครองหนัก', 
        desc: 'แผนประกันโรคร้ายแรงที่เริ่มต้นได้ง่าย เพื่อความไม่ประมาท', 
        path: '/critical-illness-insurance/critical-illness-care' 
      },
      { 
        id: 'so-shield', 
        name: 'โรคร้ายโซชิลด์', 
        tagline: 'คุ้มครองโรคร้ายแบบชิลล์ๆ', 
        desc: 'ปกป้องเงินออมของคุณไม่ให้หมดไปกับค่ารักษาโรคร้ายแรง', 
        path: '/critical-illness-insurance/so-shield' 
      }
    ]
  },
  {
    category: "ประกันสะสมทรัพย์ (Savings)",
    icon: <TrendingUp className="text-emerald-600" />,
    color: "from-emerald-50 to-emerald-100/50",
    items: [
      { 
        id: 'global-index', 
        name: 'Global Index 16/6', 
        tagline: 'โอกาสเติบโตตามดัชนีระดับโลก', 
        desc: 'เปลี่ยนเงินนิ่งให้งอกเงย พร้อมการันตีเงินคืนและลดหย่อนภาษี', 
        path: '/savings-insurance/global-index-16-6',
        highlight: 'โอกาสสูง'
      },
      { 
        id: 'super-save', 
        name: 'Life Super Save 14/5', 
        tagline: 'ออมสั้น คืนไว ได้ลดหย่อน', 
        desc: 'แผนออมเงินที่เน้นสภาพคล่องและผลตอบแทนที่แน่นอน', 
        path: '/savings-insurance/super-save-14-5' 
      },
      { 
        id: 'ultimate-growth', 
        name: 'Ultimate Growth', 
        tagline: 'สร้างการเติบโตให้เงินออมอย่างยั่งยืน', 
        desc: 'แผนประกันชีวิตควบการลงทุนเพื่อเป้าหมายทางการเงินในอนาคต', 
        path: '/savings-insurance/ultimate-growth' 
      }
    ]
  },
  {
    category: "ประกันบำนาญ (Pension)",
    icon: <Target className="text-orange-600" />,
    color: "from-orange-50 to-orange-100/50",
    items: [
      { 
        id: 'bumnan-smart', 
        name: 'บำนาญ สมาร์ท 95', 
        tagline: 'เกษียณอย่างสำราญด้วยเงินบำนาญที่มั่นคง', 
        desc: 'วางแผนเกษียณอายุ พร้อมการันตีเงินบำนาญสูงสุดถึงอายุ 95 ปี', 
        path: '/pension-insurance/bumnan-smart-95' 
      }
    ]
  },
  {
    category: "ประกันอุบัติเหตุ (Accident)",
    icon: <Umbrella className="text-purple-600" />,
    color: "from-purple-50 to-purple-100/50",
    items: [
      { 
        id: 'pa', 
        name: 'Personal Accident', 
        tagline: 'ดูแลทุกวินาทีที่เกิดเหตุไม่คาดฝัน', 
        desc: 'คุ้มครองค่ารักษาพยาบาลจากอุบัติเหตุ 24 ชั่วโมงทั่วโลก', 
        path: '/accident-insurance/pa' 
      }
    ]
  }
];

export default function AllProducts() {
  const { openConsultation } = useConsultation();

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-surface">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10 text-primary font-bold text-sm mb-6"
          >
            <Sparkles size={16} />
            <span>แผนประกันทั้งหมดจาก Proud Life Insurance</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight"
          >
            รวมทุกแผนความคุ้มครอง <br/>
            <span className="text-secondary">ที่ออกแบบมาเพื่อคุณ</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface/60 max-w-2xl mx-auto font-medium"
          >
            ค้นหาแผนประกันที่ตรงกับความต้องการของคุณที่สุด ไม่ว่าจะเป็นสุขภาพ มรดก หรือการออมเงิน
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
      </section>

      {/* Product List */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {products.map((group, groupIdx) => (
              <div key={group.category}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-10"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl">
                    {group.icon}
                  </div>
                  <h2 className="text-2xl font-black text-primary">{group.category}</h2>
                  <div className="flex-1 h-px bg-surface-container-high" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {group.items.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`group relative bg-gradient-to-br ${group.color} p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
                    >
                      {product.highlight && (
                        <div className="absolute top-6 right-8 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-secondary tracking-widest flex items-center gap-1 shadow-sm">
                          <Zap size={10} className="fill-secondary" />
                          {product.highlight}
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-secondary transition-colors">{product.name}</h3>
                        <p className="text-sm font-bold text-primary/60 mb-4">{product.tagline}</p>
                        <p className="text-on-surface/70 leading-relaxed font-medium line-clamp-2">
                          {product.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Link 
                          to={product.path}
                          className="flex-1 bg-white text-primary py-4 rounded-2xl font-black shadow-sm group-hover:bg-primary group-hover:text-white transition-all text-center flex items-center justify-center gap-2"
                        >
                          ดูรายละเอียด
                          <ArrowRight size={18} />
                        </Link>
                        <button 
                          onClick={openConsultation}
                          className="w-14 h-14 bg-white/50 text-secondary rounded-2xl flex items-center justify-center border border-white hover:bg-secondary hover:text-white transition-all shadow-sm"
                        >
                          <Heart size={20} className="fill-current" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            ยังไม่แน่ใจว่าเลือกแผนไหนดี? <br/>
            <span className="text-secondary-container italic">ให้พี่ฝ้ายช่วยเลือกให้สิคะ</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto font-medium">
            พี่ฝ้ายยินดีให้คำปรึกษาฟรี เพื่อวิเคราะห์ความเสี่ยงและเป้าหมายส่วนตัวของคุณ เพื่อให้ได้แผนประกันที่คุ้มค่าที่สุดค่ะ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openConsultation}
              className="px-10 py-5 bg-white text-primary rounded-3xl font-black shadow-xl hover:scale-105 transition-transform"
            >
              นัดหมายปรึกษาฟรี
            </button>
            <a 
              href="https://line.me/ti/p/@proudlifeinsurance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#06C755] text-white rounded-3xl font-black shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              ทักแชททาง LINE
            </a>
          </div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>
    </div>
  );
}
