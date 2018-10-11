import React from 'react';
import { shallow } from 'enzyme';
import IOBoxes from './IOBoxes'

it('expect to render SearchBox component', () => {
    expect(shallow(<IOBoxes /> )).toMatchSnapshot();
})
 