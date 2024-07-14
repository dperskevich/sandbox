import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Portal } from '../portal/portal';
import styles from './modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return isOpen
    && (
      <Portal>
        <div className={classNames(styles.modal, {}, [className])}>
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
