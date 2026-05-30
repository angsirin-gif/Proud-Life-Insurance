import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ChevronRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    id: 5,
    title: "5 คำในกรมธรรม์ที่ควรรู้ก่อนเซ็นชื่อ",
    excerpt: "ก่อนทำประกัน หลายคนอาจรู้สึกว่ากรมธรรม์อ่านยาก มีศัพท์เฉพาะเยอะ แต่จริง ๆ แล้วมีคำสำคัญไม่กี่คำที่ถ้าเข้าใจ จะช่วยให้เรารู้ว่า “ประกันที่กำลังจะทำ คุ้มครองอะไร จ่ายยังไง และมีข้อจำกัดตรงไหน” ค่ะ วันนี้พี่ฝ้ายสรุป 5 คำในกรมธรรม์ที่ควรรู้ก่อนเซ็นชื่อ เพื่อผลประโยชน์สูงสุดของคุณค่ะ",
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

const CATEGORIES = ["ทั้งหมด", "ความรู้ประกันชีวิต", "ความรู้ประกันสุขภาพ", "วางแผนการเงิน", "วางแผนเกษียณ", "บริการลูกค้า"];

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "ทั้งหมด" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-surface">
      {/* Header Section */}
      <section className="bg-white py-20 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <BookOpen size={16} />
                Knowledge Base
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6">
                สาระน่ารู้เรื่อง <span className="text-primary italic">ประกันชีวิต</span>
              </h1>
              <p className="text-lg text-on-surface/70 leading-relaxed">
                คลังบทความที่รวบรวมเทคนิค วางแผนการเงิน และสาระสำคัญที่คุณต้องรู้ เพื่อให้ทุกการตัดสินใจเรื่องประกันคุ้มค่าที่สุดสำหรับคุณและครอบครัว
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-8 sticky top-20 z-30 bg-surface/80 backdrop-blur-xl border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'bg-white text-on-surface/70 hover:bg-surface-container'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30" size={18} />
              <input 
                type="text" 
                placeholder="ค้นหาบทความ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-white border border-surface-container rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-[3rem] overflow-hidden border border-surface-container hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary text-xs font-bold shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs text-on-surface/50 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Tag size={14} />
                        {article.readTime}
                      </div>
                    </div>
                    <Link to={`/articles/${article.id}`} className="block">
                      <h3 className="text-xl font-bold text-on-surface mb-4 leading-snug group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-on-surface/60 text-sm leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      to={`/articles/${article.id}`} 
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                    >
                      อ่านต่อเพิ่มเติม
                      <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-surface-container">
              <p className="text-on-surface/50 text-lg font-medium">ไม่พบบทความที่คุณค้นหาค่ะ ลองค้นหาคำอื่นดูนะคะ 😊</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-white border-2 border-primary/20 text-primary font-extrabold rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xl shadow-primary/5">
              โหลดบทความเพิ่มเติม
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                ไม่อยากพลาดสาระดีๆ <br/>กดติดตามเราไว้ได้เลย
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                รับเทคนิคการวางแผนการเงินและอัปเดตแผนประกันใหม่ล่าสุด ส่งตรงถึงอีเมลคุณทุกสัปดาห์
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="อีเมลของคุณ"
                  className="flex-1 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
                />
                <button 
                  onClick={() => alert("ขอบคุณสำหรับการสมัครร่วมรับข่าวสารค่ะ!")}
                  className="px-10 py-4 bg-white text-primary font-black rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl shadow-white/10"
                >
                  สมัครสมาชิก
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
