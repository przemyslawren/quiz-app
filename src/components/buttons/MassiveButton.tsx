import React from 'react';

type Props = {
  title: string;
  onClick: () => void;
};

const MassiveButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div className="massive ui button" onClick={onClick}>
      {title}
    </div>
  );
};

export default MassiveButton;
