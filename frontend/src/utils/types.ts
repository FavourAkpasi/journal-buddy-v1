import { ReactNode } from 'react';

export type TButtonProps = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
};

export type ButtonPropsT = {
    color?: string;
    bgcolor?: string;
    icon?: JSX.Element;
    text: string;
    loading?: boolean;
    onClick?: () => void;
  }