import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home, AddEmployee, EditEmployee } from './components';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <div className="App" style={{ maxWidth: 1040, margin: '0 auto' }}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add" component={AddEmployee} exact />
            <Route path="/edit/:id" component={EditEmployee} exact />
          </Switch>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;