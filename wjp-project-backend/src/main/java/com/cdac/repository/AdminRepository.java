package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Admin;
import com.cdac.entity.Student;


public interface AdminRepository extends JpaRepository<Admin, String> {
	
//	select * from admin where email="surasemohit7@gmail.com" and password="mohit";
	@Query("select a from Admin a where a.email = ?1 and a.password = ?2")
	public Admin findByEmailAndPassword(String email, String password);
	
}
