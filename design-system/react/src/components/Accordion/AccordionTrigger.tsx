import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';
import { Icon } from '../Icon';

import type * as t from './defs';
import { styles } from './styles';

export const AccordionTrigger =
  _unstable_createComponent<t.AccordionTriggerDef>(
    Components.AccordionTrigger,
    ({ children, ...props }) => {
      const classes = useStyles(styles, props, [
        'header',
        'root',
        'icon',
        'trigger',
      ]);
      const triggerElementProps = useElementProps(props, classes.trigger);

      return createElement(
        AC.AccordionHeader,
        { className: classes.header.className },
        <AC.AccordionTrigger {...triggerElementProps}>
          {children}
          <Icon
            icon="ChevronDown"
            aria-hidden
            className={classes.icon.className}
          />
        </AC.AccordionTrigger>,
      );
    },
  );
