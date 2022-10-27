import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components'
import Answers from ".//Answers.jsx";
import { TOKEN, URL } from "/MyConfig.js";
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
  border: dotted;
  border-color: red;
  height: 20px;
  width: 95%;
`
const QA = styled.div`
border: dotted;
border-color: purple;
  height: 60vh;
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
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'light grey'
  }
};


const QAList = ({ search }) => {
  var product_id = '66644';
  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(product_id);
  const [count, setCount] = useState(4);
  const [isHelpful, setIsHelpful] = useState(false);
  const [questionModalIsOpen, setQuestionModalIsOpen] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/?product_id=${id}&count=${10000}`,
      headers: { Authorization: TOKEN }
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

  return (
    <div>
      <QA>
        {questions.slice(0, count).map((question) => (
          <div key={question.question_id}>
            <Inline>
              <strong><label>Q:
                &nbsp; {question.question_body}</label></strong>
            <QuestionInfo question={question} />
            </Inline>
            <Answers key={question.question_id} question={question} />
          </div>
        ))}

        {(questions.length > 2 && count < questions.length) ?
          <button onClick={(e) => setCount(count + 2)}>
            MORE ANSWERED QUESTIONS
          </button> : null}</QA>
      {questionModal()}
    </div>
  )
}

const QuestionInfo = ({ question }) => {
  const [isReported, setIsReported] = useState(false)
  const [isHelpful, setIsHelpful] = useState(false)
  const [answerModalIsOpen, setAnswerModalIsOpen] = useState(false);

  const answerModal = (question) => {
    const setTrue = () => {
      setAnswerModalIsOpen(true)
    }
    const setFalse = () => {
      setAnswerModalIsOpen(false)
    }
    return (
      <>
        <SoftButton onClick={setTrue}>Add Answer</SoftButton>

        <Modal isOpen={answerModalIsOpen} style={customStyles} onRequestClose={() => setAnswerModalIsOpen(false)}>
          <AddAnswer question={question}/>
        </Modal>
      </>
    )
  }


  const handleReported = (question_id) => {
    if (!isReported) {
      axios({
        method: 'put',
        url: `${URL}/qa/questions/${question_id}/report`,
        headers: { Authorization: TOKEN }
      })
        .catch((err) => (console.log('report question', err)))
    }
    setIsReported(true);
  }

  const handleHelpfulness = (question_id) => {
    if (!isHelpful) {
      axios({
        method: 'put',
        url: `${URL}/qa/questions/${question_id}/helpful`,
        headers: { Authorization: TOKEN }
      })
        .catch((err) => (console.log('report question', err)))
    }
    setIsHelpful(true);
  }

  return (
    <small>
      Helpful?
      <SoftButton onClick={() => { handleHelpfulness(question.question_id) }}>Yes</SoftButton>
      ({isHelpful ? question.question_helpfulness + 1 : question.question_helpfulness})| {isReported ? <> Reported </> : <SoftButton onClick={() => handleReported(question.question_id)}>Report</SoftButton>} |
      {answerModal(question)}
      </small>
  )
}


export default QAList;

