import React from 'react';

interface CommonButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  styleButton?: string;
  styleLabel?: string;

}

const CommonButton: React.FC<CommonButtonProps> = ({
  type = 'button',
  label,
  onClick,
  styleButton = '',
  styleLabel = "",

}) => {
  return (
    // <div className='border-2 border-dashed'>
      <button type={type} onClick={onClick} className={styleButton}>
        <p className={styleLabel}>{label}</p>
      </button>
    // </div>
  );
};

export default CommonButton;
