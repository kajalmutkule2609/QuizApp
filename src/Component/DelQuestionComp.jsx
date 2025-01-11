import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
let DelQuestionComp=(props)=>{
    let {qid}=useParams();
    let copyRemovedData=(data)=>{
        setStatus(false);
        props.parentCallBack(data);
   
    }
    return (
        <>
            <h1>I am Delete Component {qid}</h1>   
               copyRemovedData(props.questionList.filter((e,index) e.id!=qid)) 
        </>
    );
}
export default DelQuestionComp;