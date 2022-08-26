import React from 'react';
import Header from '../../components/header/Header';
import {ContainerMap, InputContainer} from "./PlanMapStyle";
import {Map, MapMarker} from "react-kakao-maps-sdk";


const PlanMap = () => {
    return(
        <>
            <Header/>
            <ContainerMap>
                <InputContainer>
                    <input type='text' placeholder='일정에 추가할 장소를 검색하세요' className='search-location'/>
                </InputContainer>
                <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "100vh" }}>
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                        <div style={{color:"#000"}}>Hello World!</div>
                    </MapMarker>
                </Map>
            </ContainerMap>
        </>
    )
}


export default PlanMap;