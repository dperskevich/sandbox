import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode; // what to teleport
  element?: HTMLElement; // where to teleport
}

export const Portal: FC<PortalProps> = (props) => {
  // better to use dicument.body as a default value
  // styles import architecture does not allow to di this so far
  const { children, element = document.getElementsByClassName('app')[0] } = props;
  return createPortal(children, element);
};
