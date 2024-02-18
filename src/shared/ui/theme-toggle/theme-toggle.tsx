import { FC } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './theme-toggle.module.scss';
import { useTheme } from '@/app/providers/theme-provider';
import { Button } from '../button/button';

interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(styles.themeToggle, {}, [className])}
            onClick={toggleTheme} >
            Theme
        </Button>
    )
}