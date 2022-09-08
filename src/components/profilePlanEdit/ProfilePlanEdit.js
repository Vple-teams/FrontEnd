import { useState } from 'react';
import { ButtonStyle } from "../../styles/ButtonStyle";
import {
    CardImg,
    WrapPlanTitle,
    
} from './ProfilePlanEditStyle';
import IconDelete from '../../asset/IconDelete.png';

import TempImg from '../../asset/temp/tempImg.jpeg';

export default function ProfilePlanEdit({plan, onRemove}) {

    const onDelete = () => onRemove(plan.id);

    const [menu, setMenu] = useState(0);

    return (
        <>
            <CardImg>
                <img src={TempImg} className='card-image' />
                <ButtonStyle>
                    <img src={IconDelete} className='icon-delete' onClick={onDelete}/>
                </ButtonStyle>
                <WrapPlanTitle>
                    <span className='plan-title'>뚜벅이 경주 맛집</span>
                </WrapPlanTitle>
            </CardImg>
        </>
    );
}