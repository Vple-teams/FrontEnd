// import React from 'react';
// import Home from "./home/Home";
// import Plan from "./plan/Plan";
// import Funding from "./funding/Funding";
// import Plogging from "./plogging/Plogging";
// import Community from "./community/Community";
// import {useRecoilValue} from "recoil";
// import {indexNum} from "../recoil/state";
//
//
// const TabContent = () => {
//     const stateIndexNum = useRecoilValue(indexNum);
//     if(stateIndexNum === 0){
//         return <Home/>
//     } else if (stateIndexNum === 1) {
//         return <Plan/>
//     } else if (stateIndexNum === 2) {
//         return <Funding />
//     } else if (stateIndexNum === 3) {
//         return <Plogging />
//     } else if(stateIndexNum === 4) {
//         return <Community />
//     }
// }
//
//
// export default TabContent;