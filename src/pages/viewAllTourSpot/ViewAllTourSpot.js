import DetailHeader from '../../components/detailHeader/DetailHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import TourCard from '../../components/tourCard/TourCard';
import {UlStyle} from '../../styles/UlStyle';


export default function ViewAllTourSpot() {

    const cards = [
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
        { name: '연화바루' },
        { name: '향적원' },
    ];


    return(
        <>
            <DetailHeader title="추천 관광지 전체 보기"/>
            <DetailSearchBar/>
            <UlStyle>
                {cards.map(card => (
                    <TourCard
                        category={'tour'}
                        name={card.name}
                    />

                ))}
            </UlStyle>
        </>
    );
}
