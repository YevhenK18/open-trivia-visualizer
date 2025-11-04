import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CategoryList from "./components/CategoryList";
import CategoryChart from "./components/CategoryChart";
import DifficultyChart from "./components/DifficultyChart";
import Filter from "./components/Filter";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=50");
        if (!res.ok) throw new Error("API limit reached");
        const data = await res.json();
        setQuestions(data.results);
        localStorage.setItem("triviaData", JSON.stringify(data.results));
      } catch {
        const cached = localStorage.getItem("triviaData");
        if (cached) setQuestions(JSON.parse(cached));
        else {
          setQuestions([
            { category: "Science", difficulty: "easy", question: "Placeholder Q1" },
            { category: "History", difficulty: "medium", question: "Placeholder Q2" },
            { category: "Sports", difficulty: "hard", question: "Placeholder Q3" },
          ]);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const displayedQuestions =
    filteredCategory === "All"
      ? questions
      : questions.filter((q) => q.category === filteredCategory);

  if (loading) return <Loader />;

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-animated text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <motion.h1
        className="text-5xl font-extrabold text-center mb-10 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎮 Open Trivia Visualizer
      </motion.h1>

      <Filter
        categories={["All", ...new Set(questions.map((q) => q.category))]}
        selected={filteredCategory}
        onChange={setFilteredCategory}
      />

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="neon-glow rounded-3xl bg-slate-900/70 p-6 dark:bg-white/20 backdrop-blur-lg"
        >
          <CategoryChart data={displayedQuestions} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="neon-glow rounded-3xl bg-slate-900/70 p-6 dark:bg-white/20 backdrop-blur-lg"
        >
          <DifficultyChart data={displayedQuestions} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <CategoryList questions={displayedQuestions} />
      </motion.div>

      <footer className="mt-12 text-center text-sm opacity-70">
        
      </footer>
    </div>
  );
}
