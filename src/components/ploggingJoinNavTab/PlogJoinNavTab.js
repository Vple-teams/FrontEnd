import React from 'react';
import NavBarDetail from "../navDetail/NavBarDetail";
import JoinList from "../joinList/JoinList";
import Comment from "../comment/Comment";


const PlogJoinNavTab = (props) => {

    if (props.tabState === 0) {
        return <NavBarDetail/>
    } else if (props.tabState === 1) {
        return <JoinList/>
    } else if (props.tabState === 2) {
        return <Comment/>
    } else {
        return alert('error');
    }

}




export default PlogJoinNavTab;