import RelatedItems from '../../client/src/components/RelatedItems/RelatedItems.jsx';
import renderer from 'react-test-renderer';

test('Test Renderer', () => {

  const testRender = renderer.create(<RelatedItems />)
  expect(parseHelpers).not.toBeNull();
})