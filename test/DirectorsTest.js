import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// components
import Directors from '../src/components/Directors'

// data
import { directors } from '../src/data'

describe('Directors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Directors />);
  })


});
