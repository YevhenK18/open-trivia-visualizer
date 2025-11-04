export default function Filter({ categories, selected, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all ${
            selected === cat
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-slate-800 hover:bg-slate-700 text-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
