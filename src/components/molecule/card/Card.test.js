import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Card from './Card';

describe('Card', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Card>
        <div>
          <p>Card</p>
        </div>
      </Card>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
