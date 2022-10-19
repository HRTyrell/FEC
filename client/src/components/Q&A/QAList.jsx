import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components'
import Answers from ".//Answers.jsx";
import { TOKEN } from "/MyConfig.js";

const softButton = styled.button`
border: none;
`


const QAList = (/*   product_id   */) => {
  var product_id = '66642';
  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(product_id);
  const [n, setN] = useState(2);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/?product_id=${product_id}&page=2`,
      headers: {
        Authorization: TOKEN
      }
    })
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => (console.log('GET QUESTION', err)))
  }, [id])

  const handleView = () => {
    setN(n + 2);
  }


  return (
    <div>
      {questions.slice(0, n).map((question) => (
        <> <span>
          {/* <label>Q:</label> */}
          <p>Q: {question.question_body}</p>

          <small> Helpful? <softButton>Yes </softButton>
            ({question.question_helpfulness}) |
            <softButton> Report</softButton> |
             <softButton> Add Answer</softButton>
          </small>
        </span>
          <Answers key={question.question_id} question={question} />
        </>
      ))}
      {(questions.length > 2 && n < questions.length) ? <><button onClick={(e) => handleView()}>MORE ANSWERED QUESTIONS</button><button>ADD A QUESTION +</button></> : <button>ADD A QUESTION +</button>}
    </div>
  )
}

export default QAList;