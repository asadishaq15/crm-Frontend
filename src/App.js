import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './pages/enrty/entry.page';
import DefaultLayout from './layout/defaultLayout';
import Dashboard from './pages/enrty/dashboard/dashboard.page';


function App() {
  return (
    <div className="App">
      
      {/* <Entry/> */}

      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
