import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header'
import {
    Container,
    GetImageBtn,
    ProfileWrap,
    WritingForm,
    WrapReviewBar,
    ReviewBar,
    SelectedBar,

} from "./ReviewRestaurantStyle";
import Logo from '../../asset/logo.png'
import Camera from '../../asset/camera.png';



const ReviewRestaurant = (textState) => {

    const hasTagCategory = ['# 여행', '# 식당', '# 관광지', '# 플로깅', '# 펀딩'];

    const [flavorActive, setFlavorActive] = useState(false);
    const [ingredientActive, setIngredientActive] = useState(false);
    const [attitudeActive, setAttitudeActive] = useState(false);
    const changeFlavorActive = () => {
        setFlavorActive(!flavorActive)
        setIngredientActive(false)
        setAttitudeActive(false)
    }
    const changeIngredientActive = () => {
        setFlavorActive(false)
        setIngredientActive(!ingredientActive)
        setAttitudeActive(false)
    }
    const changeAttitudeActive = () => {
        setFlavorActive(false)
        setIngredientActive(false)
        setAttitudeActive(!attitudeActive)
    }

    return (
        <>
            <Header />
            <Container>
                <WritingForm>
                    <ProfileWrap>
                        <div className='profile-icon-container'>
                            <div className='profile-image-wrap'>
                                <img src={Logo} className='user-icon' />
                            </div>
                        </div>
                        <div className='user-name-wrap'>
                            <h4>닉네임</h4>
                        </div>
                    </ProfileWrap>
                    <textarea className='board-input' placeholder='내용을 입력해 주세요' />
                    <GetImageBtn>
                        <img src={Camera} className='camera-icon' />
                    </GetImageBtn>

                    <hr className='division-line' />

                    <WrapReviewBar>
                        <ReviewBar onClick={changeFlavorActive} 
                                   className= {flavorActive === true ? 'bar_active' : 'bar_inactive'}>
                            <div className='review'> 😊 "음식이 맛있어요"</div>
                        </ReviewBar>
                        <ReviewBar onClick={changeIngredientActive} 
                                   className= {ingredientActive === true ? 'bar_active' : 'bar_inactive'}>
                            <div className='review'> 🌿 “재료가 신선해요”</div>
                        </ReviewBar>
                        <ReviewBar onClick={changeAttitudeActive} 
                                   className= {attitudeActive === true ? 'bar_active' : 'bar_inactive'}>
                            <div className='review'> 💖 “친절해요”</div>
                        </ReviewBar>


                    </WrapReviewBar>

                </WritingForm>


                <div className='submit-btn-box'>
                            <div className='submit-btn'>등록하기</div>
                        </div>
            </Container>

        </>
    )
}

export default ReviewRestaurant;