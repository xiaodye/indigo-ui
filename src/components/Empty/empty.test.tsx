import { render } from '@testing-library/react';
import Empty from './empty';

describe('test Empty component', () => {
  it('renders with default props', () => {
    const { getByText, container } = render(<Empty />);

    // 在默认情况下，应该渲染 "暂无数据" 的描述
    expect(getByText('暂无数据')).toBeInTheDocument();

    // 如果有默认的图片，验证图片的存在, 断言 SVG 元素是否存在
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('renders with custom description and image', () => {
    const customDescription = 'Custom Empty State';
    const customImage = <div>Custom Image</div>;

    const { getByText } = render(<Empty description={customDescription} image={customImage} />);

    // 验证自定义的描述和图片是否被渲染
    expect(getByText(customDescription)).toBeInTheDocument();
    expect(getByText('Custom Image')).toBeInTheDocument();
  });
});
