import { render } from '@testing-library/react';
import Divider from './divider';

describe('test Divider Component', () => {
  it('basic test', () => {
    const { getByRole, unmount } = render(<Divider />);
    const element = getByRole('separator');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('divider divider-horizontal divider-with-text-center');
    unmount();
  });

  it('vertical', () => {
    const { getByRole, unmount } = render(<Divider type="vertical" />);
    const element = getByRole('separator');

    expect(element).toHaveClass('divider-vertical');
    unmount();
  });

  it('orientation', () => {
    const { getByRole, unmount } = render(<Divider orientation="left" />);
    const element = getByRole('separator');

    expect(element).toHaveClass('divider-with-text-left');
    unmount();
  });

  it('test children', () => {
    const { getByText, unmount } = render(<Divider>hello</Divider>);
    const element = getByText('hello');

    expect(element).not.toHaveClass('divider-with-text');
    unmount();
  });
});
