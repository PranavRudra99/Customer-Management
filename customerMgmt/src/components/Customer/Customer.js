import React from 'react';
import Button from 'react-bootstrap/Button'
import baseUrl from '../../Url';
import { useNavigate } from 'react-router-dom';

function Customer({ customer, index }) {
  const navigate = useNavigate();

  const deleteCustomer = (customerId) => {
    fetch(baseUrl + customerId, { method: 'DELETE' });
  }

  const redirect = (customerId) => {
    navigate('./edit', {
      state: {
        id: customerId
      }
    })
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.email}</td>
      <td>
        <div className='container-sm'>
          <div className='row justify-content-md-center'>
            <div className='col-md-auto'>
              <Button onClick={() => deleteCustomer(customer.id)}>Delete</Button>
            </div>
            <div className='col-md-auto'>
              <Button onClick={() => redirect(customer.id)}>Update</Button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )

}


Customer.propTypes = {};

Customer.defaultProps = {};

export default Customer;
