import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import AddBoard from "./pages/addBoard/AddBoard";
import FindMate from "./pages/mate/FindMate";
import PloggingDetail from "./pages/ploggingDetail/PloggingDetail";
import PlogCheckDetail from "./pages/ploggingCheckDetail/PlogCheckDetail";
import AddPost from "./pages/addPost/AddPost";
import PlanMap from './pages/planMap/PlanMap'
import Login from "./pages/login/Login";
import FundingDetail from "./pages/fundingDetail/FundingDetail";
import ViewAllGuide from "./pages/viewAllGuide/ViewAllGuide";
import ViewAllRestaurant from "./pages/viewAllRestaurant/ViewAllRestaurant";
import ViewAllTourSpot from "./pages/viewAllTourSpot/ViewAllTourSpot";
import Plan from "./components/plan/Plan";
import Home from "./components/home/Home";
import Funding from "./components/funding/Funding";
import Plogging from "./components/plogging/Plogging";
import Community from "./components/community/Community";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/plan' element={<Plan/>}/>
                    <Route path='/funding' element={<Funding/>}/>
                    <Route path='/plogging' element={<Plogging/>}/>
                    <Route path='/community' element={<Community/>}/>
                    <Route path='/funding/detail' element={<FundingDetail/>}/>
                    <Route path='/board/add' element={<AddBoard/>}/>
                    <Route path='/mate' element={<FindMate/>}/>
                    <Route path='/plogging/detail' element={<PloggingDetail/>}/>
                    <Route path='/plogging/check/detail' element={<PlogCheckDetail/>}/>
                    <Route path='/plogging/writing' element={<AddPost/>}/>
                    <Route path='/plan/map' element={<PlanMap/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/view/guide' element={<ViewAllGuide/>}/>
                    <Route path='/view/restaurant' element={<ViewAllRestaurant/>}/>
                    <Route path='/view/tour' element={<ViewAllTourSpot/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
