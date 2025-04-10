// pages/index.js
import { useRouter } from "next/router";
import regionData from "@/data/regions";

export default function HomePage() {
  const router = useRouter();
  const year = new Date().getFullYear();

  const sortedRegions = Object.values(regionData).sort(
    (a, b) => new Date(b.lastModified) - new Date(a.lastModified)
  );

  const handleRegionClick = (slug) => {
    router.push(`/regions/${slug}`);
  };

  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">전국 의료 정보 {year}</h1>

      <section className="space-y-6">
        {sortedRegions.map((region) => (
          <button
            key={region.slug}
            onClick={() => handleRegionClick(region.slug)}
            className="w-full text-left flex items-center gap-4 p-4 border rounded-xl hover:shadow transition"
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
          </button>
        ))}
      </section>
    </main>
  );
}