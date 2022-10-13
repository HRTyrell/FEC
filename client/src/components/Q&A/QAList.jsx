import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components'
import QuestionAnswers from ".//QAList.jsx";

const QAList= (/*   product_id   */) => {

  const [questions, setQuestions] = useState([]);
  var product_id = '66642';

  // useEffect( () => {
  //   axios({
  //     method: 'get',
  //     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/?product_id=${product_id}`
  //   })
  //   .then((data) => {setQuestions(data.results)} )
  //   .catch((err) => {console.log('GET QUESTION', err)})
  // })


  return (
    <div>
      <h1>Question And Answers</h1>
      {/* {questions.map((question) => (
      <QuestionAnswers question={question}/>
      ))} */}
    </div>
  )
}

export default QAList;