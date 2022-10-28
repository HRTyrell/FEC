import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { TOKEN, URL } from "/MyConfig.js";


const Modaldiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-content: space-around;
  border: solid;
  width: 500px;
`

const AddQuestion = ({ product }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Modaldiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  // border: dotted;
  width: 30vw;
`
  const Header = styled.div`
  display: flex;
  justify-content: center;
  `
  const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  `
  const Button = styled.button`
  border-width: thin;
  background:none;
  font-weight: bold;
  // padding-left: 20px;
  color: #404040;
`

  return (
    isSubmitted ? <h4>Question Submitted!</h4> :
      <Modaldiv>
        <Header>
          <div>
            <h3>Ask Your Question</h3>
            <h5>About The {product.name} </h5>
          </div>
        </Header>
        <form onSubmit={(e) => {
          e.preventDefault();
          axios({
            method: 'post',
            url: `${URL}/qa/questions/`,
            headers: { Authorization: TOKEN },
            data: {
              product_id: product_ID,
              body: body,
              name: name,
              email: email
            }
          })
            .then(() => { setIsSubmitted(true) })
            .catch((err) => console.log(err))
        }} >
          <StyledInput>
          <label> Your Question*</label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            type="text"
            name="name"
            placeholder="..."
            required=""
            maxLength="1000"
            value={body}
          ></textarea>
          </StyledInput>

          <StyledInput>
          <label> Nickname*</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Example: jack543!"
              required=""
              maxLength="60"
              value={name}
            />
            <small>
            For privacy reasons, do not use your full name or email address
            </small>
          </StyledInput>
          <StyledInput>
          <label> Email* </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Example: jack@email.com"
              required=""
              maxLength="60"
              value={email}
            />
          <small>For authentication reasons, you will not be emailed</small>
          </StyledInput>
          <div>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>

      </Modaldiv>
  )
}

export default AddQuestion