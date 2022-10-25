import Star from '../../assets/Star.png';
import quarterStar from '../../assets/quarterStar.png';
import halfStar from '../../assets/halfStar.png';
import threefourthsStar from '../../assets/3fourthsStar.png';
import fullstar from '../../assets/fullstar.png';
import styled from 'styled-components';

/////////////Styles////////////////////////////////
const AStar = styled.img`
  width: 1em;
  height: auto;
`;



//credit Ben Tanaka
const SmallStarBar = function ({rating}) {

  rating = ((rating / .25).toFixed(0)) * .25;
  const ratingsArray = new Array(Math.floor(rating)).fill(fullstar);
  rating = rating - Math.floor(rating);

  if (rating === .75) {
    ratingsArray.push(threefourthsStar)
  } else if (rating === .5) {
    ratingsArray.push(halfStar)
  } else if (rating === .25) {
    ratingsArray.push(quarterStar)
  }
  while (ratingsArray.length < 5) {
    ratingsArray.push(Star)
  }

  return (
    <div>
      {ratingsArray.map((item, index)=> {
        return <AStar key={index} src={item}></AStar>
      })}
    </div>
  )
}
export default SmallStarBar