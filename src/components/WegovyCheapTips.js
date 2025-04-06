// src/components/WegovyCheapTips.js
export default function WegovyCheapTips() {
  return (
    <section className="mt-10 bg-blue-50 p-6 rounded">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">위고비 싸게 맞는 방법</h2>
      <p className="mb-4">
        위고비를 최대한 싸고 저렴하게 구매할 수 있는 방법은 2가지가 있습니다.
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          온누리상품권
          <ul className="list-disc ml-5 text-sm text-gray-700">
            <li>5~10% 할인된 가격으로 구매</li>
          </ul>
        </li>
        <li>
          최저가, 싼곳 가격 비교
          <ul className="list-disc ml-5 text-sm text-gray-700">
            <li>나만의닥터 앱 활용</li>
          </ul>
        </li>
      </ol>
      <p className="mt-4 text-sm text-gray-600">
        ※ 온누리 상품권 관련 내용은 <a href="https://onnurigift.or.kr/" className="text-blue-700 underline">여기</a>에서 확인
      </p>
    </section>
  );
}
