import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../utils'
import { CommonProps, StyleOptionProps } from '../../interfaces'

type ButtonStyleProps = Pick<
  Required<StyleOptionProps<Record<string, never>>>,
  'size' | 'variant' | 'primary' | 'secondary' | 'rounded' | 'icon'
>
type ButtonProps = PropsWithChildren<StyleOptionProps<CommonProps>> & {
  badge?: boolean
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

/* Buttton props에 따른 클래스 객체 리턴 */
const getClasses = ({
  size,
  variant,
  primary,
  secondary,
  icon,
}: ButtonStyleProps) => {
  /* const isSolid = variant === 'solid' */
  /* const isOutline = variant === "outline"; */
  /* const isGhost = variant === 'ghost' */
  const classesBySize = {
    mini: cn('text-label4', icon ? 'size-6' : 'px-1.5 py-0.5'),
    small: cn('text-label3', icon ? 'size-8' : 'px-3 py-1.5'),
    medium: cn('text-label2', icon ? 'size-9' : 'px-3 py-2'),
    default: cn('text-label2', icon ? 'size-10' : 'px-4 py-2.5'),
    large: cn('text-label1', icon ? 'size-12' : 'px-4 py-3'),
  }
  const classesByVariant = {
    solid: cn(
      'group-[.is-group]/button:ml-px group-[.is-group]/button:first-of-type:ml-0',
      primary
        ? 'bg-brand-primary hover:bg-brand-primary-hovered active:bg-brand-primary-pressed focus:bg-brand-primary text-content-label'
        : secondary
          ? 'bg-background-tertiary hover:bg-border-tertiary active:bg-border-secondary focus:bg-background-tertiary text-brand-primary hover:text-brand-primary-hovered active:text-brand-primary-pressed focus:text-brand-primary'
          : 'text-content-primary bg-background-tertiary hover:bg-border-tertiary active:bg-background-secondary focus:bg-background-tertiary'
    ),
    outline: cn(
      'border group-[.is-group]/button:-ml-px group-[.is-group]/button:first-of-type:ml-0',
      primary
        ? 'border-brand-primary hover:border-brand-primary-hovered active:border-brand-primary-pressed focus:border-brand-primary text-brand-primary'
        : 'border-border-primary text-content-tertiary'
    ),
    ghost: '',
  }
  return cn(classesBySize[size], classesByVariant[variant])
}

function Button(
  {
    children,
    className,
    badge,
    primary = false,
    secondary = false,
    size = 'medium',
    variant = 'solid',
    rounded = true,
    icon = false,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const classnames = cn(
    'group/button',
    'inline-flex items-center justify-center space-x-1.5',
    'outline-none transition-all whitespace-nowrap',
    'focus:ring-2 focus:ring-brand-primary',
    {
      'rounded-sm group-[.is-group]/button:rounded-none': rounded,
      'group-[.is-group]/button:first-of-type:rounded-l-sm': rounded,
      'group-[.is-group]/button:last-of-type:rounded-r-sm': rounded,
      'focus:group-[.is-group]/button:rounded-sm': rounded,
      'rounded-full': rounded && icon,
      'hover:bg-brand-primary-soft-hovered active:bg-brand-primary-soft-pressed':
        icon,
    },
    getClasses({ size, variant, primary, secondary, rounded, icon }),
    'disabled:bg-border-tertiary disabled:text-content-disabled disabled:cursor-not-allowed',
    { relative: badge },
    className
  )
  return (
    <button ref={ref} className={classnames} {...props}>
      {children}
      {badge && (
        <span
          className={cn(
            primary ? 'bg-content-label' : 'bg-brand-primary',
            'w-1 h-1 absolute top-0.5 right-0.5 rounded-full overflow-hidden'
          )}
        />
      )}
    </button>
  )
}

export const ButtonGroup = ({
  children,
  className,
}: PropsWithChildren<StyleOptionProps<CommonProps>>) => {
  const classnames = cn(
    {
      'inline-flex items-stretch gap-0 is-group group/button': true,
    },
    className
  )
  return <div className={classnames}>{children}</div>
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef<HTMLButtonElement, ButtonProps>(Button)
