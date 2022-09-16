import {atom, selector, useRecoilState, useRecoilValue,} from 'recoil';
import axios from "axios";

export const headerListState = atom({
    key: 'headerState',
    default: ['홈', '플랜', '펀딩', '플로깅', '커뮤니티'],
});

export const getItemUrl = selector({
    key: 'getItemUrl',
    get: async ({get}) => {
        const res = await axios.get('https://vple-backend.all.gagark.shop/api/recommand/restaurant');
        return res.data
    },
});

export const getMapItems = selector({
    key: 'getMapItems',
    get: async  ({get}) => {
        const response = await axios.get('https://vple-backend.all.gagark.shop/api/map/restaurant/');
        return response.data.json
    },
});



