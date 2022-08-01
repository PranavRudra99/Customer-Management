package com.customer.service;

import com.customer.entity.Customer;

import java.util.List;

public interface CustomerService {

    public void updateFirstName(int id, String firstName);

    public List<Customer> getCustomers();
    public Customer getCustomerById(int id);

    public void deleteById(int id);

    public Customer updateCustomerById(int id, Customer customer);

}
