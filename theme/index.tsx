import { extendTheme } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  control: {
    borderRadius: 6, // change the border radius of the control
    _checked: {
      bg: '#6366f1',
      borderColor: '#6366f1'
    }
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })

const COLORS = {
  purple: '#6366f1',
  hoverpurple: '#4446A6',
} as const;
Object.freeze(COLORS);

const CONFIG = {
  initialColorMode: 'light',
  useSystemColorMode: false
} as const;
Object.freeze(CONFIG);

const STYLES = { } as const;
Object.freeze(STYLES);

export { COLORS, CONFIG, STYLES };

export default extendTheme({
  styles: STYLES,
  config: CONFIG,
  colors: COLORS,
  components: { Checkbox: checkboxTheme }
});
