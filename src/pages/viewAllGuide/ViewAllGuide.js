import DetailHeader from '../../components/detailHeader/DetailHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import GuideCard from '../../components/guideCard/GuideCard';

import {UlStyle} from '../../styles/UlStyle';

function ViewAllGuide() {

    const cards = [
        { guideTitle: '경주 여행 추천', content: '김나현 • 2022.01.30' },
        { guideTitle: '강릉 여행 추천', content: '김나현 • 2022.02.30' },
        { guideTitle: '부산 여행 추천', content: '김나현 • 2022.03.30' },
        { guideTitle: '포항 여행 추천', content: '김나현 • 2022.04.30' },
        { guideTitle: '울산 여행 추천', content: '김나현 • 2022.05.30' },
        { guideTitle: '서울 여행 추천', content: '김나현 • 2022.06.30' },
        { guideTitle: '강원도 여행 추천', content: '김나현 • 2022.07.30' },
        { guideTitle: '제주도 여행 추천', content: '김나현 • 2022.08.30' },
        { guideTitle: '독도 여행 추천', content: '김나현 • 2022.09.30' },
    ];

    return (
        <>
            <DetailHeader title="추천 가이드 전체 보기"/>
            <DetailSearchBar/>
            <UlStyle>
                {cards.map(card => (
                    <GuideCard
                        guideTitle={card.guideTitle}
                        content={card.content}
                    />

                ))}
            </UlStyle>

        </>
    );
}

export default ViewAllGuide
