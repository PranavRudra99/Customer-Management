import React from 'react';
import styles from './CustomerForm.module.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import baseUrl from '../../Url';

function CustomerForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [customer, setCustomer] = useState({
    firstName:'',
    lastName:'',
    email:''
  });
  
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setCustomer({
      ...customer, [name]: value
    })
  }
  
  useEffect(()=>{fetch(baseUrl + location.state.id)
    .then(data => data.json(),[])
    .then(data => {
      setCustomer(data);
    })},[])

  const saveUser = () =>{
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    }
    fetch(baseUrl + location.state.id, requestOptions).then(navigate('../'));
  }
  
  return (<div className={styles.CustomerForm}>
    <Form className='w-25 container p-3' onSubmit={() => saveUser()}>
      <Form.Group className='mb-3' controlId='firstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={customer.firstName} name='firstName' onChange={(e) =>{handleChange(e)}}/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='lastName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={customer.lastName} name='lastName' onChange={(e) =>{handleChange(e)}}/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={customer.email} name='email' onChange={(e) =>{handleChange(e)}}/>
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  </div>
  )

}
CustomerForm.propTypes = {};

CustomerForm.defaultProps = {};

export default CustomerForm;
