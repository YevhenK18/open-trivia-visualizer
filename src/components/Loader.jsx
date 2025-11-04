import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <motion.div
        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <span className="ml-4 text-xl font-semibold">Loading trivia...</span>
    </div>
  );
}
