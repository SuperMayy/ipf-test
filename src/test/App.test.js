import { cleanup} from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
import Home from '../components/pages/Home';
import Weather from '../components/pages/Weather';
import ErrorPage from '../components/pages/ErrorPage';
import { Route } from 'react-router-dom';

let pathMap = {};

afterEach(cleanup);
test('App.js is present', () => {
  expect(<App/>).toBeTruthy()
})

describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.element.type;
        return pathMap;
      }, {});
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(Home);
  })
  it('should show Weather component for /news router', () => {
    expect(pathMap['/weather/:id']).toBe(Weather);
  })
  it('should show ErrorPage component for route not defined', ()=>{
      expect(pathMap['*']).toBe(ErrorPage );
  })
})