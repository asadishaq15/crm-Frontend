import React, { useState } from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'; 
const PasswordReset = ({handleOnChange,email,pass,handleOnResetSubmit, formSwitcher}) => {

  return (
    <Container className='form-container'>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <br/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter Email'
                        required
                        />
                    </Form.Group>
                   
                    <Button type='submit' >Reset Password</Button>
                </Form>
                <hr/>

            </Col>
        </Row>
        <Col>
        <a href='#!' onClick={()=>formSwitcher('login')}>Login now</a>
        </Col>
    </Container>
  )
}
export default PasswordReset;

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
  };
  