import { cleanup} from '@testing-library/react';
import Locations from '../components/molecules/Locations';

afterEach(cleanup);
test('Locations.js is present', () => {
  expect(<Locations/>).toBeTruthy()
})