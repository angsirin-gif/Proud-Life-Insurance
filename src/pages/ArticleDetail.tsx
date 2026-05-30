import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  AlertCircle, 
  ShieldCheck, 
  Heart, 
  HelpCircle,
  MessageCircle,
  Share2,
  Coins,
  CreditCard,
  Wallet,
  FileText,
  TrendingUp
} from 'lucide-react';
import { useConsultation } from '../context/ConsultationContext';

// Standard articles metadata matching ArticlesPage
const ARTICLES_DATA = [
  {
    id: 5,
    title: "5 คำในกรมธรรม์ที่ควรรู้ก่อนเซ็นชื่อ",
    excerpt: "ก่อนทำประกัน หลายคนอาจรู้สึกว่ากรมธรรม์อ่านยาก มีศัพท์เฉพาะเยอะ แต่จริง ๆ แล้วมีคำสำคัญไม่กี่คำที่ถ้าเข้าใจ จะช่วยให้เรารู้ว่า...",
    category: "ความรู้ประกันชีวิต",
    date: "21 พ.ค. 2567",
    image: "/Content_2.webp",
    readTime: "5 นาที"
  },
  {
    id: 1,
    title: "ทำประกันสุขภาพตอนไหนคุ้มที่สุด? สรุปสั้นๆ เข้าใจง่าย",
    excerpt: "หลายคนรอให้ป่วยก่อนถึงนึกถึงประกัน แต่ความจริงแล้วการทำประกันสุขภาพในวันที่เรายังแข็งแรงคือทางเลือกที่ฉลาดที่สุด...",
    category: "ความรู้ประกันสุขภาพ",
    date: "20 พ.ค. 2567",
    image: "/Content_1.webp",
    readTime: "5 นาที"
  },
  {
    id: 2,
    title: "5 ข้อผิดพลาดที่คนส่วนใหญ่ทำ เมื่อเลือกซื้อประกันสะสมทรัพย์",
    excerpt: "หลายคนสนใจประกันสะสมทรัพย์ เพราะอยากมีเงินก้อนในอนาคต พร้อมได้ความคุ้มครองชีวิตระหว่างทาง แต่ก่อนตัดสินใจเลือกแผน มีบางจุดที่หลายคนมักพลาดโดยไม่รู้ตัวค่ะ...",
    category: "วางแผนการเงิน",
    date: "15 พ.ค. 2567",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    readTime: "7 นาที"
  },
  {
    id: 3,
    title: "ประกันบำนาญ VS กองทุนสำรองเลี้ยงชีพ ต่างกันอย่างไร?",
    excerpt: "หลายคนเริ่มวางแผนเกษียณ แล้วเจอ 2 ตัวเลือกที่ถูกพูดถึงบ่อยมาก คือ ประกันบำนาญ และ กองทุนสำรองเลี้ยงชีพ ทั้งสองอย่างช่วยออมเหมือนกันแต่บทบาทต่างกันค่ะ...",
    category: "วางแผนเกษียณ",
    date: "10 พ.ค. 2567",
    image: "/Content_3.webp",
    readTime: "6 นาที"
  }
];

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const { openConsultation } = useConsultation();
  const articleId = parseInt(id || '1', 10);
  const article = ARTICLES_DATA.find(a => a.id === articleId) || ARTICLES_DATA[0];

  // Specific content for 5 key words article
  const renderSpecialArticleContent = () => {
    return (
      <div className="space-y-12 text-on-surface/80 text-base md:text-lg leading-relaxed">
        {/* Intro */}
        <p className="font-medium text-xl text-primary border-l-4 border-secondary pl-4 py-1">
          ก่อนทำประกัน หลายคนอาจรู้สึกว่ากรมธรรม์อ่านยาก มีศัพท์เฉพาะเยอะ แต่จริง ๆ แล้วมีคำสำคัญไม่กี่คำที่ถ้าเข้าใจ จะช่วยให้เรารู้ว่า “ประกันที่กำลังจะทำ คุ้มครองอะไร จ่ายยังไง และมีข้อจำกัดตรงไหน” ค่ะ วันนี้พี่ฝ้ายสรุป 5 คำในกรมธรรม์ที่ควรรู้ก่อนเซ็นชื่อเพื่อผลประโยชน์สูงสุดของคุณค่ะ
        </p>

        {/* Word 1 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-[5rem] gap-1">
              <span className="font-black text-xs uppercase tracking-wider opacity-60">คำที่</span>
              <span className="font-black text-2xl leading-none">01</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-secondary" />
                <h3 className="text-xl md:text-2xl font-extrabold text-on-surface">
                  ผู้เอาประกันภัย & ผู้ยื่นขอทำประกัน (Insured & Applicant)
                </h3>
              </div>
              <p className="text-on-surface/70 text-base leading-relaxed">
                <strong>ผู้เอาประกันภัย</strong> คือ บุคคลที่ได้รับความคุ้มครองตามที่ระบุไว้ในกรมธรรม์ประกันภัย หากเกิดเหตุการณ์ไม่คาดฝันขึ้น บริษัทประกันจะจ่ายผลประโยชน์ตามเงื่อนไขให้ 
                ส่วนผู้รับประโยชน์คือผู้ที่จะได้รับเงินชดเชยเหล่านั้น ซึ่งสำคัญมากในการระบุชื่อผู้รับประโยชน์ให้ชัดเจนและเป็นบุคคลที่มีส่วนได้ส่วนเสียในชีวิตของคุณค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Word 2 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-[5rem] gap-1">
              <span className="font-black text-xs uppercase tracking-wider opacity-60">คำที่</span>
              <span className="font-black text-2xl leading-none">02</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Coins size={18} className="text-secondary" />
                <h3 className="text-xl md:text-2xl font-extrabold text-on-surface">
                  จำนวนเงินเอาประกันภัยหรือ "ทุนประกัน" (Sum Assured)
                </h3>
              </div>
              <p className="text-on-surface/70 text-base leading-relaxed">
                คือ จำนวนเงินสูงสุดที่บริษัทประกันภัยตกลงที่จะจ่ายให้แก่ผู้เอาประกันภัย หรือผู้รับประโยชน์ตามกรมธรรม์เมื่อเกิดเหตุตามเงื่อนไข 
                <br/><br/>
                <em>พี่ฝ้ายแนะนำว่า:</em> การเลือกทุนประกันควรเหมาะสมกับ "มูลค่าความสามารถ" หรือภาระหนี้สินและการดูแลคนข้างหลัง เพื่อเป็นเบาะรองรับยามวิกฤตที่แท้จริงค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Word 3 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-[5rem] gap-1">
              <span className="font-black text-xs uppercase tracking-wider opacity-60">คำที่</span>
              <span className="font-black text-2xl leading-none">03</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CreditCard size={18} className="text-secondary" />
                <h3 className="text-xl md:text-2xl font-extrabold text-on-surface">
                  เบี้ยประกันภัย (Premium)
                </h3>
              </div>
              <p className="text-on-surface/70 text-base leading-relaxed">
                คือ จำนวนเงินที่ผู้เอาประกันภัยต้องจ่ายให้กับบริษัทประกันชีวิตตามกำหนดเวลา (รายเดือน, ราย 3 เดือน, ราย 6 เดือน หรือรายปี) เพื่อรักษาความคุ้มครองตามที่สัญญาระบุไว้
                <br/><br/>
                หากหยุดจ่ายเบี้ยประกัน สัญญาอาจสิ้นสุดผลบังคับหรือต้องกู้เงินจากมูลค่าเงินสดในกรมธรรม์มาจ่ายแบบอัตโนมัติ ดังนั้นการเลือกแบบประกันที่เบี้ยเหมาะสมกับรายได้จึงสำคัญมากค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Word 4 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-[5rem] gap-1">
              <span className="font-black text-xs uppercase tracking-wider opacity-60">คำที่</span>
              <span className="font-black text-2xl leading-none">04</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={18} className="text-secondary" />
                <h3 className="text-xl md:text-2xl font-extrabold text-on-surface">
                  ระยะเวลาคุ้มครอง VS ระยะเวลาชำระเบี้ย
                </h3>
              </div>
              <p className="text-on-surface/70 text-base leading-relaxed">
                หลายคนมักสับสนสองคำนี้จนคิดว่าส่งเบี้ยไปตลอดชีวิต:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 pl-2 text-on-surface/70 text-base">
                <li><strong>ระยะเวลาเอาประกันภัย (คุ้มครอง)</strong>: ระยะเวลาที่บริษัทดูแลเรา เช่น ถึงอายุ 99 ปี หรือนาน 20 ปี</li>
                <li><strong>ระยะเวลาชำระเบี้ยประกันภัย</strong>: จำนวนปีที่เราจ่ายเงินจริง เช่น จ่าย 20 ปี คุ้มครองยาวถึงอายุ 99 ปี (แบบ 20/99)</li>
              </ul>
              <p className="text-on-surface/70 text-base leading-relaxed mt-2">
                ก่อนเซ็นชื่อต้องดูสองคำนี้ให้ชัดเจนเพื่อคำนวณการเติบโตทางเงินและวางแผนค่าใช้จ่ายได้ถูกต้องนะคะ
              </p>
            </div>
          </div>
        </div>

        {/* Word 5 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-[5rem] gap-1">
              <span className="font-black text-xs uppercase tracking-wider opacity-60">คำที่</span>
              <span className="font-black text-2xl leading-none">05</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={18} className="text-secondary" />
                <h3 className="text-xl md:text-2xl font-extrabold text-on-surface">
                  ระยะเวลารอคอย (Waiting Period) และ ข้อยกเว้น (Exclusions)
                </h3>
              </div>
              <p className="text-on-surface/70 text-base leading-relaxed">
                <strong>ระยะเวลารอคอย</strong> คือระยะเวลาหลังจากกรมธรรม์เริ่มมีผลบังคับ ซึ่งลูกค้ามีอาการป่วยด้วยโรคบางอย่างแต่ยังไม่สามารถเคลมได้ (เช่น 30 วันสำหรับโรคทั่วไป หรือ 120 วันสำหรับโรคร้ายแรง/โรคเรื้อรังเฉพาะกลุ่ม)
                <br/><br/>
                ส่วน <strong>ข้อยกเว้น</strong> คือเงื่อนไขหรือโรคที่บริษัทประกันจะไม่คุ้มครอง เช่น โรคที่เป็นมาก่อนการทำประกันภัย หรือการทำร้ายตัวเอง เป็นต้น การทำความเข้าใจจุดนี้จะลดปัญหากระทบกระทั่งตอนทำการเคลมได้เกือบทั้งหมดเลยค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Wrap Up */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-[2.5rem] p-10 mt-12 text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xl font-bold text-primary">ปรึกษาสัญญาและกรมธรรม์ของคุณกับพี่ฝ้ายแบบส่วนตัว</h4>
            <p className="text-sm text-on-surface/70">
              หากอ่านกรมธรรม์ฉบับเก่าแล้วสับสน หรือกำลังเลือกแผนใหม่ที่ยังไม่มีคำตอบที่ชัดเจน พี่ฝ้ายยินดีตรวจสอบและวิเคราะห์เงื่อนไขทุกคำศัพท์ยากๆ ให้คุณเข้าใจได้ง่ายที่สุดค่ะ ทักแชทสแกนตรวจสอบได้ฟรีเลย!
            </p>
          </div>
          <button 
            onClick={openConsultation}
            className="btn-primary shrink-0 mt-6 md:mt-0 shadow-lg shadow-primary/20"
          >
            ปรึกษาพี่ฝ้ายฟรี
          </button>
        </div>
      </div>
    );
  };

  // Content for Health Insurance Timing article (ID 1)
  const renderHealthInsuranceTimingContent = () => {
    return (
      <div className="space-y-12 text-on-surface/80 text-base md:text-lg leading-relaxed font-sans">
        {/* Intro */}
        <p className="font-medium text-xl text-primary border-l-4 border-secondary pl-4 py-1">
          คำถามคลาสสิกที่พี่ฝ้ายเจอบ่อยมากคือ “พี่ฝ้ายคะ/ครับ ควรทำประกันสุขภาพตอนไหนดีที่สุด? รอให้อายุเยอะกว่านี้หน่อยดีไหม หรือรอให้เริ่มมีปัญหาก่อนค่อยทำ?” 
          <br /><br />
          วันนี้พี่ฝ้ายสรุปคำตอบแบบสั้นๆ กระชับ และเข้าใจง่ายที่สุดมาให้แล้วค่ะ เพื่อให้คุณไม่พลาดความคุ้มครองที่ดีที่สุดในวันที่จำเป็นค่ะ!
        </p>

        {/* Section 1 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                1. ทำตอน "สุขภาพแข็งแรงดี" คือเวลาที่คุ้มค่าที่สุด
              </h3>
              <p className="text-on-surface/75 text-base">
                ความลับของประกันสุขภาพคือ <strong>"บริษัทรับประกันสุขภาพในอนาคต แต่ไม่ได้รับประกันโรคที่เป็นอยู่แล้ว"</strong> ค่ะ 
                หากคุณทำประกันในวันที่ยังแข็งแรงดี ไม่มีประวัติเข้าโรงพยาบาล:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 text-on-surface/70 text-sm pl-2">
                <li>อนุมัติง่าย รวดเร็ว 100%</li>
                <li>ดูแลและคุ้มครองครอบคลุมทุกโรค ไม่มีข้อยกเว้น</li>
                <li>เบี้ยประกันคงราคาปกติ ไม่มีการชาร์จเบี้ยเพิ่มจากความเสี่ยงด้านสุขภาพ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <Heart size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                2. ทำตอน "อายุน้อยกว่า" ได้เปรียบเรื่องจ่ายเบี้ยวางแผนง่าย
              </h3>
              <p className="text-on-surface/75 text-base">
                ประกันสุขภาพส่วนใหญ่คำนวณอัตราเบี้ยตามอายุ ยิ่งอายุน้อยความเสี่ยงต่อการเจ็บป่วยก็น้อยลง ทำให้เบี้ยประกันต่อปีถูกกว่ามากค่ะ การเริ่มทำให้เร็วช่วยให้:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1.5 text-on-surface/70 text-sm pl-2">
                <li>จ่ายเบี้ยเบาๆ สบายกระเป๋า ไม่เป็นภาระทางการเงินหนัก</li>
                <li>ผ่านระยะเวลารอคอยได้อย่างรวดเร็วในวัยที่ร่างกายยังมีภูมิต้านทานดี</li>
                <li>สร้างนิสัยการออมและการป้องกันความเสี่ยงทางการเงินตั้งแต่เนิ่นๆ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Comparison Matrix Table */}
        <div className="bg-white rounded-[2rem] border border-surface-container overflow-hidden shadow-sm my-6">
          <div className="bg-gradient-to-r from-primary to-primary-variant text-white px-6 py-4">
            <h3 className="font-bold text-lg text-center">ตารางเปรียบเทียบ: ทำประกันสุขภาพ "ตอนแข็งแรง" กับ "รอให้ป่วยก่อน"</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-surface-container border-b border-surface-container text-on-surface font-semibold">
                  <th className="p-4">ประเด็นหลัก</th>
                  <th className="p-4 text-emerald-600 font-bold">ทำประกันสุขภาพตอนสุขภาพดี</th>
                  <th className="p-4 text-red-500 font-bold">รอให้มีโรค/ป่วยก่อนถึงจะทำ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container text-on-surface/80">
                <tr>
                  <td className="p-4 font-bold bg-surface/50">การพิจารณารับประกัน</td>
                  <td className="p-4 text-emerald-600 font-semibold bg-emerald-50/20">ผ่านฉลุย อนุมัติง่าย 100%</td>
                  <td className="p-4 text-red-600 bg-red-50/25">อนุมัติยาก หรืออาจถูกปฏิเสธเลยทันที</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-surface/50">ความคุ้มครองโรค</td>
                  <td className="p-4 text-emerald-600 font-semibold bg-emerald-50/20">คุ้มครองครบถ้วนทุกโรคไม่มีข้อยกเว้น</td>
                  <td className="p-4 text-red-600 bg-red-50/25">ไม่คุ้มครองโรคที่เป็นมาก่อน หรือบีบยกเว้นอวัยวะนั้นๆ</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-surface/50">อัตราค่าเบี้ยประกัน</td>
                  <td className="p-4 text-emerald-600 font-semibold bg-emerald-50/20">ราคาปกติ ถูกสุดตามอายุวัย</td>
                  <td className="p-4 text-red-600 bg-red-50/25">เบี้ยแพงขึ้น (บริษัทชาร์จเพิ่มพิเศษสำหรับคนมีโรคแล้ว)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold bg-surface/50">ความสบายใจ</td>
                  <td className="p-4 text-emerald-600 font-semibold bg-emerald-50/20">อุ่นใจเต็มร้อย เกิดอะไรขึ้นเคลมได้ทันที</td>
                  <td className="p-4 text-red-600 bg-red-50/25">ระแวงและกังวลว่าจะเคลมได้ไหม หรือเกิดปัญหากลางคัน</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <AlertCircle size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                3. ระวังเรื่อง "ระยะเวลารอคอย" (Waiting Period)
              </h3>
              <p className="text-on-surface/75 text-base">
                หลายคนเข้าใจผิดว่า <em>"เจ็บคอวันนี้ พรุ่งนี้ทำประกัน แล้ววันถัดไปจะไปเจาะเลือดเคลมได้เลย"</em> ซึ่งเป็นไปไม่ได้ค่ะ! ประกันสุขภาพจะมีเกณฑ์ระยะเวลารอคอยเพื่อคัดกรองโรค ดังนี้:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-on-surface/70 text-sm pl-2">
                <li><strong>30 วันแรก</strong>: ช่วงรอคอยสำหรับโรคทั่วไป (อุบัติเหตุคุ้มครองทันที แต่โรคทั่วไปใน 30 วันแรกจะยังเคลมไม่ได้)</li>
                <li><strong>120 วันแรก</strong>: ช่วงรอคอยสำหรับโรคเฉพาะกลุ่ม หรือโรคเรื้อรัง เช่น เนื้องอก, ริดสีดวง, นิ่ว, ต้อกระจก, ไส้เลื่อน เป็นต้น</li>
              </ul>
              <p className="text-on-surface/75 text-base mt-3">
                ดังนั้นทำตอนแข็งแรงดีที่สุด เพราะเมื่อเกิดความเจ็บป่วยขึ้นในอนาคต ระยะรอคอยเหล่านี้ก็ผ่านพ้นไปหมดแล้วค่ะ เคลมรักษาแบบรวดเร็วไร้กังวลได้ทันที!
              </p>
            </div>
          </div>
        </div>

        {/* Summary Wrap-up */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-[2.5rem] p-10 mt-12 text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xl font-bold text-primary">อยากจับคู่วางแผนประกันสุขภาพให้คุ้มค่าที่สุด ทักหาพี่ฝ้ายเลยค่ะ</h4>
            <p className="text-sm text-on-surface/70">
              พี่ฝ้ายพร้อมคัดเลือกเบี้ยที่ดีที่สุด และสัดส่วนที่ลงตัวสำหรับวัยและอาชีพของคุณ หมดกังวลว่าจะเจอเงื่อนไขหรือศัพท์ยากๆ ในการคุ้มครอง ปรึกษาฟรี ไม่มีข้อผูกมัดใดๆ ทั้งสิ้นค่ะ!
            </p>
          </div>
          <button 
            onClick={openConsultation}
            className="btn-primary shrink-0 mt-6 md:mt-0 shadow-lg shadow-primary/20"
          >
            ปรึกษาพี่ฝ้ายฟรี
          </button>
        </div>
      </div>
    );
  };

  // Content for 5 mistakes when buying savings insurance article (ID 2)
  const renderSavingsInsuranceMistakesContent = () => {
    return (
      <div className="space-y-12 text-on-surface/80 text-base md:text-lg leading-relaxed font-sans">
        {/* Intro */}
        <p className="font-medium text-xl text-primary border-l-4 border-secondary pl-4 py-1">
          หลายคนสนใจประกันสะสมทรัพย์ เพราะอยากมีเงินก้อนในอนาคต พร้อมได้ความคุ้มครองชีวิตระหว่างทาง
          <br /><br />
          แต่ก่อนตัดสินใจเลือกแผน มีบางจุดที่หลายคนมักพลาดโดยไม่รู้ตัวเกือบทุกครั้งค่ะ พี่ฝ้ายขอสรุป 5 ข้อผิดพลาดคลาสสิกนี้ที่คุณควรรู้ไว้ก่อนนะคะ!
        </p>

        {/* Section 1 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                1. ดูแค่ “เงินคืน” แต่ไม่ดูระยะเวลาส่งเบี้ย
              </h3>
              <p className="text-on-surface/75 text-base">
                บางแผนอาจมีเงินคืนระหว่างทาง หรือมีเงินครบกำหนดสัญญาก้อนโตดูน่าสนใจมากค่ะ แต่สิ่งที่ควรดูควบคู่กันเสมอคือ <strong>"ต้องส่งเบี้ยกี่ปี และกรมธรรม์คุ้มครองถึงเมื่อไหร่"</strong>
              </p>
              <p className="text-on-surface/70 text-sm mt-2">
                เพราะถ้าเลือกระยะเวลาส่งเบี้ยไม่เหมาะกับรายรับหรือช่วงอายุการทำงานของเรา อาจหมุนเงินไม่ทันจนกลายเป็นภาระระยะยาวได้ค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <Calendar size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                2. ไม่เช็กว่าเงินก้อนจะได้ “ปีไหน”
              </h3>
              <p className="text-on-surface/75 text-base">
                ประกันสะสมทรัพย์แต่ละแบบมีจังหวะและเงื่อนไขการรับเงินที่ไม่เหมือนกันเลยค่ะ:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-on-surface/70 text-sm pl-2">
                <li>บางแบบได้เงินคืนระหว่างทางในทุกๆ ปี หรือทุกกี่ปี</li>
                <li>บางแบบไม่มีระหว่างโครงการ แต่เน้นได้เงินก้อนใหญ่ตอนครบกำหนดสัญญา</li>
              </ul>
              <p className="text-on-surface/75 text-base mt-2">
                ดังนั้นก่อนเลือกควรถามเป้าหมายตัวเองให้ชัดว่า <strong>ต้องการใช้เงินช่วงไหนกันแน่?</strong> เช่น เตรียมไว้จ่ายค่าเทอมลูก ใช้ตอนเกษียณ หรืออยากเก็บเป็นเงินสำรองสำหรับโปรเจกต์ในอนาคตค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <Wallet size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                3. เลือกจากค่าเบี้ยที่ “พอจ่ายวันนี้” แต่ไม่ดูระยะยาว
              </h3>
              <p className="text-on-surface/75 text-base">
                วันนี้คุณอาจจะทำงานหรือธุรกิจกำลังรุ่งเรือง ทำให้รู้สึกว่าจ่ายไหว สบายๆ ชิวๆ แต่พึงระลึกไว้เสมอว่าประกันสะสมทรัพย์เป็นแผนที่คุณต้องส่งต่อเนื่องหลายปี (เช่น 5 ปี, 10 ปี หรือนานกว่านั้นสำหรับบางแผน)
              </p>
              <p className="text-on-surface/70 text-sm mt-2">
                พี่ฝ้ายแนะนำว่าควรคำนาณและเลือกเบี้ยประกันสะสมทรัพย์ในสัดส่วนที่ไม่กดดันสภาพคล่องทางการเงินของเราจนเกินไป และยังมีเงินเหลืองบสำหรับจ่ายค่าใช้จ่ายจำเป็นอื่นๆ ได้อย่างไร้กังวลด้วยค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                4. เข้าใจผิดว่า “เงินคืน” เท่ากับ “กำไรทั้งหมด”
              </h3>
              <p className="text-on-surface/75 text-base">
                นี่เป็นหนึ่งในเรื่องที่เข้าใจผิดบ่อยที่สุดค่ะ! เงินคืนหรือเงินครบกำหนดสัญญาทั้งหมด ควรพิจารณาร่วมกับเบี้ยประกันรวมที่จ่ายไป และมูลค่าความคุ้มครองชีวิตที่ได้รับระหว่างสัญญาอยู่เสมอ
              </p>
              <p className="text-on-surface/70 text-sm mt-2">
                ไม่ควรดูเฉพาะตัวเลขเงินคืนบางช่วงที่ตัวแทนนำเสนอเพียงหน้าเดียว เพราะอาจทำให้เราเข้าใจผลตอบแทนและความคุ้มค่าคลาดเคลื่อนไปจากความเป็นจริงได้ค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <FileText size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                5. ไม่อ่านเงื่อนไขก่อนเซ็นชื่อ
              </h3>
              <p className="text-on-surface/75 text-base">
                ก่อนจรดปากกาเซ็นลงนามในเอกสารข้อเสนอ ควรเช็กรายละเอียดสำคัญเชิงลึกเหล่านี้ให้ครบถ้วนก่อนเสมอนะคะ:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-on-surface/70 text-sm pl-2">
                <li>ระยะเวลาชำระเบี้ย และระยะเวลาคุ้มครอง</li>
                <li>เงินคืนเฉลี่ยในแต่ละช่วงปี และการคืนแบบรับรองหรือไม่รับรองผลการดำเนินงาน</li>
                <li>มูลค่าเวนคืนกรมธรรม์ (หากต้องยกเลิกสัญญากลางคันจะเหลือมูลค่าเท่าไหร่)</li>
                <li>เงื่อนไขการขอยกเลิก และข้อยกเว้นต่างๆ</li>
              </ul>
              <p className="text-on-surface/75 text-base mt-2">
                หากอ่านแล้วมีข้อใดที่ยังรู้สึกไม่มั่นใจหรือมีศัพท์เทคนิคที่คลุมเครือ ควรถามตัวแทนให้ชัดและอธิบายจนเข้าใจร้อยเปอร์เซ็นต์ เพราะประกันสะสมทรัพย์คือสัญญารักษาเงินออมที่ต้องอยู่กับเราในระยะยาวค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Summary Wrap-up */}
        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 space-y-3">
          <h4 className="text-xl font-bold text-primary">สรุปส่งท้ายจากพี่ฝ้าย</h4>
          <p className="text-on-surface/85 text-base">
            ประกันสะสมทรัพย์ไม่ใช่แค่เรื่องของการคำนวณว่า <strong>“ได้เงินคืนรวมเท่าไหร่”</strong> เท่านั้นค่ะ แต่หัวใจสำคัญคือแผนเหล่านั้นต้องเหมาะกับเป้าหมายทางการเงินของคุณอย่างลงตัว มีจังหวะเวลาในการใช้เงินที่ตรงกับชีวิต และเหมาะกับความสามารถในการชำระเบี้ยตลอดเส้นทางการออมด้วยค่ะ
          </p>
          <p className="text-on-surface/70 text-sm">
            เลือกแผนออมที่คุ้มครองชีวิตและเหมาะกับการใช้ชีวิตจริงๆ ไม่จำเป็นต้องจ่ายเกินตัวหรือไปเสี่ยงเกินขอบเขตจนกลายเป็นความตึงเครียดเลยค่ะ
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-[2.5rem] p-10 mt-12 text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xl font-bold text-primary">อยากให้พี่ฝ้ายช่วยคำนวณแบบประกันสะสมทรัพย์ที่คุ้มค่ายอดนิยม ทัก inbox มาได้เลยค่ะ</h4>
            <p className="text-sm text-on-surface/70 font-medium">
              พี่ฝ้ายช่วยเปรียบเทียบเบี้ยของยี่ห้อต่างๆ พร้อมหาแบบสะสมทรัพย์ที่ผลตอบแทนลงตัว เข้าใจง่ายไม่มีซ่อนเงื่อน เพื่อให้คุณตัดสินใจได้คุ้มค่าอย่างมั่นใจที่สุดค่ะ ปรึกษาได้ฟรี ปลอดโปร่ง ไม่มีผูกมัดค่ะ!
            </p>
          </div>
          <button 
            onClick={openConsultation}
            className="btn-primary shrink-0 mt-6 md:mt-0 shadow-lg shadow-primary/20"
          >
            ทักสอบถามกับพี่ฝ้าย
          </button>
        </div>
      </div>
    );
  };

  // Content for Pension VS Provident Fund article (ID 3)
  const renderPensionVsProvidentFundContent = () => {
    return (
      <div className="space-y-12 text-on-surface/80 text-base md:text-lg leading-relaxed font-sans">
        {/* Intro */}
        <p className="font-medium text-xl text-primary border-l-4 border-secondary pl-4 py-1">
          หลายคนเริ่มวางแผนเกษียณ แล้วเจอ 2 ตัวเลือกที่ถูกพูดถึงบ่อยมาก
          <br /><strong className="text-primary font-extrabold">"ประกันบำนาญ"</strong> และ <strong className="text-secondary font-extrabold">"กองทุนสำรองเลี้ยงชีพ"</strong>
          <br /><br />
          ทั้งสองอย่างช่วยวางแผนเงินระยะยาวได้เหมือนกัน แต่ “บทบาท” และ “หน้าที่” ในการทำงานกลับไม่เหมือนกันเลยค่ะ วันนี้พี่ฝ้ายจะมาชำแหละอธิบายแบบเข้าใจง่ายที่สุดกันค่ะ!
        </p>

        {/* Section 1 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                ประกันบำนาญ คืออะไร?
              </h3>
              <p className="text-on-surface/75 text-base">
                <strong>ประกันบำนาญ</strong> คือประกันชีวิตรูปแบบหนึ่งที่ออกแบบมาเป็นพิเศษเพื่อสร้างรายรับหลังเกษียณโดยตรง
              </p>
              <p className="text-on-surface/70 text-sm mt-3 leading-relaxed">
                โดยทั่วไป ผู้เอาประกันจะชำระเบี้ยตามระยะเวลาที่กำหนด (เช่น ส่ง 5 ปี, 10 ปี หรือส่งถึงอายุ 55, 60 ปี) และเมื่อถึงอายุรับบำนาญตามเงื่อนไขกรมธรรม์ บริษัทประกันจะเริ่มจ่ายเงินคืนให้เป็นรายงวดอย่างสม่ำเสมอตามที่ระบุไว้ในแบบประกันจนถึงอายุ 85, 90 หรือตามกรมธรรม์เลยทีเดียวค่ะ
              </p>
              <div className="bg-emerald-50 text-emerald-850 p-4 rounded-2xl text-sm border border-emerald-100 mt-4 space-y-1">
                <strong>💡 พูดง่ายๆ คือ:</strong> เน้นการสร้างรายรับประจำหลังเกษียณอย่างมั่นคง แน่นอน ไม่ผันผวน พร้อมความคุ้มครองชีวิตตามเงื่อนไขกรมธรรม์
                <br /><br />
                และเบี้ยประกันชีวิตแบบบำนาญนี้ ยังสามารถใช้สิทธิลดหย่อนภาษีได้ตามหลักเกณฑ์ของกรมสรรพากร โดยต้องดูเงื่อนไขของแบบประกันและเพดานสิทธิลดหย่อนในปีภาษีนั้น ๆ ประกอบด้วยค่ะ
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-3xl p-8 border border-surface-container shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <Coins size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
                กองทุนสำรองเลี้ยงชีพ คืออะไร?
              </h3>
              <p className="text-on-surface/75 text-base">
                <strong>กองทุนสำรองเลี้ยงชีพ (Provident Fund)</strong> คือกองทุนที่นายจ้างและลูกจ้างร่วมกันจัดตั้งขึ้น เพื่อออมเงินระยะยาวให้ลูกจ้าง โดยมีทั้งเงินสะสมจากลูกจ้างและเงินสมทบจากนายจ้าง แล้วนำไปลงทุนผ่านผู้จัดการกองทุน
              </p>
              <div className="mt-3 pl-4 border-l-2 border-primary/20 space-y-2 text-on-surface/70 text-sm">
                <p>
                  <strong>• เงินสะสม:</strong> ส่วนที่เราจ่ายออมเอง (ถูกหักจากกระบวนการหักภาษีเงินได้ตามสัดส่วนที่สมัครไว้)
                </p>
                <p>
                  <strong>• เงินสมทบ:</strong> ส่วนที่บริษัทยินดีช่วยจ่ายทบให้ออมเพิ่มเสมือนเป็นโบนัสสวัสดิการ
                </p>
              </div>
              <p className="text-on-surface/70 text-sm mt-3 leading-relaxed">
                เงินก้อนนี้จะมอบหมายให้บริษัทผู้จัดการกองทุนนำไปลงทุนในกองทรัพย์สินที่ผ่านการกลั่นกรองตามแผนที่ลูกจ้างชอบ เพื่อเพิ่มศักยภาพของการสร้างมูลค่าเงินปั้นฝันในอนาคต
              </p>
              <div className="bg-blue-50 text-blue-850 p-4 rounded-2xl text-sm border border-blue-100 mt-4">
                <strong>💡 พูดง่ายๆ คือ:</strong> เป็นสวัสดิการจากที่ทำงาน ที่ช่วยออมและลงทุนเพื่ออนาคต
                <br /><br />
                ที่สำคัญ เงินสะสมที่จ่ายเข้ากองทุนสำรองเลี้ยงชีพสามารถใช้สิทธิทางภาษีได้ตามเงื่อนไขของกรมสรรพากร โดยมีเพดานและหลักเกณฑ์ที่ควรตรวจสอบในแต่ละปีภาษีค่ะ
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Table */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-on-surface text-center mt-8">
            📊 ตารางเปรียบเทียบแบบเข้าใจง่าย
          </h3>
          <div className="overflow-x-auto rounded-3xl border border-surface-container shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 font-extrabold text-sm md:text-base">หัวข้อ</th>
                  <th className="p-4 font-extrabold text-sm md:text-base border-l border-primary-dark">ประกันบำนาญ</th>
                  <th className="p-4 font-extrabold text-sm md:text-base border-l border-primary-dark">กองทุนสำรองเลี้ยงชีพ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container text-sm md:text-base">
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">จุดประสงค์หลัก</td>
                  <td className="p-4 border-l border-surface-container">สร้างรายรับหลังเกษียณ และมีความคุ้มครองชีวิตตามแบบประกัน</td>
                  <td className="p-4 border-l border-surface-container">ออมและลงทุนระยะยาวผ่านสวัสดิการที่ทำงาน</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">ใครเป็นคนเริ่ม</td>
                  <td className="p-4 border-l border-surface-container">ผู้เอาประกันเลือกซื้อเอง</td>
                  <td className="p-4 border-l border-surface-container">ต้องมีนายจ้างจัดตั้งกองทุนให้</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">เงินที่จ่ายเข้า</td>
                  <td className="p-4 border-l border-surface-container">เบี้ยประกันตามแผนที่เลือก</td>
                  <td className="p-4 border-l border-surface-container">เงินสะสมจากลูกจ้าง + เงินสมทบจากนายจ้าง</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">ผลตอบแทน</td>
                  <td className="p-4 border-l border-surface-container">เป็นไปตามเงื่อนไขกรมธรรม์ เช่น เงินบำนาญตามช่วงอายุที่กำหนด</td>
                  <td className="p-4 border-l border-surface-container">ขึ้นอยู่กับนโยบายการลงทุนและผลการดำเนินงานของกองทุน</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">ความคุ้มครองชีวิต</td>
                  <td className="p-4 border-l border-surface-container">มีตามเงื่อนไขของกรมธรรม์</td>
                  <td className="p-4 border-l border-surface-container">ไม่ใช่ประกันชีวิตโดยตรง แต่มีสิทธิประโยชน์ตามข้อบังคับกองทุน</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">ความยืดหยุ่น</td>
                  <td className="p-4 border-l border-surface-container">เลือกแบบประกัน ทุนประกัน และเบี้ยตามความเหมาะสม</td>
                  <td className="p-4 border-l border-surface-container">เลือกได้ตามตัวเลือกที่กองทุนของบริษัทกำหนด</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">เหมาะกับใคร</td>
                  <td className="p-4 border-l border-surface-container">คนที่อยากมีรายรับประจำหลังเกษียณ และต้องการความคุ้มครองชีวิต</td>
                  <td className="p-4 border-l border-surface-container">พนักงานประจำที่บริษัทมีกองทุนสำรองเลี้ยงชีพ และอยากสะสมเงินเกษียณผ่านนายจ้าง</td>
                </tr>
                <tr className="hover:bg-surface/30">
                  <td className="p-4 font-bold text-on-surface bg-surface/5">สิทธิภาษี</td>
                  <td className="p-4 border-l border-surface-container">อาจลดหย่อนได้ตามเงื่อนไขประกันบำนาญ</td>
                  <td className="p-4 border-l border-surface-container">อาจลดหย่อนได้ตามเงินสะสมและเงื่อนไขภาษี</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4 - Summary */}
        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 space-y-4">
          <h4 className="text-xl font-bold text-primary">📌 สรุปให้จำง่ายโดยสไตล์พี่ฝ้าย</h4>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-6 rounded-2xl border border-surface-container">
              <span className="inline-block bg-[#06C755]/10 text-[#06C755] font-extrabold text-xs px-3 py-1.5 rounded-full mb-3">ประกันบำนาญ</span>
              <p className="text-on-surface font-extrabold text-base">เหมาะกับคนที่อยากล็อกแผนรายรับหลังเกษียณไว้ล่วงหน้า และต้องการความคุ้มครองชีวิตควบคู่ไปด้วย</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-surface-container">
              <span className="inline-block bg-[#1877F2]/10 text-[#1877F2] font-extrabold text-xs px-3 py-1.5 rounded-full mb-3">กองทุนสำรองเลี้ยงชีพ</span>
              <p className="text-on-surface font-extrabold text-base">เหมาะกับพนักงานที่มีสวัสดิการจากบริษัท เพราะมีเงินสะสมของเรา และอาจมีเงินสมทบจากนายจ้างช่วยเพิ่มเงินออมระยะยาว</p>
            </div>
          </div>
          <p className="text-on-surface/75 text-base pt-3 border-t border-primary/10">
            <strong>ทั้งสองอย่างไม่จำเป็นต้องเลือกอย่างใดอย่างหนึ่งเสมอไปค่ะ!</strong> บางคนอาจใช้กองทุนสำรองเลี้ยงชีพเป็นฐานเงินเกษียณ แล้วเริ่มเสริมด้วยประกันบำนาญ เพื่อวางแผนระบบเงินบำนาญแบบรายรับประจำมั่นคงคู่กันในอนาคตได้อย่างสอดประสานกันเต็มรูปแบบที่สุดค่ะ
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-[2.5rem] p-10 mt-12 text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xl font-bold text-primary">สนใจวางแผนเกษียณหรือคำนวณเบี้ยลดหย่อนภาษีปีนี้ ทัก Inbox คุยกับพี่ฝ้ายได้เสมอนะคะ</h4>
            <p className="text-sm text-on-surface/70 font-medium">
              พี่ฝ้ายช่วยให้สิทธิประโยชน์ทางภาษีคู่คุณภาพชีวิตเกษียณที่หรูสบายอุ่นใจ แนะนำแบบประกันเข้าใจง่ายก่อนตัดสินใจค่ะ ยินดีแชร์คู่มือเกษียณฟรีแบบน่ารักๆ ไม่มีเงื่อนไขผูกมัดค่า!
            </p>
          </div>
          <button 
            onClick={openConsultation}
            className="btn-primary shrink-0 mt-6 md:mt-0 shadow-lg shadow-primary/20"
          >
            ทักสอบถามกับพี่ฝ้าย
          </button>
        </div>
      </div>
    );
  };

  // Content for other articles (Fallback detail template)
  const renderGeneralArticleContent = () => {
    return (
      <div className="space-y-8 text-on-surface/80 text-base md:text-lg leading-relaxed">
        <p className="font-semibold text-xl leading-relaxed text-on-surface">
          {article.excerpt}
        </p>
        <p>
          การเลือกทำประกันในแต่ละช่วงชีวิตจำเป็นต้องได้รับการพิจารณาอย่างรอบคอบ ทั้งเรื่องภาระทางการเงิน สุขภาพร่างกาย ตลอดจนเป้าหมายในอนาคตของครอบครัว เพื่อให้ตรงกับจุดประสงค์การคุ้มครองอย่างคุ้มค่าสูงสุด
        </p>
        <div className="p-6 bg-surface-container rounded-2xl border border-surface-container my-8 flex gap-4 items-start">
          <AlertCircle className="text-primary shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-on-surface mb-1">เคล็ดลับการเตรียมความพร้อมโดยพี่ฝ้าย</h4>
            <p className="text-sm text-on-surface/70">
              ตรวจสอบสวัสดิการเดิมและเป้าหมายการเงินของคุณเสมอ เพื่อไม่ให้ทำซ้ำซ้อนและสามารถลดหย่อนภาษีได้อย่างถูกต้องตามกฎหมายกำหนดค่ะ
            </p>
          </div>
        </div>
        <p>
          สุดท้ายนี้ หากคุณมีความกังวลเกี่ยวกับการเริ่มต้นวางแผนการเงินหรือการเปรียบเทียบแบบประกันที่หลากหลายในตลาด พี่ฝ้ายพร้อมคัดเลือกแผนประกันที่สอดคล้องกับพฤติกรรม สุขภาพ และงบประมาณของคุณ เพื่อความคุ้มค่าและเข้าใจง่ายที่สุดค่ะ
        </p>
        <div className="flex justify-center pt-8">
          <button 
            onClick={openConsultation}
            className="btn-primary"
          >
            ทักแชทปรึกษาเรื่องนี้กับพี่ฝ้าย
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-on-surface/60 hover:text-primary transition-colors font-bold text-sm mb-8"
        >
          <ArrowLeft size={16} />
          กลับหน้าสาระประกัน
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Tag size={12} />
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-on-surface/50 font-medium pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              {article.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              {article.readTime}
            </div>
            <div className="flex items-center gap-1.5">
              <User size={14} />
              โดย พี่ฝ้าย Proud Life Insurance
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-[2.5rem] overflow-hidden mb-12 border border-surface-container shadow-lg bg-surface-container">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-auto max-h-[600px] object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {articleId === 5 ? (
            renderSpecialArticleContent()
          ) : articleId === 1 ? (
            renderHealthInsuranceTimingContent()
          ) : articleId === 2 ? (
            renderSavingsInsuranceMistakesContent()
          ) : articleId === 3 ? (
            renderPensionVsProvidentFundContent()
          ) : (
            renderGeneralArticleContent()
          )}
        </article>

        {/* Footer actions */}
        <div className="border-t border-surface-container mt-16 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-surface-container">
              <img src="/phi-fai.webp" alt="พี่ฝ้าย" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-on-surface">พี่ฝ้าย เข้าใจประกัน</div>
              <div className="text-xs text-on-surface/50 font-medium">ที่ปรึกษาประกันชีวิตแบบ Full-time</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => alert("คัดลอกลิงก์ไปยังคลิปบอร์ดแล้วค่ะ")} 
              className="p-3 bg-white hover:bg-surface-container border border-surface-container text-on-surface/70 rounded-full transition-colors"
              title="แชร์บทความ"
            >
              <Share2 size={18} />
            </button>
            <a 
              href="https://line.me/ti/p/@proudlifeinsurance" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-5 py-2.5 bg-[#06C755] text-white font-extrabold rounded-full hover:opacity-90 transition-opacity text-sm shadow-sm"
            >
              <MessageCircle size={18} />
              แชร์ทาง Line
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
