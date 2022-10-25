import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import {TOKEN} from "/MyConfig.js";
import Modal from 'react-modal';

const Modaldiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  border: solid;
  width: 300px;
`

const AddAnswer = ({product_id}) => {
  const product_ID = 66642;
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  return (
    <Modaldiv>
      <h3>Submit Your Answer</h3>
    <h5> [ProductName]: [QuestionBody]</h5>
      <form onSubmit={(e) => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${product_ID}/answers`,
          headers: {Authorization: TOKEN},
          data: {
            product_id: product_ID,
            body: body,
            name: name,
            email: email,
            photos: photos
          }
        })
        .then(() => alert('submitted answer'))
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

      <label> Email *
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Example: jack@email.com"
          required=""
          maxLength="60"
          value={email}
        />
      </label>
      <small>For authentication reasons, you will not be emailed</small>
      <input type="submit" value="Submit" />
      </form>
    </Modaldiv>
  )
}

export default AddAnswer;