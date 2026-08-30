import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-10 pb-16 text-center lg:pt-16 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -z-10 bg-accent blur-2xl opacity-40 dark:opacity-30 rounded-full" />
        <div className="w-40 h-40 sm:w-48 sm:h-48 border-4 border-surface-elevated dark:border-surface-dark-elevated shadow-xl shadow-navy/10 rounded-full overflow-hidden animate-blob">
          <img src={profilePic} alt="Shubham Bhatia" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="flex flex-col items-center gap-5"
      >
        <h1 className="text-3xl font-bold font-playFair text-navy dark:text-body-dark md:text-4xl lg:text-5xl px-4">
          I am a <span className="font-cursive text-accent-text dark:text-accent-dark">Product</span> Engineer
        </h1>
        <p className="max-w-xl text-body dark:text-muted-dark italic font-lato lg:text-xl">
          Building Data-Driven Products with Purpose
        </p>
        <a href="#about">
          <div className="group flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-full border border-line dark:border-line-dark text-body dark:text-body-dark/80 hover:border-accent-text hover:text-accent-text dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors duration-200 lg:text-base">
            <span>About Me</span>
            <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
