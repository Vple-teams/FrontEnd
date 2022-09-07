import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    CardImgButton,
    WrapPlanTitle,
} from './ProfilePlanStyle';

import TempImg from '../../asset/temp/tempImg.jpeg';

export default function ProfilePlan() {

    //페이지 이동
    const navigate = useNavigate();
    const routerViewPlan = () => {
        navigate('/view/plan')
        window.scrollTo(0,0)
    }


    const [menu, setMenu] = useState(0);

    return (
        <>
            <CardImgButton onClick={routerViewPlan}>
                <img src={TempImg} className='card-image' />
                <WrapPlanTitle>
                    <span className='plan-title'>뚜벅이 경주 맛집</span>
                </WrapPlanTitle>
            </CardImgButton>
        </>
    );
}