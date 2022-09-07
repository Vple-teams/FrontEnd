import DetailHeader from '../../components/detailHeader/DetailHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
import {UlStyle} from '../../styles/UlStyle';
import { useNavigate } from 'react-router-dom';

export default function ViewAllRestaurant() {

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
            <DetailHeader title="추천 식당 전체 보기"/>
            <DetailSearchBar/>
            <UlStyle>
                {cards.map(card => (
                    <RestaurantCard
                        name={card.name}
                    />
                    
                ))}
            </UlStyle>
        </>
    );
}
