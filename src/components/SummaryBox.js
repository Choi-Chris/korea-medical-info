export default function SummaryBox() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 text-black dark:text-white border border-blue-200 dark:border-blue-400 p-4 rounded mb-8">
      <h2 className="font-semibold mb-2">총정리 요약</h2>
      <ol className="list-decimal list-inside">
        <li> 서울 위고비 가격
          <ul className="list-disc list-inside ml-4">
            <li>평균 40만 ~ 60만원 정도</li>
            <li>병원, 약국마다 천차만별이라 확인이 필요해요</li>
          </ul>
        </li>
        <li> 서울 위고비 최저가로 처방받는 방법
          <ul className="list-disc list-inside ml-4">
            <li> 나만의닥터 활용하기 </li>
            <li> 최저가 지도 찾아보기 </li>
            <li> 온누리 상품권으로 할인받기 </li>
          </ul>
        </li>
      </ol>
    </div>
  )
}
