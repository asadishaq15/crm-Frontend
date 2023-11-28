import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './pages/enrty/entry.page';
import DefaultLayout from './layout/defaultLayout';
import Dashboard from './pages/dashboard/dashboard.page';
import AddTicket from './pages/new-ticket/addTicket.page';
import TicketLists from './ticket-listing/ticketLists.page';
import Ticket from './pages/ticket/ticket.page';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/private-route/privateRoute.comp';

function App() {
  return (
   <div className="App">
			<Router>
				<Routes>
        <Route exact path='/' element={<Entry/>}/>
       <Route path='/dashboard' element={<PrivateRoute/>} >
        <Route path='/dashboard' element={<Dashboard/>}/>
       </Route>
       <Route path='/add-ticket' element={<PrivateRoute/>} >
        <Route path='/add-ticket' element={<AddTicket/>}/>
       </Route>
       <Route path='/tickets' element={<PrivateRoute/>} >
        <Route path='/tickets' element={<TicketLists/>}/>
       </Route>
       <Route path='/ticket/:tid' element={<PrivateRoute/>} >
        <Route path='/ticket/:tid' element={<Ticket/>}/>
       </Route>
				</Routes>
			</Router>
		</div>

  );
}

export default App;
