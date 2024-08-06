import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Modal } from 'shared/ui/modal/modal';
import { LoginForm } from '../login-form/login-form';
import styles from './login-modal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(styles.loginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
