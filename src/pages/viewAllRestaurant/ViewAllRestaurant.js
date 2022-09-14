import DetailHeader from '../../components/detailHeader/DetailHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
import { UlStyle } from '../../styles/UlStyle';
import { getRecommandRestaurantUrl } from '../../recoil/state';
import { useRecoilValue } from 'recoil';

export default function ViewAllRestaurant() {

    const restaurantInfo = useRecoilValue(getRecommandRestaurantUrl);

    return (
        <>
            <DetailHeader title="추천 식당 전체 보기" />
            <DetailSearchBar />
            <UlStyle>
                {
                    restaurantInfo.content.map(restaurant =>
                        <RestaurantCard
                            id={restaurant.id}
                            name={restaurant.name}
                            img={restaurant.image}
                        />)
                }
            </UlStyle>
        </>
    );
}
