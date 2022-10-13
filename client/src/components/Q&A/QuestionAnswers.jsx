import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components'

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/?product_id=';

const data = {
  "product_id": "66642",
  "results": [
      {
          "question_id": 640766,
          "question_body": "what is this made of?",
          "question_date": "2022-05-11T00:00:00.000Z",
          "asker_name": "qiqi",
          "question_helpfulness": 2,
          "reported": false,
          "answers": {
              "5986709": {
                  "id": 5986709,
                  "body": "this is your answer",
                  "date": "2022-07-18T00:00:00.000Z",
                  "answerer_name": "john doe",
                  "helpfulness": 0,
                  "photos": []
              },
              "5987763": {
                  "id": 5987763,
                  "body": "This is another answer",
                  "date": "2022-09-01T00:00:00.000Z",
                  "answerer_name": "Jacob",
                  "helpfulness": 1,
                  "photos": []
              },
              "5987764": {
                  "id": 5987764,
                  "body": "Lucky you... A third answer",
                  "date": "2022-09-01T00:00:00.000Z",
                  "answerer_name": "Tanner",
                  "helpfulness": 1,
                  "photos": []
              },
              "5987799": {
                  "id": 5987799,
                  "body": "This is coming along nicely",
                  "date": "2022-09-01T00:00:00.000Z",
                  "answerer_name": "Adam",
                  "helpfulness": 0,
                  "photos": []
              },
              "5987867": {
                  "id": 5987867,
                  "body": "I'm going to see if I can add some photos",
                  "date": "2022-09-02T00:00:00.000Z",
                  "answerer_name": "Jacob",
                  "helpfulness": 0,
                  "photos": [
                      "C:\\fakepath\\puppy.jpeg"
                  ]
              },
              "5987919": {
                  "id": 5987919,
                  "body": "Maybe my photo will cheer you up!",
                  "date": "2022-09-02T00:00:00.000Z",
                  "answerer_name": "Jacob",
                  "helpfulness": 0,
                  "photos": [
                      "blob:http://localhost:3000/d4e54216-38fb-47b8-9abb-fc5ff5db8b97"
                  ]
              }
          }
      }
  ]
}

const QuestionAnswers= ({question}) => {
  const [answers, setAnswers] = useState(data.results);

  // useEffect( () => {
  //   axios({
  //     method: 'get',
  //     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question.question_id}/answers`
  //     headers: {
  //       Authorization: process.env.TOKEN
  //     }
  //   })
  //   .then((data) => {setAnswers(data.results)} )
  //   .catch((err) => {console.log('GET QUESTION', err)})
  // })


  return (
    <div>
      Q:< {question.body}/>
       {answers.map((answer) => (
       <{answer.body}/>
       <{answer.answerer_name}{answer.date} />
      ))}
    </div>
  )
}

export default QuestionAnswers;