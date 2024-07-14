import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import { Navbar } from 'widgets/navbar';
// it's not a module.scss, because we want to import the whole file
import './styles/app.scss';
import { Sidebar } from 'widgets/sidebar';
import { useState } from 'react';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
