import * as React                  from 'react';
import { BaseInput, SIZES, InputSize } from './BaseInput';
import styled                      from 'styled-components';
import { Icon }                        from '../Icon';

const PASSWORD = 'password';

const ICON_PADDINGS = {
  small:   '26px',
  default: '28px',
  large:   '28px',
};

const renderIcon = (icon, className) => {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return <Icon className={className} type={icon}/>;
  }

  return React.cloneElement(icon, { className });
};

const InputWrapper = ({
                        className,
                        prefixIcon,
                        suffixIcon,
                        inputRef,
                        allowClear,
                        onKeyDownEnter,
                        ...baseInputProps
                      }) => {
  const { onChange, type, inputSize, onKeyDown } = baseInputProps;
  const needWrapper                   =
          prefixIcon || suffixIcon || allowClear || type === PASSWORD;
  const ref                           = inputRef || React.createRef();
  const [inputType, setInputType]     = React.useState(type);

  const handleClickClear = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (ref.current) {
      ref.current.value = '';

      if (onChange) {
        ref.current.addEventListener('clearEvent', onChange);
        ref.current.dispatchEvent(new Event('clearEvent'));
      }
    }
  };

  const handleClickEye = (event) => {
    setInputType(inputType === PASSWORD ? '' : PASSWORD);
    event.stopPropagation();
    event.preventDefault();
  };

  const handleKeyDownEnter = (event) => {
    if (typeof onKeyDownEnter === 'function' && event.keyCode === 13) {
      onKeyDownEnter(event);
    }

    if (typeof onKeyDown === 'function') {
      onKeyDown(event);
    }
  };

  return needWrapper ? (
    <div className={className}>
      {renderIcon(prefixIcon, 'prefix-icon')}
      <BaseInput
        ref={ref}
        {...baseInputProps}
        type={inputType}
        onKeyDown={handleKeyDownEnter}
      />
      {renderIcon(suffixIcon, 'suffix-icon')}
      {allowClear && type !== PASSWORD && (
        <Icon
          className="clear-action"
          type="close-circle-filled-icon"
          onMouseDown={handleClickClear}
        />
      )}
      {type === PASSWORD && (
        <Icon
          className="password-eye"
          type={inputType === PASSWORD ? 'eye-slash' : 'eye'}
          onMouseDown={handleClickEye}
          size={inputSize}
        />
      )}
    </div>
  ) : (
    <BaseInput
      ref={ref}
      className={className}
      {...baseInputProps}
      type={inputType}
      onKeyDown={handleKeyDownEnter}
    />
  );
};

export const Input = styled(InputWrapper)`
  position: relative;
  width: 100%;
  display: flex;
  color: black;

  ${(props) => SIZES[props.inputSize] || SIZES.default};

  ${BaseInput} {
    position: absolute;
    top: 0;
    left: 0;

    padding-left: ${(props) =>
  props.prefixIcon && ICON_PADDINGS[props.inputSize]};
    padding-right: ${(props) =>
  props.suffixIcon && ICON_PADDINGS[props.inputSize]};
  }

  ${Icon} {
    color: ${(props) => props.theme.colors.dark85};
    line-height: inherit;

    &.prefix-icon {
      font-size: 16px;
      position: absolute;
      left: 8px;
      z-index: 1;
    }

    &.suffix-icon {
      position: absolute;
      right: 8px;
      z-index: 1;
    }

    &.password-eye {
      position: absolute;
      right: 8px;
      z-index: 2;
      right: 0;
      cursor: pointer;
    }

    &.clear-action {
      cursor: pointer;
      visibility: hidden;
      position: absolute;
      right: 8px;
      z-index: 2;
      color: ${({ theme }) => theme.colors.grey45};
    }
  }

  &:hover {
    ${Icon}.clear-action {
      visibility: visible;
    }
  }
`;

Input.defaultProps = {
  inputSize: InputSize.DEFAULT,
};
