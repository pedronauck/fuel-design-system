/// <reference types="@stitches/react" />

import { ColorKeys, allColorKeys } from '@fuel/theme'
import { css, colors } from '@fuel/theme'
import tw from 'twin.macro'
import Color from 'color'

function createSolidVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const background = colors[`${color}500`]
  const borderColor = Color(background).darken(0.2).toString()
  return {
    boxShadow: `$sm`,
    fontWeight: '$semibold',
    borderColor: borderColor,
    background: `$${color}500`,
    color: `white`,
    '&:not(.disabled):hover': {
      background: borderColor,
    },
  }
}

function createOutlinedVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}600`
  const borderColor = `$${color}500`
  return {
    borderColor,
    background: 'transparent',
    color: textColor,
    '&:not(.disabled):hover': {
      color: 'white',
      background: borderColor,
    },
  }
}

function createGhostVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = colors[`${color}600`]
  const background = colors[`${color}100`]
  const hover = Color(background).darken(0.05).saturate(0.2).toString()
  return {
    background,
    color: textColor,
    boxShadow: 'none',
    borderColor: 'transparent',
    '&:not(.disabled):hover': {
      background: hover,
    },
  }
}

function createLinkVariant(keyColor: ColorKeys) {
  const color = String(keyColor)
  const textColor = `$${color}600`
  return {
    ...tw`p-0 h-auto min-w-auto bg-transparent border-transparent border-none shadow-none`,
    ...tw`hover:(bg-transparent underline)`,
    color: textColor,
  }
}

export const button = css({
  ...tw`
    appearance-none inline-flex items-center justify-center
    border border-transparent rounded-lg transition-all
    focus:(z-0)
  `,

  variants: {
    size: {
      xs: {
        ...tw`gap[5px] px-2 text-xs h-7 min-w-6`,
      },
      sm: {
        ...tw`gap-2 px-3 text-sm h-8 min-w-9`,
      },
      md: {
        ...tw`gap-2 px-4 text-base h-10 min-w-14`,
      },
      lg: {
        ...tw`gap-3 px-5 text-lg h-12 min-w-20`,
      },
    },

    color: {
      ...allColorKeys.reduce(
        (obj, key: any) => ({ ...obj, [key]: createSolidVariant(key) }),
        {}
      ),
    },

    variant: {
      solid: {},
      outlined: {},
      ghost: {},
      link: {
        ...tw`p-0 h-auto min-w-auto border-none shadow-none`,
        '&:not(.disabled):hover': tw`underline`,
      },
    },

    disabled: {
      true: tw`opacity-60 cursor-default`,
    },

    justIcon: {
      true: tw`min-w-auto`,
    },
  },

  compoundVariants: [
    /**
     * Outlined
     */
    ...allColorKeys.map((key) => ({
      color: key,
      variant: 'outlined',
      css: createOutlinedVariant(key),
    })),

    /**
     * Ghost
     */
    ...allColorKeys.map((key) => ({
      color: key,
      variant: 'ghost',
      css: createGhostVariant(key),
    })),

    /**
     * Link
     */
    ...allColorKeys.map((key) => ({
      color: key,
      variant: 'link',
      css: createLinkVariant(key),
    })),

    { size: 'xs', justIcon: true, css: tw`px-2` },
    { size: 'sm', justIcon: true, css: tw`px-2` },
    { size: 'md', justIcon: true, css: tw`px-3` },
    { size: 'lg', justIcon: true, css: tw`px-4` },
  ],

  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
  },
})
