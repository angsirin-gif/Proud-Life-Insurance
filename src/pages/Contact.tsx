import { motion } from 'motion/react';
import { Phone, MessageCircle, Facebook, MapPin, Mail, Instagram, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Contact() {
  const contactChannels = [
    { 
      label: 'โทรสายตรง', 
      value: '089-696-5397', 
      icon: <Phone size={24} />, 
      color: 'bg-primary/10 text-primary',
      href: 'tel:0896965397'
    },
    { 
      label: 'LINE OFFICIAL', 
      value: '@proudlifeinsurance', 
      icon: <MessageCircle size={24} />, 
      color: 'bg-green-100 text-green-700',
      href: 'https://line.me/ti/p/@proudlifeinsurance'
    },
    { 
      label: 'FACEBOOK', 
      value: 'Proud Life Insurance', 
      icon: <Facebook size={24} />, 
      color: 'bg-blue-100 text-blue-700',
      href: 'https://www.facebook.com/proudlifeinsurance'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[12px] border-white/20 shadow-2xl shrink-0"
          >
            <img 
              src="/P_Fai_8.webp" 
              alt="ที่ปรึกษาประกันภัย" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              ติดต่อเรา
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl opacity-90 max-w-2xl mx-auto lg:mx-0"
            >
              พร้อมให้คำปรึกษาและดูแลคุณในทุกแผนประกันชีวิตและสุขภาพ
              ทักหาเราได้ทุกช่องทางที่คุณสะดวก
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-24 mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {contactChannels.map((channel, idx) => (
              <motion.a
                key={idx}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white pt-16 pb-12 px-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-surface-container flex flex-col items-center justify-center text-center group"
              >
                <div className={`w-16 h-16 rounded-xl ${channel.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                <p className="text-xs font-black text-on-surface/50 uppercase tracking-widest mb-3">{channel.label}</p>
                <p className="text-xl font-black text-primary">{channel.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Info & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-primary">สำนักงานของเรา</h2>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">ที่ตั้ง</h4>
                      <p className="text-on-surface/70 leading-relaxed text-sm">
                        ร้าน Proud Coffee Roaster สาขาบางบอน<br/>
                        819/156 โครงการชีวาบิสโฮม เอกชัย-บางบอน ถ.เอกชัย แขวงคลองบางบอน เขตบางบอน กรุงเทพมหานคร 10150
                        <a 
                          href="https://share.google/BPxfmV05Vo8F8IKSL" 
                          target="_blank" 
                          rel="noreferrer"
                          className="block text-primary font-bold mt-2 hover:underline"
                        >
                          ดูบน Google Maps
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">เวลาทำการ</h4>
                      <p className="text-on-surface/70">
                        จันทร์ - ศุกร์: 08.00 น. - 17.00 น.<br/>
                        (หรือปรึกษาผ่าน LINE ได้ตลอด 24 ชม.)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">อีเมล</h4>
                      <p className="text-on-surface/70">angsirin@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">เลขที่ใบอนุญาต</h4>
                      <p className="text-on-surface/70">6901007265</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center shrink-0">
                      <TrendingUp className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">เว็บไซต์</h4>
                      <p className="text-on-surface/70">www.proudlifeinsurrance.com</p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-inner border border-surface-container h-[400px] bg-surface-container-lowest relative">
                <iframe
                  title="Proud Life Insurance Location"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8075325534737!2d100.41658097559483!3d13.669464299193502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299a4cb56169d%3A0x63f1388c0f6b80fd!2sProud%20Coffee%20Roaster!5e0!3m2!1sen!2sth!4v1777038654750!5m2!1sen!2sth"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-12 rounded-[3rem] border border-surface-container shadow-sm">
              <h2 className="text-3xl font-black text-primary mb-10 text-center">ส่งข้อความหาเรา</h2>
              <p className="text-center text-on-surface/60 mb-12">
                หากคุณมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม สามารถส่งข้อความหาเราได้ทันที 
                ทีมงานจะติดต่อกลับโดยเร็วที่สุด
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface/50">ชื่อของคุณ</label>
                    <input className="w-full bg-white border border-surface-container-high rounded-full px-6 py-3 outline-none focus:border-primary transition-all" placeholder="คุณดีใจ มีความสุข" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface/50">เบอร์โทรศัพท์</label>
                    <input className="w-full bg-white border border-surface-container-high rounded-full px-6 py-3 outline-none focus:border-primary transition-all" placeholder="08x-xxx-xxxx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface/50">อีเมล</label>
                  <input className="w-full bg-white border border-surface-container-high rounded-full px-6 py-3 outline-none focus:border-primary transition-all" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface/50">หัวข้อติดต่อ</label>
                  <select className="w-full bg-white border border-surface-container-high rounded-full px-6 py-3 outline-none focus:border-primary transition-all appearance-none" defaultValue="โปรดเลือกหัวข้อติดต่อ">
                    <option>โปรดเลือกหัวข้อติดต่อ</option>
                    <option>ขอข้อมูลแผนประกัน</option>
                    <option>สอบถามสถานะกรมธรรม์</option>
                    <option>แจ้งปัญหาการใช้งาน</option>
                    <option>อื่นๆ</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface/50">ข้อความ</label>
                  <textarea className="w-full bg-white border border-surface-container-high rounded-[2rem] px-6 py-3 outline-none focus:border-primary transition-all h-32" placeholder="พิมพ์ข้อความของคุณที่นี่..." />
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Bar */}
      <section className="py-12 bg-surface text-center">
        <h3 className="font-bold text-primary mb-8">ติดตามเราผ่านโซเชียลมีเดีย</h3>
        <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/proudlifeinsurance" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 hover:scale-110 transition-transform"><Facebook /></a>
          <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-600 hover:scale-110 transition-transform"><Instagram /></a>
          <a href="https://line.me/ti/p/@proudlifeinsurance" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 hover:scale-110 transition-transform"><MessageCircle /></a>
        </div>
      </section>
    </div>
  );
}
