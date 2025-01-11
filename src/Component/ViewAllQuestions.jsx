import React from "react";
import { NavLink } from "react-router-dom";

const ViewAllQuestions = (props) => {
    return (
        <>
        <div className="container p-5 bg-primary">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Question</th>
                        <th>Option1</th>
                        <th>Option2</th>
                        <th>Option3</th>
                        <th>Option4</th>
                        <th>Answer</th>
                        <th>DELETE</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                {
                props.questionList.map((e, index) =><tr key={index}>
                    <td>{e.id}</td>
                    <td>{e.question}</td>
                    <td>{e.op1}</td>
                    <td>{e.op2}</td>
                    <td>{e.op3}</td>
                    <td>{e.op4}</td>
                    <td>{e.answer}</td>
                    <td><NavLink to={`/del/${e.id}`}>DELETE</NavLink></td>
                    <td><NavLink to="/">UPDATE</NavLink></td>
                    </tr>)}; 
                </tbody>
            </table>
        </div>
        </>
    );
}
export default ViewAllQuestions;