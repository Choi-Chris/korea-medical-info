// src/pages/region/[city].jsx
import { useRouter } from "next/router";

const regionInfo = {
  seoul: {
    title: "서울 위고비",
    description: "서울 지역 위고비 병원 / 약국 가격 안내",
    content: "여기 서울에 대한 내용을 쭉 써줘요...",
  },
  busan: {
    title: "부산 위고비",
    description: "부산 지역 위고비 병원 / 약국 가격 안내",
    content: "부산은 이런 식으로 나옵니다...",
  },
};

export default function RegionPage() {
  const router = useRouter();
  const { city } = router.query;

  if (!city || !regionInfo[city]) return <div>존재하지 않는 지역입니다.</div>;

  const { title, description, content } = regionInfo[city];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="mb-4 text-gray-600">{description}</p>
      <div>{content}</div>
    </div>
  );
}
