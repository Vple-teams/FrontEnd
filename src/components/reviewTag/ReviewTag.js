import { useState } from 'react';
import {
    TagDiv,

} from './ReviewTagStyle'

export default function ReviewTag({obj}) {

    const [isActive, setIsActive] = useState(false);
    const changeActive = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <TagDiv onClick={changeActive}>
                <div  
                    className={isActive === true ? 
                        'hash-tag-active' : 'hash-tag-inactive'}>
                    {obj}
                </div>
            </TagDiv>
        </>
    );
}