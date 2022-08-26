import React from 'react';
import {CheckImageContainer} from "./PloggingCheckStyle";
import CheckImage from '../../asset/check_image.jpg';


const PloggingCheck = () => {

    const checkImage = ['asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf',];

    return(
        <>
            <CheckImageContainer>
                {checkImage.map( (obj,index) => {
                    return (
                        <div className='check-image-wrap'>
                            <img src={CheckImage} className='check-item'/>
                        </div>
                    )
                })}
            </CheckImageContainer>
        </>
    )
}

export default PloggingCheck;