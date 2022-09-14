import axios from 'axios';
import {atom, selector, useRecoilState,} from 'recoil';

export const headerListState = atom({
    key: 'headerState',
    default: ['홈', '플랜', '펀딩', '플로깅', '커뮤니티'],
});

//추천식당
export const getRecommandRestaurantUrl = selector({
    key: 'getRecommandRestaurantUrl',
    get: async ({get}) => {
        const res = await axios.get('https://vple-backend.all.gagark.shop/api/recommand/restaurant');
        return res.data
    },
})

//커뮤니티
export const getPostUrl = selector({
    key: 'getPostUrl',
    get: async ({get}) => {
        const res = await axios.get('https://vple-backend.all.gagark.shop/api/post');
        return res.data
    }
})

//플로깅
