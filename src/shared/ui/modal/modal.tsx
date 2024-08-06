import { useTheme } from 'app/providers/theme-provider';
import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/class-names';
import { Portal } from '../portal/portal';
import styles from './modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, isOpen, onClose, lazy,
  } = props;
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setIsMounted(true);
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  if (lazy && !isMounted) return null;

  return isOpen
    && (
      <Portal>
        <div className={classNames(styles.modal, {}, [className, theme])}>
          <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.content} onClick={handleContentClick}>
              <span className={styles.closeButton} onClick={handleClose} />
              {props.children}
            </div>
          </div>
        </div>
      </Portal>
    );
};
