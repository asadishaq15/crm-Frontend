import React, { useEffect, useState } from 'react'
import {  Button, Col, Container, Row } from 'react-bootstrap'
import BreadCrumb from '../components/breadcrumbs/breadcrumb.comp'
import SearchForm from '../components/search-form/searchForm.comp'
import TicketTable from '../components/ticket-table/ticketTable.com'
import tickets from "../assets/img/data/dummy-tickets.json"
import { Link } from 'react-router-dom'
const TicketLists = () => {
    const [str, setStr]=useState("")
    const [displayTicket, setDisplayTicket]=useState(tickets)

    useEffect(()=>{ },[str,displayTicket])

    const handleOnChange=(e)=>{

        const {value} = e.target;
        setStr(value);
        searchTicket(value)
    }

    const searchTicket = (sttr)=>{

        const displayTickets=tickets.filter((row)=>row.subject.toLowerCase().
        includes(sttr.toLowerCase()));
        setDisplayTicket(displayTickets);

    }
  return (
   <Container>
    <Row>
        <Col>
            <BreadCrumb page="Ticket Lists"/>
            
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col>
            <Link to="/add-ticket">
           <Button variant='info'>Add New Tickets!</Button>
           </Link>
        </Col>
        <Col>
            <Button variant='text-right'>
            <SearchForm
            handleOnChange={handleOnChange}
            str={str}
            />
           </Button>
        </Col>
    </Row>
   <hr/>
   <Row>
    <Col>
        <TicketTable
        tickets={displayTicket}
        />
    </Col>
   </Row>
   </Container>
  )
}

export default TicketLists
