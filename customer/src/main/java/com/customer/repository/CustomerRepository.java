package com.customer.repository;

import com.customer.entity.Customer;
import com.customer.service.CustomerService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    Optional<Customer> findById(int id);

    void delete(Customer customer);

    @Override
    List<Customer> findAll();

    @Override
    boolean existsById(Integer integer);

    @Transactional
    @Modifying
    @Query(value = "update Customer c set c.firstName=:firstName where c.id=:id")
    void updateFirstName(@Param(value = "id") int id, @Param(value = "firstName")String firstName);

    @Transactional
    @Modifying
    @Query(value = "update Customer c set c.lastName=:lastName where c.id=:id")
    void updateLastName(@Param(value = "id") int id, @Param(value = "lastName")String lastName);

    @Transactional
    @Modifying
    @Query(value = "update Customer c set c.email=:email where c.id=:id")
    void updateEmail(@Param(value = "id") int id, @Param(value = "email")String email);

    @Transactional
    @Modifying
    @Query(value = "update Customer c set c.firstName=:firstName, c.lastName=:lastName, c.email=:email where c.id=:id")
    void updateCustomerDetails(@Param(value = "id") int id, @Param(value = "firstName")String firstName, @Param(value = "lastName")String lastName, @Param(value = "email")String email);

}
