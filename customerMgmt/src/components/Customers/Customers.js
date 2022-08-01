import React from 'react';
import Customer from '../Customer/Customer';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import baseUrl from '../../Url';

function Customers() {
  const [customers, setCustomers] = useState([]);
  fetch(baseUrl)
    .then(data => data.json())
    .then(data => {
      setCustomers(data);
    })
  return (
    <div>
      <p>Customer Management System</p>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => {
            return <Customer customer={customer} key={customer.id} index={index} />
          })}
        </tbody>
      </Table>
    </div>)
}

Customers.propTypes = {};

Customers.defaultProps = {};

export default Customers;