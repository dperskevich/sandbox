import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/class-names';
import styles from './sidebar.module.scss';
import { Button, ThemeToggle } from '@/shared/ui';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>Toggle Sidebar</Button>
            <div className={classNames(styles.bottomToolbar, {}, [])}>
                <ThemeToggle className={styles.themeToggle} />
            </div>
        </div>
    )
}