export interface ContainerProps {
  border?: boolean;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
}
export interface validateProps {
  name: string;
  message: string;
  email: string;
}