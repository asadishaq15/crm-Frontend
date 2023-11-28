import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BreadCrumb from '../../components/breadcrumbs/breadcrumb.comp'
import tickets from "../../assets/img/data/dummy-tickets.json"
import MessageHistory from '../../components/message-history/messageHistory.comp';
import UpdateTicket from '../../components/update-ticket/updateTicket.comp';
const ticket=tickets[0];
const Ticket = () => {

    const [message,setMessage]=useState("")
    useEffect(()=>{

    },[message])


    const handleOnChange =(e)=>{
        setMessage(e.target.value);

    }
    const handleOnSubmit =(e)=>{
        alert('form Submitted!')
    }
  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-border text-secondary'>
            <div className='subject'>Subject: {ticket.subject}</div>
            <div className='date'>Ticket Opened: {ticket.status}</div>
            <div className='status'>status: {ticket.addedat}</div>
            </Col>
            <Col className='text-right'>
            <Button variant='outline-info'>Close Ticket </Button>
            </Col>
            <Row className='mt-4'>
                <Col>
                    <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
        </Row>
        <hr/>
        <Row className='mt-4'>
            <Col>
            <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            />
            </Col>
        </Row>
    </Container>
  )
}

export default Ticket
