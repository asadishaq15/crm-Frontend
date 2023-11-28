import React from 'react'
import { Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'; 
const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <br/>
        <Form.Text>
            Please reply your message here or update the ticket 
        </Form.Text>
        <Form.Control
        as ="textarea"
        rows="5"
        name='detail'
        value={msg}
        onChange={handleOnChange}
        />
        <div className = "float-end mb-3">
        <Button variant='info' type='submit' className='mt-4'>
            Reply
        </Button>
        </div>
    </Form>
  )
}

export default UpdateTicket


UpdateTicket.propTypes={
        msg:PropTypes.string.isRequired,
        handleOnChange:PropTypes.func.isRequired,
        handleOnSubmit:PropTypes.func.isRequired,

}