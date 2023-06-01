import type { ReactNode } from 'react';

import type { FlexProps } from '../Box/Flex';

import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type HelperIconProps = FlexProps & {
  message: ReactNode;
  iconSize?: number;
};

export type HelperIconDef = CreateComponent<{
  type: 'div';
  component: Components.HelperIcon;
  props: HelperIconProps;
  element: HTMLDivElement;
  styles: 'root';
}>;
