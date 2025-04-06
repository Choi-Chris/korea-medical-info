// pages/index.js
import regionData from "@/data/regions";
import Link from "next/link";

export default function HomePage() {
  const sortedRegions = Object.values(regionData).sort(
    (a, b) => new Date(b.lastModified) - new Date(a.lastModified)
  )
  const year = new Date().getFullYear();

  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">전국 의료 정보 {year}</h1>

      <section className="space-y-6">
        {sortedRegions.map((region) => (
          <Link
            key={region.slug}
            href={`/regions/${region.slug}`}
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow transition"
          >
            <img
              src={region.image}
              alt={region.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-xl font-semibold">{region.title} 최저가 정보 ({year})</h2>
              <p className="text-gray-600 text-sm">{region.description}</p>
              <div className="text-xs text-gray-400 mt-1">
                업데이트: {region.lastModified}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
