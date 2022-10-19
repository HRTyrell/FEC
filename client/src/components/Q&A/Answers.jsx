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
  height: relative;
  width: 100%;
`

const Answers= ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [id, setId] = useState(question.question_id);
  const [view, setView] = useState(2);
  const [allAnswers, setAllAnswers] = useState(false);

  useEffect( () => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question.question_id}/answers`,
      headers: {
        Authorization: TOKEN
      }
    })
    .then((res) => {
      setAnswers(res.data.results);
    } )
    .catch((err) => (console.log('GET ANSWER', err)))
  }, [id])

  return (
    <div>
      {answers.slice(0,2).map((answer) => (
        <A>
          <p><b>A: &nbsp; </b>  {answer.body}</p>
          <footer>
            <small> &nbsp; &nbsp; by {answer.answerer_name},  {answer.date} | Helpful? <SoftButton >Yes</SoftButton >({answer.helpfulness}) |
            <SoftButton >Report</SoftButton ></small>
          </footer>
        </A>
      ))}
           {(answers.length > 2 && allAnswers === false)  ? <> <SoftButton onClick={(e) => setAllAnswers(true) }>LOAD MORE ANSWERS</SoftButton></> : allAnswers === true ?  <button onClick={(e) => setAllAnswers(False) }>HIDE ANSWERS</button> : <></> }
    </div>
  )
}


export default Answers;