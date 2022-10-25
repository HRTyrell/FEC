import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import {TOKEN} from "/MyConfig.js";

const SoftButton = styled.button`
  border: none;
  background:none;
  text-decoration: underline;
  color: #404040;
`

const A = styled.div`
  display: flex-column;
  padding: 10px;
  // border: dotted;
  // border-color: green;
  height: auto;
  width: 95%;
`

const Answers= ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [id, setId] = useState(question.question_id);
  const [viewAll, setViewAll] = useState(true);
  const [count, setCount] = useState(2);

  useEffect( () => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question.question_id}/answers`,
      headers: {Authorization: TOKEN}
    })
    .then((res) => {
      let response = res.data.results;
      setViewAll(response.length > 2 ? false : true)
      setAnswers(response);
    } )
    .catch((err) => (console.log('GET ANSWER', err)))
  }, [id])

  const convertDate = (inp)=> {
    let formattedDate = new Date(inp)
    formattedDate=formattedDate.toDateString().split(' ');
    return `${formattedDate[1]} ${formattedDate[2]}, ${formattedDate[3]}`
  }

  const handleView = () => {

  }


  return (
    <div>
      {answers.slice(0,count).map((answer) => (
        <A key={answer.answer_id}>
          <label><strong>A: &nbsp;</strong>
          <p> {answer.body}</p></label>
          {answer.photos.map((photo) => (
            <>
              <img src={photo.url} width='60px' height='60px'></img>
            </>
          ))}
          <footer>
            <small> &nbsp; by {answer.answerer_name},  {convertDate(answer.date)} | Helpful? <SoftButton >Yes</SoftButton >({answer.helpfulness}) |
            <SoftButton onClick={() => (alert('click'))}>Report</SoftButton ></small>
          </footer>
        </A>
      ))}
      {viewAll ? <SoftButton>COLLAPSE ANSWERS</SoftButton> : <SoftButton>LOAD MORE ANSWERS</SoftButton>}
           {/* {(answers.length > 2 && allAnswers === false)  ? <> <SoftButton onClick={(e) => setAllAnswers(true) }>LOAD MORE ANSWERS</SoftButton></> : allAnswers === true ?  <button onClick={(e) => setAllAnswers(False) }>HIDE ANSWERS</button> : <></> } */}
    </div>
  )
}


export default Answers;