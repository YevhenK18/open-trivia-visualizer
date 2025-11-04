import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 bg-slate-800 dark:bg-slate-200 p-3 rounded-full shadow-lg transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={22} />
      ) : (
        <Moon className="text-indigo-600" size={22} />
      )}
    </motion.button>
  );
}
