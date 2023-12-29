import { CloseCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import { CSSProperties, ChangeEvent, FC, FocusEvent, KeyboardEvent, ReactNode, useState } from 'react';

type InputProps = {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 前置图标
   */
  prefix?: ReactNode;
  /**
   * @description 后置图标
   */
  suffix?: ReactNode;
  /**
   * @description 是否带清除图标
   * @default false
   */
  clearable?: boolean;
  /**
   * @description 提示文字
   */
  placeholder?: string;
  /**
   * @description 表单值
   */
  value?: string | number;
  /**
   * @description 输入框类型
   */
  type?: string;
  /**
   * @description 展示密码
   * @default text
   */
  showPassword?: boolean;
  /**
   * @description 输入框类型
   */
  status?: 'error' | 'warning';
  /**
   * @description 展示眼睛图标
   * @default false
   */
  showEyeIcon?: boolean;
  /**
   * @description 清除函数
   * @returns
   */
  clearableFn?: () => void;
  /**
   * 表单聚焦回调函数
   * @param e
   * @returns
   */
  focus?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   * 输入框失焦回调函数
   * @param e
   * @returns
   */
  blur?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   * 输入框值改变回调函数
   * @param e
   * @returns
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * 回车触发函数
   * @param e
   * @returns
   */
  onEnter?: (e: KeyboardEvent<HTMLDivElement>) => void;
};

const Input: FC<InputProps> = ({
  style,
  className,
  prefix,
  suffix,
  clearable = false,
  clearableFn,
  focus,
  blur,
  placeholder,
  value = '',
  type = 'text',
  status,
  showEyeIcon = false,
  onChange,
  onEnter,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [passwordIsShow, setPasswordIsShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  const innerClass = classNames({
    'cobalt-input-inner': true,
    [`cobalt-input-inner-${status}`]: true,
  });

  const inputClass = classNames({
    'cobalt-input': true,
    'cobalt-input-prefix': prefix,
    'cobalt-input-suffix': suffix,
    className,
  });

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const inputEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnter?.(e);
    }
  };

  const handlerClearClick = () => {
    setInputValue('');
    clearableFn?.();
  };

  /**
   * 密码的显示与隐藏切换
   */
  const toggleIcon = () => {
    setPasswordIsShow(!passwordIsShow);
  };

  useUpdateEffect(() => {
    setInputType(passwordIsShow ? type : 'text');
  }, [passwordIsShow]);

  return (
    <div className={innerClass} style={style}>
      {prefix}

      <input
        type={inputType}
        placeholder={placeholder}
        className={inputClass}
        onChange={inputChange}
        onKeyDown={inputEnter}
        value={inputValue}
        onFocus={(e) => focus?.(e)}
        onBlur={(e) => blur?.(e)}
      />

      {suffix}
      {clearable && inputValue !== '' && type !== 'password' && <CloseCircleOutlined onClick={handlerClearClick} />}
      {showEyeIcon &&
        (passwordIsShow ? <EyeOutlined onClick={toggleIcon} /> : <EyeInvisibleOutlined onClick={toggleIcon} />)}
    </div>
  );
};

export default Input;
export type { InputProps };
