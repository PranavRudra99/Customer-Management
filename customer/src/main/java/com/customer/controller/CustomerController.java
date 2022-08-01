package com.customer.controller;

import com.customer.entity.Customer;
import com.customer.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/customers")
public class CustomerController {

    private CustomerService customerService;

    public CustomerController(CustomerService customerService){
        this.customerService = customerService;
    }

    @GetMapping("/")
    public List<Customer> getCustomers(){return customerService.getCustomers();}

    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable(name = "id") int id){
        return customerService.getCustomerById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomerById(@PathVariable(name = "id") int id){
        customerService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable(name = "id") int id, @RequestBody Customer customer){
        return customerService.updateCustomerById(id, customer);
    }
}
