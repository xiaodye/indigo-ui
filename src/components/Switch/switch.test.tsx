import { fireEvent, render } from '@testing-library/react';
import { Switch } from '.';

describe('Switch Component', () => {
  it('renders with default props', () => {
    const { getByRole, unmount } = render(<Switch />);

    // 验证 Switch 是否被渲染
    const switchElement = getByRole('switch');
    expect(switchElement).toBeInTheDocument();

    // 验证 Switch 默认状态为未选中
    expect(switchElement).not.toHaveClass('checked');
    unmount();
  });

  it('test onChange', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<Switch onChange={onChangeMock} />);

    // 验证 Switch 默认状态为未选中
    const switchElement = getByRole('switch');

    // 模拟点击开关
    fireEvent.click(switchElement);

    // 验证 onChange 是否被调用
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
