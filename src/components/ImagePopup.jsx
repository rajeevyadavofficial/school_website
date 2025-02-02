import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ImagePopup = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(images.length > 0);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.setProperty('--page-opacity', '0.5');
    } else {
      document.documentElement.style.setProperty('--page-opacity', '1');
    }
    return () => {
      document.documentElement.style.setProperty('--page-opacity', '1');
    };
  }, [isOpen]);

  const handleClose = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/0 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative bg-white p-4 rounded-2xl shadow-lg w-96"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
        <img
          src={images[currentIndex]}
          alt="Popup"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default ImagePopup;
