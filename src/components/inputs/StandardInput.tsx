import React from 'react';
import classNames from 'classnames';

type Props = {
  placeholder: string;
  isLoading?: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  isError?: boolean;
};

const StandardInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, isLoading, onChange, disabled, isError }, ref) => {
    const inputClassName = classNames([
      'ui',
      disabled && 'disabled',
      'fluid',
      'icon',
      'input',
      isLoading && 'loading',
      isError && 'error',
    ]);

    return (
      <div className={inputClassName} style={{ width: '100%', height: 50 }}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          ref={ref}
        />
        {isLoading && <i className="search icon" />}
      </div>
    );
  }
);

export default StandardInput;
