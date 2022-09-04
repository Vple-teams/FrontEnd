import {atom, selector, useRecoilState,} from 'recoil';

export const headerListState = atom({
    key: 'headerState',
    default: ['홈', '플랜', '펀딩', '플로깅', '커뮤니티'],
});



