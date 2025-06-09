import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  tag?: TypographyTag;
  size?: TypographySize;
  children?: string;
}

const SIZE_MAP: Record<TypographySize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 40,
};

export const Typography: FC<TypographyProps> = ({
  tag = 'span',
  size = 'md',
  children,
  ...attributes
}) => {
  const Tag = tag;

  return (
    <Tag
      {...attributes}
      className={clsx('text-white', attributes.className)}
      style={{ fontSize: SIZE_MAP[size], ...attributes.style }}
    >
      {children}
    </Tag>
  );
};
