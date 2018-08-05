import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// components
import Actors from '../src/components/Actors'

// data
import { actors } from '../src/data'


describe('Actors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Actors />);
  })


});
