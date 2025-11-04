import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DifficultyChart({ data }) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  data.forEach((q) => counts[q.difficulty]++);

  const chartData = Object.keys(counts).map((key) => ({
    difficulty: key,
    count: counts[key],
  }));

  return (
    <div className="bg-slate-800 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-100 dark:text-gray-800">
        ⚙️ Questions by Difficulty
         </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="difficulty" stroke="#ccc" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#6366F1" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
