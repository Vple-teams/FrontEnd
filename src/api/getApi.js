import {atom} from 'recoil'
import {Post} from '../api/types';

export const postState = atom({
    key: 'postsState',
    default: {

    }
})