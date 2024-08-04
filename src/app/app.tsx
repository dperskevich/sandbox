import { classNames } from 'shared/lib/class-names/class-names';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from './providers/router';

const App = () => (
  <div className={classNames('app', {})}>
    <Navbar />
    <div className="app-content">
      <Sidebar />
      <AppRouter />
    </div>
  </div>
);

export default App;
