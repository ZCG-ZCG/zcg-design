import React from 'react'

export enum ButtonSize {
  Large = 'lg',
  medium = 'medium',
  small = 'small'
}

export enum ButtonType {
  Primary = 'primary',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Link = 'link',
  Text = 'text',
  Default = 'default'
 
}

interface ButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    size,
    btnType,
    children
  } = props

  // const cls

  return (<button></button>)
}