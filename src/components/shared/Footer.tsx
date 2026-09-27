import Image from 'next/image';
import logo from '@/assets/logoFooter.png'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-2 border-t border-[#121316]">
      <div className="container mx-auto sm:px-8 p-3 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt={"Fit-Log"}
              className="max-sm:w-5 max-sm:h-5"
            />
          <span className="font-oswald tracking-wider font-extrabold text-sm uppercase">
            FitLog
          </span>
        </div>
        <div className="text-xs text-[#6B7280] text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
