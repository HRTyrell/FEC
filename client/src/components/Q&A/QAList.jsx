import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components'
import Answers from ".//Answers.jsx";
import { TOKEN } from "/MyConfig.js";

const SoftButton = styled.button`
  border: none;
  background:none;
  text-decoration: underline;
  color: #404040;
`
const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  // border: dotted;
  // border-color: red;
  height: 20px;
  width: 100%;
`


const QAList = (/*   product_id   */) => {
  var product_id = '66642';
  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(product_id);
  const [n, setN] = useState(2);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/?product_id=${product_id}`,
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
      <>
        <Inline>
          <p><b><large>Q: &nbsp; {question.question_body}</large></b></p>
          <small>
            Helpful? <SoftButton>Yes </SoftButton>
            ({question.question_helpfulness}) |
            <SoftButton> Add Answer</SoftButton>
          </small>
        </Inline>
          <Answers key={question.question_id} question={question} />
        </>
      ))}
      {(questions.length > 2 && n < questions.length) ? <><button onClick={(e) => handleView()}>MORE ANSWERED QUESTIONS</button><button>ADD A QUESTION +</button></> : <button>ADD A QUESTION +</button>}
    </div>
  )
}

export default QAList;