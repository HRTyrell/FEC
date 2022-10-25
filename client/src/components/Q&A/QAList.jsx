import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components'
import Answers from ".//Answers.jsx";
import { TOKEN } from "/MyConfig.js";
import AddQuestion from ".//AddQuestion.jsx";
import AddAnswer from ".//AddAnswer.jsx";
import Modal from 'react-modal';

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
  margin-top: 5px;
  // border: dotted;
  // border-color: red;
  height: 20px;
  width: 95%;
`
const QA = styled.div`
// border: dotted;
// border-color: purple;
  height: 50vh;
  overflow-y: scroll;
  width: realtive;
`

const SModal = styled.div`
  content : {
    top: 50%
    left: 50%
    right                 : auto,
    bottom                : auto,
    marginRight           : -50%,
    transform             : translate(-50%, -50%),
    backgroundColor       : grey
  }
    `
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : 'light grey'
      }
  };


const QAList = ({search}) => {
  var product_id = '66642';
  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(product_id);
  const [count, setCount] = useState(2);
  const [isHelpful, setIsHelpful] = useState(false);
  const [questionModalIsOpen, setQuestionModalIsOpen] = useState(false);
  const [answerModalIsOpen, setAnswerModalIsOpen] = useState(false);
  console.log(search);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/?product_id=${id}&count=${10000}`,
      headers: {Authorization: TOKEN}
    })
      .then((res) => {
        let answeredQuestions = res.data.results.filter((question) => {

          return Object.keys(question.answers).length > 0 && question.question_body.includes(search)

        })
        setQuestions(answeredQuestions);
      })
      .catch((err) => (console.log('GET QUESTION', err)))
  }, [search])

  const questionModal = () => {
    const setTrue = () => {
      setQuestionModalIsOpen(true)
    }
    const setFalse = () => {
      setQuestionModalIsOpen(false)
    }
    return (
      <>
        <button onClick={setTrue}>ADD A QUESTION +</button>
        <Modal isOpen={questionModalIsOpen} style={customStyles} onRequestClose={() => setQuestionModalIsOpen(false)}>
          <AddQuestion />
        </Modal>
      </>
    )
  }

const answerModal = () => {
  const setTrue = () => {
    setAnswerModalIsOpen(true)
  }
  const setFalse = () => {
    setAnswerModalIsOpen(false)
  }
  return (
    <>
      <SoftButton onClick={setTrue}>Add Answer</SoftButton>

      <Modal isOpen={answerModalIsOpen} style={customStyles}onRequestClose={() => setAnswerModalIsOpen(false)}>
        <AddAnswer />
      </Modal>
    </>
  )
}

  const handleHelpfulness = () => {
    setIsHelpful(!isHelpful);
  }

  return (
    <div>
      <QA>
      {questions.slice(0, count).map((question) => (
      <div key={question.question_id}>
        <Inline>
           <strong><label>Q:
          &nbsp; {question.question_body}</label></strong>
          <small>
            Helpful?
            <SoftButton onClick={() => {handleHelpfulness()}}>Yes</SoftButton>
            ({isHelpful ? question.question_helpfulness + 1 :question.question_helpfulness}) |
            {answerModal()}
          </small>
        </Inline>
        <Answers key={question.question_id} question={question} />
      </div>
      ))}
      </QA>
      {(questions.length > 2 && count < questions.length) ?
      <button onClick={(e) => setCount(count + 2)}>
        MORE ANSWERED QUESTIONS
      </button> : <></>}
      {questionModal()}
    </div>
  )
}


export default QAList;