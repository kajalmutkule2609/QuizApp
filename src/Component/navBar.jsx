import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddNewQuestion from "./AddNewQuestion";
import ViewAllQuestions from "./ViewAllQuestions";
import ScheduleExam from "./ScheduleExam";
import StartExam from "./StartExam";
import Result from "./ScheduleExam";
import { useState } from "react";
import DelQuestionComp from "./DelQuestionComp";
const NavBar = () => {
    let [list,setList]=useState([]);
    let handleCallBack=(childData)=>{
        setList(childData);
    }
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Quiz Application</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to="/newquestion" className="nav-link active">Add New Question</NavLink>
                                <NavLink to="/viewall" className="nav-link active">View All Questions</NavLink>
                                <NavLink to="/schedule" className="nav-link active">Schedule Exam</NavLink>
                                <NavLink to="/start" className="nav-link active">Start Exam</NavLink>
                                <NavLink to="/result" className="nav-link active">Result</NavLink>
                                {/* <NavLink to="/del" className="nav-link active">Delete</NavLink> */}

                            </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<h1>I Am App</h1>} />
                <Route path="/newquestion" element={<AddNewQuestion parentCallBack={handleCallBack} list1={list} />} />
                <Route path="/viewall" element={<ViewAllQuestions questionList={list}/>} />
                <Route path="/schedule" element={<ScheduleExam/>} />
                <Route path="/start" element={<StartExam/>} />
                <Route path="/result" element={<Result/>} />
                <Route path="/del/:qid" element={<DelQuestionComp questionList={list}/>}/>
            </Routes>
        </BrowserRouter >
        </>);
}
export default NavBar;