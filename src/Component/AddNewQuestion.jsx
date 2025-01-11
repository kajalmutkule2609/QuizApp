import React from "react";
import { useState } from "react";

const AddNewQuestion = (props) => {
    const [ques, setQues] = useState({
      id: 1,
      question: "",
      op1: "",
      op2: "",
      op3: "",
      op4: "",
      answer: 0,
    });

    let [list,setList]=useState([]);
    let uniHandler=(e)=>{
        setQues(prevState=>{
            return{
                ...prevState,[e.target.name]:e.target.value
            }
        });
    }

    let saveQuestion=()=>{
        setQues(prevState=>{
            return{
                ...prevState,id:ques.id+1
            }
        });
        setList([...props.list1,ques]);
        //alert(list.length);
        props.parentCallBack(list);
    }

    return (
        <>
            <div className="container p-5 bg-primary">
            <div className="mb-3">
                    <input type="text" name="id" value={ques.id} className="form-control " 
                    id="exampleFormControlInput1" placeholder="What is Java" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                    <input type="text" name="question" value={ques.question} className="form-control " 
                    id="exampleFormControlInput1" placeholder="What is Java" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                    <input type="text" name="op1" value={ques.op1} className="form-control "
                     id="exampleFormControlInput2" placeholder="Option1" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                    <input type="text" name="op2" value={ques.op2} className="form-control " 
                    id="exampleFormControlInput3" placeholder="Option2" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                   <input type="text" name="op3" value={ques.op3} className="form-control "
                    id="exampleFormControlInput4" placeholder="Option3" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                    <input type="text" name="op4" value={ques.op4} className="form-control " 
                    id="exampleFormControlInput5" placeholder="Option4" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                    <input type="number" name="answer" value={ques.answer} className="form-control "
                     id="exampleFormControlInput6" placeholder="Answer" onChange={(e)=>uniHandler(e)}/>
                </div>
                <div className="mb-3">
                    <input type="button" className="form-control btn btn-success"
                     id="exampleFormControlInput1" value="Add New Question" onClick={saveQuestion}/>
                </div>
            </div>
        </>
    );
}
export default AddNewQuestion;