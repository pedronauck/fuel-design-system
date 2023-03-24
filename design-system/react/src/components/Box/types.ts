import type { ThemeUtilsCSS } from '@fuel-ui/css';

import type { BoxCentered } from './BoxCentered';
import type { Flex } from './Flex';
import type { Stack } from './Stack';

import type { Components } from '~/types';
import type { CreateComponent, HTMLProps } from '~/utils';

export type BoxProps = HTMLProps['div'];

export type BoxDef = CreateComponent<{
  component: Components.Box;
  type: 'div';
  props: BoxProps;
  element: HTMLDivElement;
  styles: 'root' | 'flex' | 'centered' | 'stack';
  namespace: {
    Centered: typeof BoxCentered;
    Flex: typeof Flex;
    Stack: typeof Stack;
  };
}>;

export type FlexProps = HTMLProps['div'] & {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: ThemeUtilsCSS['alignItems'];
  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemProps["flexBasis"]
   */
  basis?: ThemeUtilsCSS['flexBasis'];
  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemProps["flexDirection"]
   */
  direction?: ThemeUtilsCSS['flexDirection'];
  /**
   * Shorthand for `gap` style prop
   * @type SystemProps["gap"]
   */
  gap?: ThemeUtilsCSS['gap'];
  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemProps["flexGrow"]
   */
  grow?: ThemeUtilsCSS['flexGrow'];
  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: ThemeUtilsCSS['justifyContent'];
  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemProps["flexShrink"]
   */
  shrink?: ThemeUtilsCSS['flexShrink'];
  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: ThemeUtilsCSS['flexWrap'];
};

export type FlexDef = CreateComponent<{
  type: 'div';
  component: Components.Flex;
  element: HTMLDivElement;
  props: FlexProps;
  styles: 'root';
}>;

export type BoxCenteredProps = FlexProps & {
  /**
   * max-width: '100vh
   */
  minWS?: boolean;
  /**
   * max-height: '100vh
   */
  minHS?: boolean;
};

export type BoxCenteredDef = CreateComponent<{
  type: 'div';
  component: Components.BoxCentered;
  props: BoxCenteredProps;
  element: HTMLDivElement;
}>;

export type StackProps = FlexProps;

export type StackDef = CreateComponent<{
  type: 'div';
  props: StackProps;
  element: HTMLDivElement;
  component: Components.Stack;
  styles: 'root';
}>;
