import { classNames } from '@/shared/lib/class-names';
import { useTheme } from '@/app/providers/theme-provider';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/navbar';
// it's not a module.scss, because we want to import the whole file
import './styles/app.scss';
import { Sidebar } from '@/widgets/sidebar';

const App = () => {
  const { theme } = useTheme();

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
