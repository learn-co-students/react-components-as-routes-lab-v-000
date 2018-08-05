import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// components
import Movies from '../src/components/Movies';

// data
import { movies } from '../src/data';


describe('Movies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movies />);
  })

});
