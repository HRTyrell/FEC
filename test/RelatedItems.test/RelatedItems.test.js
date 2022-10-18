import Carousel from '../../client/src/components/RelatedItems/Carousel.jsx';
import YourOutfit from '../../client/src/components/RelatedItems/YourOutfit.jsx';
import testData from '../../client/src/components/RelatedItems/testData.js';
import renderer from 'react-test-renderer';


it('next hides on change', () => {
  const CarouselRender = renderer.create(
  <Carousel data={testData}><YourOutfit/></Carousel>
  );

  let tree = CarouselRender.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.setShowNext(false);
  })

  tree = CarouselRender.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.setShowNext(true);
  })
  tree = CarouselRender.toJSON();
  expect(tree).toMatchSnapshot();

  expect(parseHelpers).not.toBeNull();
})