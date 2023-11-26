import React from 'react'
import { Col, Form, FormGroup, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'; 
const SearchForm = ({handleOnChange,str}) => {

    console.log(str)
  return (
   <Form>
    <FormGroup as={Row}>
        <Form.Label column sm={2}>Search:{" "}</Form.Label>
        <Col sm="10">
            <Form.Control
            name="searchStr"
            placehodler="Search .."
            onChange={handleOnChange}
            value={str}

            />
        </Col>

    </FormGroup>
   </Form>
  )
}

export default SearchForm
SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,
  };