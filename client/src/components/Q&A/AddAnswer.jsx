import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { TOKEN, URL } from "/MyConfig.js";
import Modal from 'react-modal';
import UploadImage from './UploadImage.jsx';

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
  border: none;
  background:none;
  font-weight: bold;
  // padding-left: 20px;
  color: #404040;
`

const AddAnswer = ({ question, product }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    isSubmitted ? <h4>Answer Submitted!</h4> :
      <Modaldiv>
        <Header>
        <div>
          <h3>SUBMIT YOUR ANSWER</h3>
          <h4>{product.name}: {question.question_body}</h4>
        </div>
        </Header>
        <form>
          <StyledInput>
            <label> Your Answer* </label>
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
          <label> Nickname * </label>
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
          <small>
            For authentication reasons, you will not be emailed
          </small>
          </StyledInput>
          <div>
            <UploadImage setPhotos={setPhotos} />
          </div>
          <div>
          <Button onClick={(e) => {
            e.preventDefault();
            axios({
              method: 'post',
              url: `${URL}/qa/questions/${question.question_id}/answers`,
              headers: { Authorization: TOKEN },
              data: {
                product_id: product_ID,
                body: body,
                name: name,
                email: email,
                photos: photos
              }
            })
              .then(() => {
                setIsSubmitted(true);
                alert('submitted')
              })
              .catch((err) => console.log(err))
          }}  > SUBMIT </Button>
        </div>
        </form>
      </Modaldiv>
  )
}

export default AddAnswer;