import { StyledButton } from './styleData/commonStyles'
import { sizeStyles, colorStyles } from './styleData/dynemicStyles'

function btn(fontSize, color) {
  function StyledButtonConstructor({
    onClick = () =>
      console.log(`I am a ${color} button with ${fontSize} font-size`),
    children,
    disabled = false,
    border = true,
    reg = {},
    mob = {},
  }) {
    return (
      <StyledButton
        onClick={onClick}
        style={{
          size: sizeStyles[fontSize],
          color: colorStyles[color],
          activity: !disabled,
          border,
        }}
        reg={reg}
        mob={mob}
        disabled={disabled}
      >
        {children}
      </StyledButton>
    )
  }
  return StyledButtonConstructor
}

export const Button = {
  s16l: { blue: btn(161, 'blueLight') },
  s16d: { blue: btn(162, 'blueDark') },
  s18: { blue: btn(18, 'blue'), white: btn(18, 'white') },
}
