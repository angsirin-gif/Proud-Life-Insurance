/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Facebook, 
  Menu, 
  ChevronDown,
  MapPin,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WholeLifeInsurance from './pages/WholeLifeInsurance';
import AccidentInsurance from './pages/AccidentInsurance';
import CriticalIllnessInsurance from './pages/CriticalIllnessInsurance';
import HealthInsurance from './pages/HealthInsurance';
import SavingsInsurance from './pages/SavingsInsurance';
import PensionInsurance from './pages/PensionInsurance';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import AllProducts from './pages/AllProducts';

// Individual Products
import LifeReady from './pages/products/LifeReady';
import TwelvePL from './pages/products/TwelvePL';
import ISmart806 from './pages/products/ISmart806';
import LifeTreasure from './pages/products/LifeTreasure';
import PA from './pages/products/PA';
import IShield from './pages/products/iShield';
import CI123 from './pages/products/CI123';
import CriticalIllnessCare from './pages/products/CriticalIllnessCare';
import HealthUltra from './pages/products/HealthUltra';
import MEAExtra from './pages/products/MEAExtra';
import SoShield from './pages/products/SoShield';

// Savings Products
import GlobalIndex16_6 from './pages/products/GlobalIndex16-6';
import SuperSave16_5 from './pages/products/SuperSave16-5';
import UltimateGrowth from './pages/products/UltimateGrowth';

// Pension Products
import BumnanSmart95 from './pages/products/BumnanSmart95';

import FloatingContact from './components/FloatingContact';
import { ConsultationModal } from './components/ConsultationModal';
import { useConsultation } from './context/ConsultationContext';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen: isConsultModalOpen, openConsultation, closeConsultation } = useConsultation();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // SEO Structured Data (JSON-LD)
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": "Proud Life Insurance by พี่ฝ้าย",
      "description": "ที่ปรึกษาประกันชีวิต Proud Life Insurance จริงใจ ดูแลและใส่ใจทุกรายละเอียด",
      "url": "https://ais-dev-3cuy7fio2wvntbdlmgb3n-445288291997.asia-east1.run.app",
      "telephone": "+66896965397",
      "email": "angsirin@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "819/156 โครงการชีวาบิสโฮม เอกชัย-บางบอน ถ.เอกชัย",
        "addressLocality": "Bangbon",
        "addressRegion": "Bangkok",
        "postalCode": "10150",
        "addressCountry": "TH"
      },
      "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      "sameAs": [
        "https://www.facebook.com/proudlifeinsurance"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const categories = [
    { 
      title: 'ประกันชีวิตตลอดชีพ เน้นคุ้มครองชีวิต', 
      href: '/whole-life-insurance',
      subItems: [
        { name: 'LifeReady', href: '/whole-life-insurance/lifeready' },
        { name: '12PL', href: '/whole-life-insurance/12pl' },
        { name: 'iSmart 80/6', href: '/whole-life-insurance/ismart-80-6' },
        { name: 'LifeTreasure', href: '/whole-life-insurance/lifetreasure' },
      ]
    },
    { 
      title: 'ประกันอุบัติเหตุ', 
      href: '/accident-insurance',
      subItems: [
        { name: 'PA', href: '/accident-insurance/pa' },
      ]
    },
    { 
      title: 'ประกันโรคร้ายแรง', 
      href: '/critical-illness-insurance',
      subItems: [
        { name: 'iShield', href: '/critical-illness-insurance/ishield' },
        { name: 'CI123', href: '/critical-illness-insurance/ci123' },
        { name: 'โรคร้ายเบาใจ', href: '/critical-illness-insurance/critical-illness-care' },
        { name: 'โรคร้ายโซชิลด์', href: '/critical-illness-insurance/so-shield' },
      ]
    },
    { 
      title: 'ประกันสุขภาพ ค่ารักษาพยาบาล', 
      href: '/health-insurance',
      subItems: [
        { name: 'iHealthy Ultra', href: '/health-insurance/health-ultra' },
        { name: 'MEA Extra', href: '/health-insurance/mea-extra' },
      ]
    },
    { 
      title: 'ประกันสะสมทรัพย์ ออมเงิน', 
      href: '/savings-insurance',
      subItems: [
        { name: 'Global Index 16/6', href: '/savings-insurance/global-index-16-6' },
        { name: 'Life Super Save 14/5', href: '/savings-insurance/super-save-14-5' },
        { name: 'Ultimate Growth', href: '/savings-insurance/ultimate-growth' },
      ]
    },
    { 
      title: 'ประกันบำนาญ วางแผนภาษี', 
      href: '/pension-insurance',
      subItems: [
        { name: 'บำนาญ สมาร์ท 95', href: '/pension-insurance/bumnan-smart-95' },
      ]
    },
    {
      title: 'ดูแผนทั้งหมด',
      href: '/all-plans',
      icon: <Sparkles size={16} className="text-secondary" />
    }
  ];

  const navLinks = [
    { name: 'หน้าหลัก', href: '/', active: location.pathname === '/' },
    { 
      name: 'แผนประกันส่วนบุคคล', 
      href: '#', 
      active: (location.pathname.includes('insurance') || location.pathname.split('/').length > 2) && location.pathname !== '/contact' && location.pathname !== '/articles',
      subItems: categories
    },
    { name: 'สาระประกัน', href: '/articles', active: location.pathname === '/articles' },
    { name: 'ติดต่อเรา', href: '/contact', active: location.pathname === '/contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo_2.webp" 
              alt="Proud Life Insurance Logo" 
              className="h-12 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subItems ? (
                  <button 
                    className={`text-sm font-semibold transition-colors flex items-center gap-1 ${link.active ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link 
                    to={link.href}
                    className={`text-sm font-semibold transition-colors flex items-center gap-1 ${link.active ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {link.subItems && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-xl border border-surface-container p-4 w-72 grid gap-1">
                      {link.subItems.map((sub: any) => (
                        <div key={sub.title || sub.name} className="relative group/sub">
                          <Link 
                            to={sub.href}
                            className="flex items-center justify-between text-sm text-on-surface-variant hover:text-primary hover:bg-primary/5 p-2.5 rounded-xl transition-all font-medium"
                          >
                            {sub.title || sub.name}
                            {sub.icon && <span className="ml-2">{sub.icon}</span>}
                            {sub.subItems && <ChevronDown size={14} className="-rotate-90 group-hover/sub:rotate-0 transition-transform" />}
                          </Link>
                          
                          {sub.subItems && (
                            <div className="absolute left-full top-0 pl-2 opacity-0 translate-x-2 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:pointer-events-auto transition-all duration-200">
                              <div className="bg-white rounded-xl shadow-xl border border-surface-container p-3 w-56 grid gap-1">
                                {sub.subItems.map((child: any) => (
                                  <Link 
                                    key={child.name}
                                    to={child.href}
                                    className="text-xs text-on-surface-variant hover:text-primary hover:bg-primary/5 p-2 rounded-lg transition-all"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={openConsultation}
              className="btn-primary !px-6 !py-2.5 !text-sm"
            >
              ปรึกษาฟรี
            </button>
          </div>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 z-[60] bg-white p-6 md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <img src="/logo_2.webp" alt="Logo" className="h-10 w-auto" />
                <button onClick={() => setIsMenuOpen(false)} className="text-primary">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-4">
                    {link.subItems ? (
                      <>
                        <div className="text-2xl font-bold text-on-surface block">
                          {link.name}
                        </div>
                        <div className="pl-4 space-y-4 border-l-2 border-primary/10">
                          {link.subItems.map((sub: any) => (
                            <div key={sub.title || sub.name} className="space-y-3">
                              <Link 
                                to={sub.href}
                                className="text-lg font-bold text-on-surface-variant block flex items-center justify-between"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.title || sub.name}
                              </Link>
                              
                              {sub.subItems && (
                                <div className="pl-4 space-y-3 border-l-2 border-secondary/20">
                                  {sub.subItems.map((child: any) => (
                                    <Link 
                                      key={child.name}
                                      to={child.href}
                                      className="text-base font-medium text-on-surface-variant/80 block"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                        to={link.href}
                        className={`block py-2 text-2xl font-bold ${link.active ? 'text-primary' : 'text-on-surface'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    openConsultation();
                  }}
                  className="btn-primary w-full py-4 text-xl"
                >
                  ปรึกษาฟรี
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whole-life-insurance" element={<WholeLifeInsurance />} />
        
        {/* Whole Life Individual Products */}
        <Route path="/whole-life-insurance/lifeready" element={<LifeReady />} />
        <Route path="/whole-life-insurance/12pl" element={<TwelvePL />} />
        <Route path="/whole-life-insurance/ismart-80-6" element={<ISmart806 />} />
        <Route path="/whole-life-insurance/lifetreasure" element={<LifeTreasure />} />

        <Route path="/accident-insurance" element={<AccidentInsurance />} />
        <Route path="/accident-insurance/pa" element={<PA />} />
        <Route path="/critical-illness-insurance" element={<CriticalIllnessInsurance />} />
        <Route path="/critical-illness-insurance/ishield" element={<IShield />} />
        <Route path="/critical-illness-insurance/ci123" element={<CI123 />} />
        <Route path="/critical-illness-insurance/critical-illness-care" element={<CriticalIllnessCare />} />
        <Route path="/critical-illness-insurance/so-shield" element={<SoShield />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/health-insurance/health-ultra" element={<HealthUltra />} />
        <Route path="/health-insurance/mea-extra" element={<MEAExtra />} />
        
        {/* Savings Individual Products */}
        <Route path="/savings-insurance" element={<SavingsInsurance />} />
        <Route path="/savings-insurance/global-index-16-6" element={<GlobalIndex16_6 />} />
        <Route path="/savings-insurance/super-save-14-5" element={<SuperSave16_5 />} />
        <Route path="/savings-insurance/ultimate-growth" element={<UltimateGrowth />} />

        <Route path="/pension-insurance" element={<PensionInsurance />} />
        <Route path="/pension-insurance/bumnan-smart-95" element={<BumnanSmart95 />} />
        
        <Route path="/all-plans" element={<AllProducts />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating Contact Widget */}
      <FloatingContact />

      <ConsultationModal 
        isOpen={isConsultModalOpen} 
        onClose={closeConsultation} 
      />

      {/* Footer */}
      <footer className="bg-surface py-20 border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-3xl font-black text-primary italic tracking-tight">Proud Life <span className="text-secondary">Insurance</span></h4>
            <p className="text-sm text-on-surface/40 font-bold max-w-sm">
              ที่ปรึกษาประกันชีวิต Proud Life Insurance จริงใจ ดูแลและใส่ใจทุกรายละเอียด เพราะความอุ่นใจของคุณคือความภูมิใจของเราค่ะ
            </p>
            <p className="text-xs text-on-surface/30 font-medium">
              © 2024 Proud Life Insurance by พี่ฝ้าย เข้าใจประกัน. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-sm text-on-surface/60 font-black uppercase tracking-widest">
            <Link to="/contact" className="hover:text-primary transition-colors">ติดต่อสอบถาม</Link>
            <Link to="/articles" className="hover:text-primary transition-colors">สาระน่ารู้เรื่องประกัน</Link>
            <a href="#" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-primary transition-colors">ข้อกำหนดการใช้งาน</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
