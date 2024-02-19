import { FC } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './navbar.module.scss';
import { AppLink } from '@/shared/ui';
import SandboxIcon from '@/shared/assets/icons/sandbox.svg';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <SandboxIcon className={styles.logo} />
            <div className={styles.title}>Sandbox</div>
            <div className={styles.links}>
                <AppLink to="/">{t("Main")}</AppLink>
                <AppLink to="/about">{t("About")}</AppLink>
            </div>
        </div>
    )
}