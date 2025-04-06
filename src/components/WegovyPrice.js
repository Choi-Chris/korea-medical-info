export default function WegovyPrice() {
  return (
    <section className="mt-10 space-y-4">
      <div className="bg-sky-600 text-white font-semibold p-3 rounded">
        서울 위고비 가격, 얼마일까?
      </div>

      <p className="text-gray-800">
        <strong>서울 내 병원, 약국에서 판매되는 위고비의 가격은 평균 40~60만원</strong>입니다.
        한 펜당 가격이며 (주 1회, 4번~한 달), 1달 가격이 저 정도라고 생각하시면 됩니다.
      </p>

      <p className="text-gray-800">
        아래 표는 <strong>1펜당 평균 40만원~60만원</strong> 가격으로, 기간별 위고비 가격을 정리한 표입니다. <br />
        (2.4mg 최대 용량 기준 가격으로 정리)
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-300">
          <thead className="bg-blue-100 font-semibold">
            <tr>
              <th className="p-2 border border-gray-300">기간</th>
              <th className="p-2 border border-gray-300">펜 수</th>
              <th className="p-2 border border-gray-300">위고비 가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">1개월</td>
              <td className="p-2 border border-gray-300">1펜</td>
              <td className="p-2 border border-gray-300">40~60만원</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-2 border border-gray-300">3개월</td>
              <td className="p-2 border border-gray-300">3펜</td>
              <td className="p-2 border border-gray-300">130~180만원</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">6개월</td>
              <td className="p-2 border border-gray-300">6펜</td>
              <td className="p-2 border border-gray-300">270~360만원</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-2 border border-gray-300">12개월</td>
              <td className="p-2 border border-gray-300">12펜</td>
              <td className="p-2 border border-gray-300">540~720만원</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
