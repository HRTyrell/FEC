import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import { TOKEN, URL } from "/MyConfig.js";

const SoftButton = styled.button`
  border: none;
  background:none;
  text-decoration: underline;
  color: #404040;
`

const Collapse = styled.button`
  border: none;
  background:none;
  font-weight: bold;
  // padding-left: 20px;
  color: #404040;
`

const A = styled.div`
  display: flex-column;
  padding-left: 10px;
   margin: 0;
  // border: dotted;
  // border-color: green;
  padding-bottom: 20px;
  height: auto;
  width: 95%;
`
const P = styled.p`
  // padding-left: px;
  margin: 0;
  padding-bottom: 10px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

const Answers = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [id, setId] = useState(question.question_id);
  const [viewAll, setViewAll] = useState(true);
  const [count, setCount] = useState(2);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${URL}/qa/questions/${question.question_id}/answers`,
      headers: { Authorization: TOKEN }
    })
      .then((res) => {
        let response = setSellersFirst(res.data.results);
        setViewAll(response.length > 2 ? false : true)
        setAnswers(response);
      })
      .catch((err) => (console.log('GET ANSWER', err)))
  }, [id])

  const setSellersFirst = (answersList) => {
    let sellers = [];
    let result = [];
    answersList.forEach((answer) => {
      (answer.answerer_name === "Seller") ? sellers.push(answer) : result.push(answer)
    })
    result = sellers.concat(result)
    return result;
  }

  const handleView = () => {

  }


  return (
    <FlexRow>
      <strong>A: &nbsp;</strong>
      <div>
        {answers.slice(0, count).map((answer) => (
          <A key={answer.answer_id}>
            <label>
              <P>{answer.body}</P></label>
            {answer.photos.map((photo, index) => (

              <img key={index} src={photo.url} height='100px'></img>

            ))}
            <footer><AnswerInfo answer={answer} /></footer>

          </A>
        ))}
        {viewAll ? <Collapse>COLLAPSE ANSWERS</Collapse> : <Collapse>LOAD MORE ANSWERS</Collapse>}
      </div>
    </FlexRow>
  )
}

const AnswerInfo = ({ answer }) => {
  const [isReported, setIsReported] = useState(answer.reported)
  const [isHelpful, setIsHelpful] = useState(false)
  const convertDate = (inp) => {
    let formattedDate = new Date(inp)
    formattedDate = formattedDate.toDateString().split(' ');
    return `${formattedDate[1]} ${formattedDate[2]}, ${formattedDate[3]}`
  }


  const handleReported = (answer_id) => {
    if (!isReported) {
      axios({
        method: 'put',
        url: `${URL}/qa/answers/${answer_id}/report`,
        headers: { Authorization: TOKEN }
      })
        .catch((err) => (console.log('report answer', err)))
    }
    setIsReported(true);
  }

  const handleHelpfulness = (answer_id) => {
    if (!isHelpful) {
      axios({
        method: 'put',
        url: `${URL}/qa/answers/${answer_id}/helpful`,
        headers: { Authorization: TOKEN }
      })
        .catch((err) => (console.log('report answer', err)))
    }
    setIsHelpful(true);
  }

  return (
    <>
      <small> by {answer.answerer_name},  {convertDate(answer.date)} | Helpful?  <SoftButton onClick={() => handleHelpfulness(answer.answer_id)}>Yes</SoftButton>
        ({isHelpful ? answer.helpfulness + 1 : answer.helpfulness}) |
        {isReported ? <> Reported </> : <SoftButton onClick={() => handleReported(answer.answer_id)}>Report</SoftButton>}
      </small>
    </>
  )
}


export default Answers;