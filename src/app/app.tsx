import { userActions } from 'entities/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/class-names/class-names';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {})}>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
