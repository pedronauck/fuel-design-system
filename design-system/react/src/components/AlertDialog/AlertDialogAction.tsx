import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

import type * as t from './defs';
import { styles } from './styles';

export const AlertDialogAction =
  _unstable_createComponent<t.AlertDialogActionDef>(
    Components.AlertDialogAction,
    (props) => {
      const classes = useStyles(styles, props, ['action']);
      const elementProps = useElementProps(props, classes.action);
      return createElement(RAlertDialog.AlertDialogAction, elementProps);
    },
  );

AlertDialogAction.defaultProps = {
  asChild: true,
};
