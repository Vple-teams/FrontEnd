import {
    StyledGreyDiv,
    SelectLocationOption,
} from './DetailSearchBarStyle';

export default function DetailSearchBar() {

    const provinceList = ['서울', '경기도', '인천', '충청북도', '충청남도', '전라북도', '전라남도', '강원도', '경상북도', '경상남도'];
    const locationList = ['김포시', '의정부시', '인천광역시', '부산', '목포시', '강릉시', '대구광역시'];

    return (
        <>
            <StyledGreyDiv>
                <SelectLocationOption>
                    <select className='select-box'>
                        {provinceList.map((province, index) => {
                            return <option className='option'>{province}</option>
                        })}
                    </select>
                    <select className='select-box'>
                        {locationList.map((city, index) => {
                            return <option className='option'>{city}</option>
                        })}
                    </select>
                </SelectLocationOption>
            </StyledGreyDiv>
        </>

    );
}