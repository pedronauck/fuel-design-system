import { css } from '@fuel-ui/css';

export { close } from '../Dialog/styles';

export const content = css({
  overflowX: 'auto',
  position: 'relative',
  minHeight: '100%',
  maxHeight: '100%',
  background: '$overlayBg',
  boxShadow: '$lg',
});

export const underlay = css({
  position: 'absolute',
  zIndex: '$50',
  inset: 0,
  background: '$blackA10',
  display: 'flex',

  variants: {
    side: {
      left: {
        justifyContent: 'flex-start',

        '.fuel_DrawerContent': {
          borderRight: '1px solid $borderColor',
        },
      },
      right: {
        justifyContent: 'flex-end',

        '.fuel_DrawerContent': {
          borderLeft: '1px solid $borderColor',
        },
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
});

// ----------------------------------------------------------------------------
// Sizes
// ----------------------------------------------------------------------------

type Size = string | number;

const SIZES = {
  sm: '300px',
  md: '500px',
  lg: '768px',
};

export function getSize(size: Size) {
  const width = SIZES[size] || size;
  return { maxWidth: width, width };
}
