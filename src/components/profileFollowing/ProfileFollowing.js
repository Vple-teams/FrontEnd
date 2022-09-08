import { useState } from 'react';
import {
    WrapLine,
    MateButton,
    ImgDiv,
    EditButton,
    FollowButton,

} from './ProfileFollowingStyle';
import tempProfile from '../../asset/temp/tempProfile.jpeg';

export default function ProfileFollowing({mate, editMode}) {

    const [isFollowing, setIsFollowing] = useState(true);
    const changeFollowingState = () => {
        setIsFollowing(!isFollowing);
    }

    if(editMode) {
        return (
            <WrapLine>
                <MateButton>
                    <ImgDiv>
                        <img src={tempProfile} className='mate-photo' />
                    </ImgDiv>
                    <div className='text-div'>
                        <h4>{mate.name}</h4>
                        <p>{mate.greeting}</p>
                    </div>
                </MateButton>
                {isFollowing === true ? 
                <EditButton onClick={changeFollowingState}>팔로잉</EditButton> 
                : <FollowButton onClick={changeFollowingState}>팔로우</FollowButton>}

            </WrapLine>
        );
    }
    else {
        return (
            <WrapLine >
                <MateButton>
                    <ImgDiv>
                        <img src={tempProfile} className='mate-photo' />
                    </ImgDiv>
                    <div className='text-div'>
                        <h4>{mate.name}</h4>
                        <p>{mate.greeting}</p>
                    </div>
                </MateButton>
            </WrapLine>
        );
    }
    
}