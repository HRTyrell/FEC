import styled from "styled-components";

const Arrow = styled.div`
  margin: 5px 5px;
  width: 20px;
  height: 40px;
  position: relative;
  background: Black;
:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid Black;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
`

const Arrow2 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid white;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  mix-blend-mode: normal;
`
const F2div = styled.div`
margin: 0px 20px;
height: 50px;
display:flex;
flex-direction: row;
align-items: center;
gap: 10px;
`

const Circle = styled.div`
position: absolute;
z-index: 0;
top: 480px;
right: 350px;
height: 150px;
width: 150px;
opacity: 50%;
blur: 40%;
border-radius: 50%;
background: rgb(250,76,255);
background: linear-gradient(129deg, rgba(250,76,255,1) 0%, rgba(113,0,255,1) 100%);
box-shadow: 15px 15px 30px 5px rgba(113,0,255,1),
            -15px -15px 30px 5px rgba(250,76,255,1);
`
const Circle2 = styled.div`
position: absolute;
z-index: 0;
top: 1150px;
right: 800px;
height: 150px;
width: 150px;
opacity: 50%;
blur: 40%;
border-radius: 50%;
background: rgb(250,76,255);
background: linear-gradient(129deg, rgba(250,76,255,1) 0%, rgba(113,0,255,1) 100%);
box-shadow: 15px 15px 30px 5px rgba(113,0,255,1),
            -15px -15px 30px 5px rgba(250,76,255,1);
`


const Bubbles = styled.div`
  position:absolute;
  width:100%;
  min-height:280%;
  z-index:10;
  overflow:hidden;
  top:150px;
  right:0;
  /* transform: rotate(-90deg); */
`

const Bubble = styled.div`
  position: absolute;
  bottom:-100px;
  width:40px;
  height: 40px;
  background:red;
  border-radius:50%;
  opacity:0.5;
  animation: rise 20s infinite ease-in;

:nth-child(1){
  width:40px;
  height:40px;
  left:10%;
  animation-duration:45s;
}
:nth-child(2){
  width:20px;
  height:20px;
  left:20%;
  animation-duration:10s;
  animation-delay:1s;
}
:nth-child(3){
  width:50px;
  height:50px;
  left:35%;
  animation-duration:14s;
  animation-delay:2s;
}
:nth-child(4){
  width:80px;
  height:80px;
  left:50%;
  animation-duration:22s;
  animation-delay:0s;
}
:nth-child(5){
  width:35px;
  height:35px;
  left:55%;
  animation-duration:12s;
  animation-delay:1s;
}
:nth-child(6){
  width:45px;
  height:45px;
  left:65%;
  animation-duration:16s;
  animation-delay:3s;
}
:nth-child(7){
  width:90px;
  height:90px;
  left:70%;
  animation-duration:24s;
  animation-delay:2s;
}
:nth-child(8){
  width:25px;
  height:25px;
  left:80%;
  animation-duration:12s;
  animation-delay:2s;
}
:nth-child(9){
  width:15px;
  height:15px;
  left:70%;
  animation-duration:10s;
  animation-delay:1s;
}
:nth-child(10){
  width:90px;
  height:90px;
  left:25%;
  animation-duration:20s;
  animation-delay:4s;
}
@keyframes rise{
  0%{
    bottom:-100px;
    transform:translateX(0);
  }
  50%{
    transform:translate(100px);
  }
  100%{
    bottom:3500px;
    transform:translateX(-200px);
  }
}
`





export const FullArrow = () => {
  return(
    <F2div>
      <Arrow>
        <Arrow2/>
      </Arrow>
      <Arrow>
        <Arrow2/>
      </Arrow>
    </F2div>
  )
}

export const Circles = (props) => {
  return(
    <>
    <Circle/>
    <Circle2/>
    </>
  )
}

export const BGBubbles = () => {
  return(
    <section className="sticky">
      <Bubbles>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
        <Bubble/>
      </Bubbles>
    </section>
  )
}