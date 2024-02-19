import { FC } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './theme-toggle.module.scss';
import { useTheme } from '@/app/providers/theme-provider';
import { Button } from '../button/button';
import { useTranslation } from 'react-i18next';

interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
    const { className } = props;
    const { toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            className={classNames(styles.themeToggle, {}, [className])}
            onClick={toggleTheme}
        >
            {t('Theme')}
        </Button>
    )
}