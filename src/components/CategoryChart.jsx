import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function CategoryChart({ data }) {
  const counts = {};
  data.forEach((q) => {
    counts[q.category] = (counts[q.category] || 0) + 1;
  });

  const chartData = Object.keys(counts).map((key) => ({
    name: key,
    value: counts[key],
  }));

  const colors = ["#6366F1", "#A855F7", "#EC4899", "#F59E0B", "#10B981"];

  return (
    <div className="bg-slate-800 p-4 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-100 dark:text-gray-800">
            📊 Questions by Category
            </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={chartData}
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
