package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Student;


public interface StudentRepository extends JpaRepository<Student, Integer> {
	
//	select * from student where email="surasemohit7@gmail.com" and password="mohit";
	@Query("select s from Student s where s.email = ?1 and s.password = ?2")
	public Student findByEmailAndPassword(String email, String password);
	
	@Query("select s from Student s where s.email = ?1")
	public Student findByEmail(String email);
}
