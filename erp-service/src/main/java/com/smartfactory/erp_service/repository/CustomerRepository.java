package com.smartfactory.erp_service.repository;

import com.smartfactory.erp_service.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
