import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './pages/enrty/entry.page';
import DefaultLayout from './layout/defaultLayout';


function App() {
  return (
    <div className="App">
      
      {/* <Entry/> */}

      <DefaultLayout>
        send page component 
      </DefaultLayout>
    </div>
  );
}

export default App;
