import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import TimePicker from '../../components/timePicker/TimePicker';
import PlanCard from '../../components/planCard/PlanCard';

import {
    ContainerMap,
    InputContainer,
    ShowMoreButton,
    CustomSheet,
    WrapTitle,
    PlanDiv,
    TimeButton,
    SaveButton,
    DeleteAllButton,

} from "./PlanMapStyle";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';
import iconLineLock from '../../asset/IconLineLock.png';


const PlanMap = () => {
    const MainMap = () => {
        const [position, setPosition] = useState();
        const [info, setInfo] = useState()
        const [markers, setMarkers] = useState([])
        const [map, setMap] = useState()

        const { kakao } = window;

        //시트
        const [isSheetOpen, setIsSheetOpen] = useState(false);
        const openSheet = () => setIsSheetOpen(true);
        const closeSheet = () => setIsSheetOpen(false);

        //플랜
        const [cards, setCards] = useState([
            { id: 1, title: "장", time: "1시간 0분" },
            { id: 2, title: "장소", time: "2시간 0분" },
            { id: 3, title: "장소이름", time: "3시간 0분" },
            { id: 4, title: "장소이름", time: "4시간 0분" },
            { id: 5, title: "장소이름", time: "5시간 0분" },
        ])

        //timepicker
        const [isModalOpen, setIsModalOpen] = useState(false)
        const closeModal = () => {
            setIsModalOpen(false);
        }
        const openModal = () => {
            setIsModalOpen(true);
        }

        // //일정 시작 시간 설정
        const [time, setTime] = useState('오전')
        const [hour, setHour] = useState('10')
        const [minute, setMinute] = useState('00')

        //deleteButton
        const onRemove = id => {
            setCards(cards.filter(card => card.id !== id));
        }
        const removeAll = () => {
            const empty=[];
            setCards(empty);
        }



        useEffect(() => {
            if (!map) return
            const ps = new kakao.maps.services.Places()

            ps.keywordSearch('구로디지털단지역 할리스', (data, status, _pagination) => {
                if (status === kakao.maps.services.Status.OK) {
                    const bounds = new kakao.maps.LatLngBounds()
                    let markers = []

                    for (let i = 0; i < data.length; i++) {
                        markers.push({
                            position: {
                                lat: data[i].y,
                                lng: data[i].x
                            },
                            content: data[i].place_name,
                        })
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                    }
                    setMarkers(markers)
                }
            })
        }, [map])

        return (
            <>
                <Header />

                <ContainerMap className='map-container'>
                    <InputContainer>
                        <input type='text' placeholder='일정에 추가할 장소를 검색하세요' className='search-location' />
                        {/*{position && <p>{'클릭한 위치의 위도는 ' + position.lat + ' 이고, 경도는 ' + position.lng + ' 입니다'}</p>}*/}
                    </InputContainer>


                    <Map center={{ lat: 33.5563, lng: 126.79581 }}
                        style={{ width: "100%", height: "100vh" }}
                        level={3} // 지도 확대 레벨
                        onCreate={setMap}
                    // onClick={(_t, mouseEvent) => setPosition({
                    //     lat: mouseEvent.latLng.getLat(),
                    //     lng: mouseEvent.latLng.getLng(),
                    // })}
                    >
                        {
                            markers.map((marker) => (
                                <MapMarker
                                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                                    position={marker.position}
                                    onClick={() => setInfo(marker)}
                                >
                                    {info && info.content === marker.content && (
                                        <div style={{ color: "#000" }}>{marker.content}</div>
                                    )}
                                </MapMarker>
                            ))
                        }
                        {/*{position && <MapMarker position={position}/>}*/}
                    </Map>

                    <ShowMoreButton onClick={openSheet}>플랜 세우기</ShowMoreButton>

                </ContainerMap>

                <CustomSheet isOpen={isSheetOpen} onClose={closeSheet}>
                    <CustomSheet.Container>
                        <CustomSheet.Header />
                        <CustomSheet.Content>

                            <WrapTitle>
                                <img src={prevBtn} className='prev_button' />
                                <p className='day'>DAY 1</p>
                                <img src={nextBtn} className='next_button' />
                            </WrapTitle>

                            <PlanDiv>
                                <p className='start_time'>일정 시작 |
                                    <TimeButton onClick={openModal}>{time} {hour}:{minute}</TimeButton></p>
                                {isModalOpen === true ?
                                    <TimePicker
                                        open={isModalOpen}
                                        close={closeModal}
                                    /> : null}

                                <SaveButton>저장</SaveButton>
                                <img src={iconLineLock} className='icon_lock' />

                                <DeleteAllButton onClick={removeAll}>전체 삭제</DeleteAllButton>

                                {cards.map(card => (
                                    <PlanCard
                                        card={card}
                                        onRemove={onRemove}
                                    />
                                ))}

                            </PlanDiv>

                        </CustomSheet.Content>
                    </CustomSheet.Container>
                </CustomSheet>
            </>

        )
    }
    return <MainMap />
}
export default PlanMap;