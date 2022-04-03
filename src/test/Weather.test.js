import { cleanup} from '@testing-library/react';
import { shallow} from 'enzyme';
import Weather from '../components/pages/Weather'

afterEach(cleanup);
test('Weather.js is present', () => {
  expect(<Weather />).toBeTruthy()
})

describe('Weather Component Conditionalling rendering', () => {

     const wrapper = shallow(<Weather />);
  
  it('should show error-message if Pending initially as is true', () => {
    let error = wrapper.find('div.error-message')
    expect(error).toBeTruthy()
  })
  
})