import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadCrumb from '../../components/breadcrumbs/breadcrumb.comp'
import AddTicketForm from '../../components/add-ticket-form/addTicketForm.com'
import PropTypes from 'prop-types'; 

const initialFormData={
        subject:"",
        issueDate:"",
        detail:"",
}

const AddTicket = () => {
    const [formData,setFormData]=useState(initialFormData);
    useEffect(()=>{},[formData])

    const handleOnChange=(e)=>{
       
        const {name,value}= e.target;
     
        setFormData({
            ... formData,
            [name]:value,
        })
    }
    const handleOnSubmit = (e)=>{
     e.preventDefault();
     console.log("form submission recieved ",formData)
    }
  return (
  <Container>
    <Row>
        <Col>
        <BreadCrumb page="New Ticket"/>
        </Col>
    </Row>
    <Row>
        <Col>
     <AddTicketForm
     handleOnChange={handleOnChange}
     handleOnSubmit={handleOnSubmit}
     frmDt = {formData}
     />
        </Col>
    </Row>
  </Container>
  )
}

export default AddTicket
