import classNames from 'classnames';
import React from 'react';

type Props = {
  title: string;
  onClick: () => void;
  isMassive?: boolean;
  disabled?: boolean;
  color?: string;
};

const StandardButton: React.FC<Props> = ({
  title,
  onClick,
  isMassive,
  disabled,
  color,
}) => {
  const buttonClassname = classNames([
    isMassive && 'massive',
    color && color,
    disabled && 'disabled',
    'ui',
    'button',
  ]);

  return (
    <div className={buttonClassname} onClick={onClick}>
      {title}
    </div>
  );
};

export default StandardButton;
