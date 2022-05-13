import type { Colors } from "@fuels-ui/css";
import { allColors, css, cx, styled } from "@fuels-ui/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Icon } from "../Icon";

export type LinkProps = HTMLProps["a"] & {
  isExternal?: boolean;
  color?: Colors;
};

const Root = styled("a");

export const Link = createComponent<LinkProps>(
  ({ isExternal, className, children, color, ...props }) => {
    const customProps = {
      ...props,
      role: "link",
      className: cx("fuel_link", className, styles.link({ color })),
      ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
    };

    return createElement(
      Root,
      customProps,
      <>
        {children} {isExternal && <Icon icon="ExternalLinkIcon" />}
      </>
    );
  }
);

const styles = {
  link: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "$2",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },

    variants: {
      // TODO: adjust typings
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      color: (allColors as any[]).reduce(
        (obj, key) => ({
          ...obj,
          [key]: {
            color: `$${key}`,
            "&:visited": {
              color: `$${key}`,
            },
          },
        }),
        {}
      ),
    },

    defaultVariants: {
      color: "accent9",
    },
  }),
};
