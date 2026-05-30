import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Facebook, X, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: <Phone size={24} />,
      label: 'โทรสายตรง',
      href: 'tel:0896965397',
      color: 'bg-[#007AFF]',
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'LINE Official',
      href: 'https://line.me/ti/p/@proudlifeinsurance',
      color: 'bg-[#06C755]',
    },
    {
      icon: <Facebook size={24} />,
      label: 'Facebook',
      href: 'https://www.facebook.com/proudlifeinsurance',
      color: 'bg-[#1877F2]',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <span className="bg-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold text-on-surface opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {contact.label}
                </span>
                <div className={`w-12 h-12 ${contact.color} text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95`}>
                  {contact.icon}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-surface-container-highest text-on-surface' : 'bg-primary text-white scale-110'
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        </motion.div>
        
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full"
          />
        )}
      </button>
    </div>
  );
}
