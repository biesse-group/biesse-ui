/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { FC } from "react";

const breadcrumbStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  font-family: ${theme?.font?.family || "inherit"};
  font-weight: 500;
`;

const getSizeStyle = (size: BreadcrumbsProps["size"]) => {
  switch (size) {
    case "small":
      return (theme: Theme) => css`
        font-size: ${theme?.font?.size?.small || "12px"};
      `;
    case "large":
      return (theme: Theme) => css`
        font-size: ${theme?.font?.size?.large || "16px"};
      `;
    default:
      return (theme: Theme) => css`
        font-size: ${theme?.font?.size?.medium || "14px"};
      `;
  }
};

const linkStyle = (theme: Theme) => css`
  color: ${theme?.color?.secondary || "grey"};
  border: 0;
  text-decoration: none;
  margin: 0px 5px;
  cursor: pointer;
  :hover {
    text-decoration-line: underline;
  }
`;

const currentAddressStyle = css`
  color: black;
  text-decoration-line: underline;
  cursor: default;
  font-weight: bold;
`;

const disabledAddressStyle = css`
  pointer-events: none;
  cursor: default;
`;

export interface BreadcrumbsProps {
  /**
   * Links composing the Breadcrumbs component
   */
  links: {
    /**
     * New link title
     */
    title: string;
    /**
     * Disable the selected link
     */
    disabled?: boolean;
    /**
     * Override href
     */
    path?: string;
  }[];
  /**
   * Font Size
   */
  size?: "small" | "medium" | "large";
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ links, size }) => {
  return (
    <div css={[breadcrumbStyle, getSizeStyle(size)]}>
      {links.map((link, index) => {
        //Last child is not clickable and is highlighted
        if (index === links.length - 1) {
          return (
            <div key={index} style={{ display: "inherit" }}>
              <p>{">"}</p>
              <div css={[linkStyle, currentAddressStyle]}>
                <p>{link.title}</p>
              </div>
            </div>
          );
        }

        return (
          <div key={index} style={{ display: "inherit" }}>
            {index !== 0 && <p>{">"}</p>}
            <a
              css={link.disabled ? [linkStyle, disabledAddressStyle] : [linkStyle]}
              href={link.path || "/"}
            >
              <p>{link.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
