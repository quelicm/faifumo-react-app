import React from 'react';
import { render } from 'react-testing-library';
import Button from '../Button';

describe('Button Sample Test with react-testing-library', () => {
  it('renders the Image', () => {
    const { container } = render(<Button type="submit">Save</Button>);
    const buttonNode = container.querySelector('button');
    const buttonType = buttonNode.getAttribute('type');
    expect(buttonType).toEqual('submit');
  });
});
