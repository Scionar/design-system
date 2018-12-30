import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders', () => {
    expect(shallow(<Button />)).toBeTruthy();
  });

  it('has button class', () => {
    expect(
      mount(<Button />)
        .render()
        .hasClass('button')
    ).toEqual(true);
  });

  it('takes modifiers and presentates them right', () => {
    expect(
      mount(<Button modifier="disabled" />)
        .render()
        .hasClass('button--disabled')
    ).toEqual(true);
  });

  it('triggers event on click', () => {
    const onClickEvent = jest.fn();
    mount(<Button onClick={onClickEvent} />).simulate('click');
    expect(onClickEvent.mock.calls.length).toEqual(1);
  });
});
