import React from 'react';
import PlogCheckPost from "../plogCheckPost/PlogCheckPost";
import Comment from "../comment/Comment";

const PlogNavTab = (props) => {
    if(props.navState === 0) {
        return <PlogCheckPost/>
    } else if (props.navState === 1) {
        return <Comment/>
    } else {
        alert('error')
    }
}

export default PlogNavTab;