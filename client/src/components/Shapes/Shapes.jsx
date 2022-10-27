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