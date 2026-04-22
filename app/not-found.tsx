'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-oxygen-100 blur-[100px] opacity-60 animate-oxygen-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fresh-100 blur-[120px] opacity-60 animate-breathe" />
      </div>

      <div className="max-w-3xl w-full text-center relative z-10 flex flex-col items-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <Logo size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Main 404 Text */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-[10rem] md:text-[14rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-oxygen drop-shadow-sm select-none"
          >
            404
          </motion.div>
          
          {/* Decorative floating badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none"
          >
            <span className="bg-white/80 backdrop-blur-md text-oxygen-800 text-sm font-bold px-4 py-1.5 rounded-full shadow-sm border border-oxygen-100 rotate-[-5deg]">
              Page Missing
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 md:mt-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Oops! You've lost your way.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl text-white bg-oxygen-700 hover:bg-oxygen-800 transition-all duration-300 shadow-oxygen hover:shadow-oxygen-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
