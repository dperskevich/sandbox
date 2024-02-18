import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names';
import styles from './app-link.module.scss';

export enum AppLinkVariant {
    Primary = 'primary',
    Secondary = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, variant = AppLinkVariant.Primary, children } = props;

    return (
        <Link {...props} className={classNames(styles.appLink, {}, [className, styles[variant]])}>
            {children}
        </Link>
    )
}