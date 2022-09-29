import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ILink extends LinkProps {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  effectColor?: string;
}

export const Link = ({
  children,
  href,
  onClick,
  effectColor = "#fff",
  ...rest
}: ILink) => {
  return (
    <>
      <NextLink href={href} passHref>
        <ChakraLink
          onClick={onClick}
          sx={{ "&:after": { bg: effectColor } }}
          {...rest}
        >
          {children}
        </ChakraLink>
      </NextLink>
    </>
  );
};
