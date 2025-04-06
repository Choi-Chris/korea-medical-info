// src/components/WegovyDosePrice.js
export default function WegovyDosePrice() {
  return (
    <section className="mt-10 bg-gray-100 p-6 rounded">
      <h2 className="text-lg font-semibold mb-2">용량별 가격은?</h2>
      <p className="mb-4">
        위고비는 처음부터 <strong>2.4mg</strong>(최대 용량)을 바로 맞는 게 아니라,
        점진적으로 용량을 올리기 때문에 초기에 몇 달은 가격이 약간 다를 수 있습니다.
      </p>
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">단계</th>
            <th className="p-2 border">용량</th>
            <th className="p-2 border">투여 기간</th>
            <th className="p-2 border">가격<br />(서울 기준)</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["1단계 (시작)", "0.25mg", "1개월", "40 ~ 60만원"],
            ["2단계", "0.5mg", "1개월", "40 ~ 60만원"],
            ["3단계", "1.0mg", "1개월", "50 ~ 70만원"],
            ["4단계", "1.7mg", "1개월", "55 ~ 80만원"],
            ["5단계 (유지)", "2.4mg", "이후 지속", "60 ~ 90만원"],
          ].map(([step, dose, duration, price]) => (
            <tr key={step} className="border-t">
              <td className="p-2 border">{step}</td>
              <td className="p-2 border">{dose}</td>
              <td className="p-2 border">{duration}</td>
              <td className="p-2 border">{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
