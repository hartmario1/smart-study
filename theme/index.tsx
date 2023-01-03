import { extendTheme } from '@chakra-ui/react';

const COLORS = {
  purple: '#7252ff',
  whitepurple: '#9f89ff',
  whiteblue: '#262e40ff',
  bgblue: '#1a202c',
  greypale: '#99AAB5'
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
  colors: COLORS
});
