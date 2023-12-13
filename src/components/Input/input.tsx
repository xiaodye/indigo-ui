import { CloseCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import { CSSProperties, ChangeEvent, FC, FocusEvent, KeyboardEvent, ReactNode, useState } from 'react';

type InputProps = {
  style?: CSSProperties;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  clearable?: boolean;
  placeholder?: string;
  value?: string | number;
  type?: string;
  showPassword?: boolean;
  status?: 'error' | 'warning';
  showEyeIcon?: boolean;
  clearableFn?: () => void;
  focus?: (e: FocusEvent<HTMLInputElement>) => void;
  blur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
