package com.customer.service;

import com.customer.entity.Customer;
import com.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImplementation implements CustomerService{

    CustomerRepository repository;

    public CustomerServiceImplementation(){
    }

    @Autowired
    public CustomerServiceImplementation(CustomerRepository repository){
        this.repository = repository;
    }

    @Override
    public void updateFirstName(int id, String firstName) {
        repository.updateFirstName(id, firstName);
    }

    @Override
    public List<Customer> getCustomers() {
        return repository.findAll();
    }

    @Override
    public Customer getCustomerById(int id) {
        Optional<Customer> customer = repository.findById(id);
        if(customer.isPresent()){
            return customer.get();
        }
        return null;
    }

    @Override
    public void deleteById(int id) {
        if(repository.existsById(id)){
            Customer customer = repository.findById(id).get();
            repository.delete(customer);
        }
    }

    @Override
    public Customer updateCustomerById(int id, Customer customer) {
        repository.updateCustomerDetails(id, customer.getFirstName(), customer.getLastName(), customer.getEmail());
        return repository.findById(id).get();
    }

}
