import { FC } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './navbar.module.scss';
import { AppLink } from '@/shared/ui';
import SandboxIcon from '@/shared/assets/icons/sandbox.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <SandboxIcon className={styles.logo} />
            <div className={styles.title}>Sandbox</div>
            <div className={styles.links}>
                <AppLink to="/">Main</AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    )
}