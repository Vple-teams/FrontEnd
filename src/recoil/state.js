import axios from 'axios';
import {atom, selector, useRecoilState,} from 'recoil';

export const headerListState = atom({
    key: 'headerState',
    default: ['홈', '플랜', '펀딩', '플로깅', '커뮤니티'],
});

export const getRecommandRestaurantUrl = selector({
    key: 'getRecommandRestaurantUrl',
    get: async ({get}) => {
        const res = await axios.get('https://vple-backend.all.gagark.shop/api/recommand/restaurant');
        return res.data
    },
})

// export const getDetailRestaurantUrl = (id) = selector({
//     key: 'getDetailRestaurantUrl',
//     get: async ({get}) => {
//         const res = await axios.get('https://vple-backend.all.gagark.shop/api/recommand/restaurant' + id);
//         return res.data
//     },
// })