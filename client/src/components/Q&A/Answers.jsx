import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import {TOKEN} from "/MyConfig.js";


const Answers= ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [id, setId] = useState(question.question_id);
  const [view, setView] = useState(2);
  const [viewAll, setViewAll] = useState(false);





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
        <>
          <label></label>
          <p>A:    {answer.body}</p>
          <footer>
            <small>{answer.answerer_name},  {answer.date} | Helpful? <softButton >Yes</softButton >({answer.helpfulness}) | <softButton >Report</softButton ></small>
          </footer>
        </>
      ))}
           {(answers.length > 2 && viewAll === false)  ? <> <button onClick={(e) => setViewAll(true) }>LOAD MORE ANSWERS</button></> : viewAll === true ?  <button onClick={(e) => setViewAll(False) }>HIDE ANSWERS</button> : <></> }
    </div>
  )
}


export default Answers;