import { fireEvent, render } from '@testing-library/react';
import Button from '.';

describe('test button component', () => {
  it('test button document', () => {
    const wrapper = render(<Button>abc</Button>);
    const element = wrapper.queryByText('abc');
    expect(element).toBeInTheDocument();
  });

  it('should render the correct default button', () => {
    const wrapper = render(<Button>btn1</Button>);
    const element = wrapper.queryByText('btn1');
    expect(element?.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });

  it('should render the link button', () => {
    const { getByText } = render(
      <Button type="link" href="https://baidu.com">
        btn2
      </Button>,
    );

    const element = getByText('btn2');
    expect(element?.tagName).toBe('A');
  });

  it('button disabled', () => {
    const { getByText } = render(
      <Button type="link" href="https://baidu.com" disabled>
        btn3
      </Button>,
    );

    const element = getByText('btn3');
    expect(element).toHaveClass('disabled');
  });

  it('button size', () => {
    const { getByText } = render(<Button size="large">btn-size</Button>);
    const element = getByText('btn-size');

    expect(element).toHaveClass('btn-large');
  });

  it('circle button', () => {
    const { getByText } = render(<Button circle>btn-circle</Button>);
    const element = getByText('btn-circle');

    expect(element).toHaveClass('circle');
  });

  it('button click event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>btn-click</Button>);
    const element = getByText('btn-click');

    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
