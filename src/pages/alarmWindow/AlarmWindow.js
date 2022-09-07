import DetailHeader from "../../components/detailHeader/DetailHeader";
import {
    WrapContent
}from './AlarmWindowStyle'

export default function AlarmWindow() {
    return(
        <>
            <DetailHeader title="알림"/>
            <WrapContent>
                <h className='no-alarm'>새로운 알림이 없습니다.</h>
            </WrapContent>
        </>
    );
}