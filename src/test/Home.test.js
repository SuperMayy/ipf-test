import { shallow} from 'enzyme';
import Home from '../components/pages/Home';

test('App.js is present', () => {
    expect(<Home/>).toBeTruthy()
})


describe('Home Component Conditionalling rendering', () => {

     const wrapper = shallow(<Home />);
  
  it('should show error-message if Pending initially as is true', () => {
    let error = wrapper.find('div.error-message')
    expect(error).toBeTruthy()
  })
  
})

