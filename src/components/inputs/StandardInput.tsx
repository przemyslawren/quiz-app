import React from 'react';
import classNames from 'classnames';

type Props = {
  placeholder: string;
  isLoading: boolean;
  onChange: (value: string) => void;
};

const StandardInput: React.FC<Props> = ({
  placeholder,
  isLoading,
  onChange,
}) => {
  const inputClassName = classNames([
    'ui',
    'fluid',
    'icon',
    'input',
    isLoading && 'loading',
  ]);

  return (
    <div className={inputClassName}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      {isLoading && <i className="search icon" />}
    </div>
  );
};

export default StandardInput;
