import React, { useState } from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'; 
import { propTypes } from 'react-bootstrap/esm/Image';


const Login = ({handleOnChange,email,pass,handleOnSubmit,formSwitcher}) => {

  return (
    <Container className='form-container'>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <br/>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
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
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type='password'
                        name='password'
                        value={pass}
                        onChange={handleOnChange}
                        placeholder='Password'
                        required
                        />
                    </Form.Group>
                    <Button type='submit' >Login</Button>
                </Form>
                <hr/>

            </Col>
        </Row>
        <Col>
        <a href='#!' onClick={()=>formSwitcher('reset')}>Forgot Password</a>
        </Col>
    </Container>
  )
}


export default Login

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
  };