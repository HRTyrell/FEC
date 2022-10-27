import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import {TOKEN, URL} from "/MyConfig.js";


const Modaldiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-content: space-around;
  border: solid;
  width: 500px;
`

const AddQuestion = () => {
  const product_ID = 66642; //TODO current product id
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    isSubmitted ? <h4>Question Submitted!</h4> :
    <Modaldiv>
      <h3>Ask Your Question</h3>
      <h5>About The [product]</h5>
      <form onSubmit={(e) => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${URL}qa/questions/`,
          headers: {Authorization: TOKEN},
          data: {
            product_id: product_ID,
            body: body,
            name: name,
            email: email
          }
        })
        .then(() => {setIsSubmitted(true)})
        .catch((err)=> console.log(err))
      }} >
        <label> Your Question: *</label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          type="text"
          name="name"
          placeholder="..."
          required=""
          maxLength="1000"
          value={body}
        ></textarea>


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
      <input type="submit" value="submit" />
      </form>

    </Modaldiv>
  )
}

export default AddQuestion