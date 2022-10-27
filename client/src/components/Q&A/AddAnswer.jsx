import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import {TOKEN, URL} from "/MyConfig.js";
import Modal from 'react-modal';
import UploadImage from './UploadImage.jsx';

const Modaldiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  border: solid;
  width: 300px;
`

const AddAnswer = ({question}) => {
  var product_ID = '66644'; // TODO get current productID
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    isSubmitted ? <h4>Answer Submitted!</h4> :
    <Modaldiv>
      <h3>Submit Your Answer</h3>
    <h5> [ProductName]: {question.question_body}</h5> //TODO get current prod name
      <form onSubmit={(e) => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${URL}qa/questions/${question.question_id}/answers`,
          headers: {Authorization: TOKEN},
          data: {
            product_id: product_ID,
            body: body,
            name: name,
            email: email,
            photos: photos
          }
        })
        .then(() => {setIsSubmitted(true);
        alert('submitted')})
        .catch((err)=> console.log(err))
      }} >
        <label> Your Answer: *
        <textarea
          onChange={(e) => setBody(e.target.value)}
          type="text"
          name="name"
          placeholder="..."
          required=""
          maxLength="1000"
          value={body}
        ></textarea>
      </label>
      <p> <br/> </p>
      <label> Nickname *
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Example: jack543!"
          required=""
          maxLength="60"
          value={name}
        />
      </label>
      <small>For privacy reasons, do not use your full name or email address</small>
      <p> <br/> </p>
      <label> Email:
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Example: jack@email.com"
          required=""
          maxLength="60"
          value={email}
        />
      </label>
      <p> <br/> </p>
      <small>For authentication reasons, you will not be emailed</small>
      <UploadImage setPhotos={setPhotos}/> //fix bug that submits when upload image is clicked
      <p> <br/> </p>
      <input type="submit" value="Submit" />
      </form>
    </Modaldiv>
  )
}

export default AddAnswer;