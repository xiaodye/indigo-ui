import { render } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('简单测试', () => {
  it('case test', () => {
    expect(2 + 2).toBe(4);
    expect(2 / 0).not.toBe(-Infinity);
  });

  it('test true & false', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
  });
});

describe('测试 Button 组件', () => {
  it('button test', () => {
    const wrapper = render(<Button>abc</Button>);
    const element = wrapper.queryByText('abc');

    expect(element).toBeInTheDocument();
  });
});
