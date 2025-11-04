import { motion } from "framer-motion";

export default function CategoryList({ questions }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">🧠 Questions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.slice(0, 12).map((q, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 p-4 rounded-2xl shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-bold text-indigo-400">{q.category}</h3>
            <p
              className="text-sm text-gray-300 mt-1"
              dangerouslySetInnerHTML={{ __html: q.question }}
            />
            <p className="text-xs text-gray-500 mt-2">Difficulty: {q.difficulty}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
