import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/ticketTable.com'
import tickets from "../../assets/img/data/dummy-tickets.json"
import BreadCrumb from '../../components/breadcrumbs/breadcrumb.comp'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
   <Container>
    <Row>
        <Col>

        <BreadCrumb page="Dashboard"/>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mt-5 mb-2'>
            <Link to="/add-ticket">
        <Button variant="info" style={{fontSize:'2rem' , padding:'10px 30px'}}>
            Add new Ticket
        </Button>
        </Link>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mt-5 mb-2'>
       <div>
        Total tickets : 50
       </div>
       <div>
       Prnding tickets : 5
       </div>
        </Col>
    </Row>
    <Row>
        <Col className='mt-2'>
       Recently added tickets 
        </Col>
    </Row>
    <hr/>
    <Row>
        <Col className='recent-tickets'>
      <TicketTable
      tickets ={tickets}
      />
        </Col>
    </Row>
   </Container>
  )
}

export default Dashboard
