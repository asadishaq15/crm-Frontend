import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'; 
import './add-ticket-form.style.css'

const AddTicketForm = ({handleOnChange,handleOnSubmit,frmDt}) => {


  console.log(frmDt)
  return (

    <div className='class="mt-3 p-5 bg-light text-dark rounded form-box'>
        <h1 className='text-info text-center'>Add New Tickets</h1>
        <hr/>
    <Form autoComplete='off' onSubmit={handleOnSubmit} >
    <Form.Group as={Row}>
        
        
        <Form.Label column sm={3} >Subject</Form.Label>
        <Col sm={9}>
        <Form.Control
    
        name='subject'
        value={frmDt.subject}
        minLength="3"
        maxLength="10"
        onChange={handleOnChange}
        placeholder='Subject'
        required
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row}>
        <Form.Label column sm={3} >Issue Date </Form.Label>
       <Col sm={9}>
        <Form.Control
        type='date'
        name='issueDate'
        value={frmDt.issueDate}
        onChange={handleOnChange}
        required
        />
       </Col>

    </Form.Group>
    <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          as='textarea'
        name='detail'
        value={frmDt.detail}
        rows="5"
        onChange={handleOnChange}
        required
        />
    </Form.Group>
    <Button type='submit' variant="info" block >Add</Button>
</Form>
    </div>
  )
}

export default AddTicketForm

AddTicketForm.propTypes={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
}