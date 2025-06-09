import { FC, ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
}

export const Container: FC<ContainerProps> = props => {
  return <div className={'ml-auto mr-auto w-[1140px]'}>{props.children}</div>;
};
