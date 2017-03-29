import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Entry from './Entry'
import styles from './styles.module.css'

describe('<Entry />', () => {
  let wrapper;
  let history = {};
  beforeEach(() => {
    wrapper =
      shallow(<Entry history={history}/>)
  })

  it('has a Router component', () => {
    expect(wrapper.find('Router'))
      .to.have.length(1);
  });

  it('passes a history prop', () => {
    const props = wrapper.find('Router').props();

    expect(props.history)
      .to.be.defined;
  })

});
