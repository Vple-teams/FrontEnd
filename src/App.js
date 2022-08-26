import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Funding from './components/funding/Funding';
import Plogging from "./components/plogging/Plogging";
import Community from "./components/community/Community";
import Plan from "./components/plan/Plan";
import AddBoard from "./pages/addBoard/AddBoard";
import FindMate from "./pages/mate/FindMate";
import PloggingDetail from "./pages/ploggingDetail/PloggingDetail";
import PlogCheckDetail from "./pages/ploggingCheckDetail/PlogCheckDetail";
import AddPost from "./pages/addPost/AddPost";
import PlanMap from './pages/planMap/PlanMap'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/funding' element={<Funding />} />
                <Route path='/plogging' element={<Plogging />} />
                <Route path='/community' element={<Community />} />
                <Route path='/plan' element={<Plan />} />
                <Route path='/board/add' element={<AddBoard />} />
                <Route path='/mate' element={<FindMate />} />
                <Route path='/plogging/detail' element={<PloggingDetail />} />
                <Route path='/plogging/check/detail' element={<PlogCheckDetail />} />
                <Route path='/plogging/writing' element={<AddPost />} />
                <Route path='/plan/map' element={<PlanMap />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
