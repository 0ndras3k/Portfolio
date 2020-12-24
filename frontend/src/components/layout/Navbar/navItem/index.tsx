import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export type NavItemProps = PropsWithChildren<{
  to?: string;
  href?: string;
}>;

export const NavItem = ({ to, href, children }: NavItemProps) => {
  return (
    <>
      <li className="head" id="home">
        {to ? (
          <NavLink activeClassName="active" to={to}>
            {children}
          </NavLink>
        ) : (
          <a href={href}>{children}</a>
        )}
      </li>
    </>
  );
};
