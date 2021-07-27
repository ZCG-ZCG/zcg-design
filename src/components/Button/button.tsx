import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  large = 'lg',
  medium = 'medium',
  small = 'small'
}

export enum ButtonType {
  Primary = 'primary',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Link = 'link',
  Text = 'text',
  Default = 'default',
  Danger = 'danger'
}

interface ButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode
  href?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, size, btnType, children, href } = props

  const cls = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={cls} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}
