import styled from "styled-components";


const StyledCharacteristicBar = styled.div`
  border-style: solid;
  background-color: LightGray;
`;

const StyledIcon = styled.i`
  position: relative;
  left: ${props=> props.position};
`;

export const ProductBreakdownFactor = ({characteristic, data})=> {

  let iconPosition = ((Number(data.value) / 5) * 100).toFixed(2);
  iconPosition = iconPosition > 93? '93%': `${iconPosition}%`;

  return (
  <div>
    <header>{characteristic}</header>
    <StyledCharacteristicBar><StyledIcon position={iconPosition}>▼</StyledIcon></StyledCharacteristicBar>
  </div>
  )
}