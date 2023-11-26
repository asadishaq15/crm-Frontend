import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './pages/enrty/entry.page';
import DefaultLayout from './layout/defaultLayout';
import Dashboard from './pages/dashboard/dashboard.page';
import AddTicket from './pages/new-ticket/addTicket.page';
import TicketLists from './ticket-listing/ticketLists.page';


function App() {
  return (
    <div className="App">
      
      {/* <Entry/> */}

      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket/> */}
        <TicketLists/>
      </DefaultLayout>
    </div>
  );
}

export default App;
