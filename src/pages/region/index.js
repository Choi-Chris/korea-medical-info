import Head from 'next/head'
import SummaryBox from '@/components/SummaryBox'
import IntroText from '@/components/Introtext'
import WegovyPrice from '@/components/WegovyPrice'
import WegovyDosePrice from '@/components/WegovyDosePrice'
import WegovyCheapTips from '@/components/WegovyCheapTips'

export default function Home() {
  return (
    <>
      <Head>
        <title>서울 위고비 가격 성지 찾기 | 2025</title>
        <meta name="description" content="2025년 기준 서울 위고비 가격, 싸게 맞는 방법, 후기까지 한눈에 정리한 정보 페이지입니다." />
        <meta name="keywords" content="위고비 가격, 서울 병원, 약국, 위고비 후기, 다이어트 주사" />
        <meta property="og:title" content="서울 위고비 가격 총정리 | 2025" />
        <meta property="og:description" content="서울에서 위고비 싸게 맞는 팁, 병원 후기까지 요약!" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 border-b pb-2">
          서울 위고비 가격 병원 / 약국 알아보기 - 2025년
        </h1>

        <SummaryBox />

        <IntroText />

        <section className="mt-8 space-y-4">
          <div className="bg-sky-600 text-white font-semibold p-3 rounded">
            위고비 효과, 진짜 있을까요?
          </div>
          <p className="text-gray-800">
            위고비는 삭센다와 같은 기존 다이어트 주사제보다 가격대가 높아, 사람들이 진짜 효과가 있는 지 궁금해 하기도 하는데요, 위고비를 실제로 맞아보면 다음과 같은 효과가 있다고 합니다.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong> 식욕 감소 </strong>
              <ul className="list-disc ml-5">
                <li> 위고비의 주 성분인 세마글루티드의 가장 큰 효과는 식욕을 줄여주고, 위의 배출 속도를 늦추어 포만감을 긴 시간 동안 유지시켜준다는 점입니다. 위고비를 맞다보면 1일 식사량도 줄어들게 된다고 많이들 알려져 있습니다. </li>
              </ul>
            </li>
            <li><strong> 체중 감소</strong>
              <ul className="list-disc ml-5">
                <li> 위고비는 투여하고 나면 보통 2~4주 후 부터 체중 변화가 나타난다고 합니다. 적게는 1~2kg부터 많게는 5kg 이상까지 짧은 시간에 효과가 큰 다이어트 요법으로 알려져 있습니다. </li>
                <li> 실제로 위고비의 제약사인 노보노디스크사의 위고비 임상 결과에 따르면, 위고비 임상 연구 결과 실험의 대조군 대비 <strong> 68주 간 15% 이상의 체중 감량 효과</strong>가 입증되었다고 합니다. </li>
              </ul>
            </li>
          </ol>
        </section>

        <WegovyPrice/>

        <WegovyDosePrice/>

        <WegovyCheapTips/>
      </main>
    </>
  )
}
