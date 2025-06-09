import { FC, ReactNode } from 'react';

interface BackgroundProps {
  children?: ReactNode;
}

export const Background: FC<BackgroundProps> = props => {
  return (
    <div className={'bg-stone-900 min-h-screen min-w-screen'}>
      {props.children}
    </div>
  );
};
